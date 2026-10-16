import Link from "next/link";
import { ArrowLeft, Plane } from "lucide-react";
import { githubUrl, profile } from "@/data/profile";

/** Coordenadas no formato "23.5505° S, 46.6333° W". */
function coords(lat: number, lon: number) {
  const f = (v: number, pos: string, neg: string) => `${Math.abs(v).toFixed(4)}° ${v >= 0 ? pos : neg}`;
  return `${f(lat, "N", "S")}, ${f(lon, "E", "W")}`;
}

const meta = [profile.name, `${profile.weather.city}, BR`, coords(profile.weather.latitude, profile.weather.longitude), "GMT-3"];

/** Bloco de informações: fixo à esquerda no desktop, centralizado no topo no mobile. */
export function FlightAside() {
  return (
    <aside className="z-30 flex justify-center pt-12 md:fixed md:top-[72px] md:left-[72px] md:justify-start md:pt-0">
      <div className="flex gap-6 md:pl-0">
        <span
          className="hidden w-[6px] self-stretch md:block"
          style={{ backgroundImage: "radial-gradient(circle, rgb(0 0 0 / 0.18) 0.8px, transparent 1px)", backgroundSize: "3px 3px" }}
          aria-hidden
        />
        <div className="text-center font-mono text-[12px] leading-[22px] font-medium tracking-[0.15em] uppercase md:text-left">
          {meta.map((line, i) => (
            <p key={line} className={i === 0 ? "text-[#060606]" : "text-black/40"}>
              {line}
            </p>
          ))}
          <Link
            href="/"
            className="mt-4 inline-flex items-center gap-1.5 text-[10px] tracking-[0.18em] text-[#3a53ed] transition-opacity hover:opacity-70"
          >
            <ArrowLeft className="h-3 w-3" /> Portfólio
          </Link>
        </div>
      </div>
    </aside>
  );
}

/** "Plano de voo": avião + trilha tracejada que desce até a linha do tempo. */
export function FlightPlan() {
  return (
    <div className="relative h-[88px] [margin-left:calc(var(--tl-label)+10px)]" aria-hidden>
      <div className="absolute top-0 left-[34px] flex -translate-x-1/2 flex-col items-center gap-1.5">
        <span className="font-mono text-[6px] font-medium tracking-[0.13em] text-[#3a53ed] uppercase">Plano de voo</span>
        <Plane className="h-3.5 w-3.5 -rotate-45 text-[#3a53ed]" fill="currentColor" strokeWidth={1.5} />
      </div>
      <svg className="absolute top-[34px] left-0 h-[54px] w-[40px] overflow-visible" viewBox="0 0 40 54" fill="none">
        <path d="M34 0 C34 26, 0 22, 0 54" stroke="rgb(0 0 0 / 0.22)" strokeDasharray="3 3" />
      </svg>
    </div>
  );
}

/** Rodapé fixo com links + degradê que esmaece/desfoca o conteúdo que passa por baixo. */
export function FlightFooter() {
  const links = [
    { label: "LinkedIn", href: profile.socials.find((s) => s.icon === "linkedin")?.href ?? "#" },
    { label: "GitHub", href: githubUrl },
    { label: "Email", href: `mailto:${profile.email}` },
  ];
  return (
    <>
      <div
        className="pointer-events-none fixed inset-x-0 bottom-0 z-20 h-[22vh] bg-gradient-to-t from-[#faf5f5] via-[#faf5f5]/80 to-transparent backdrop-blur-[3px] [mask-image:linear-gradient(to_top,black_35%,transparent)]"
        aria-hidden
      />
      <footer className="fixed inset-x-0 bottom-0 z-30 flex justify-center gap-8 pb-10 md:pb-11">
        {links.map((l) => (
          <a
            key={l.label}
            href={l.href}
            {...(l.href.startsWith("http") && { target: "_blank", rel: "noopener noreferrer" })}
            className="font-mono text-[11px] font-medium tracking-[0.2em] text-black/50 uppercase transition-colors hover:text-black"
          >
            {l.label}
          </a>
        ))}
      </footer>
    </>
  );
}
