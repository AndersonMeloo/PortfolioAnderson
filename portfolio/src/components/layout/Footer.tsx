import { profile } from "@/data/profile";
import { Monogram } from "@/components/ui/Monogram";
import { TechIcon, techIcons } from "@/components/icons/TechIcon";

const links = [
  { label: "Email", href: `mailto:${profile.email}` },
  ...profile.socials.filter((s) => s.icon !== "gmail").map((s) => ({ label: s.label, href: s.href })),
  { label: "Currículo", href: profile.cv },
];

export function Footer() {
  return (
    <footer id="contato" className="relative z-50 scroll-mt-24 border-t border-black/10 bg-white px-6 py-16">
      <div className="mx-auto flex max-w-[1060px] flex-col gap-12 md:flex-row md:justify-between">
        <div>
          <div className="flex items-center gap-4">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-black/10 bg-white shadow-[0_2px_8px_rgba(0,0,0,0.12)]">
              <Monogram className="text-[20px]" />
            </span>
            <div>
              <p className="text-[15px] font-bold leading-snug">{profile.name}.</p>
              <p className="text-[15px] text-black/55">{profile.role}.</p>
            </div>
          </div>
          <ul className="mt-6 flex gap-2.5">
            {profile.socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  aria-label={s.label}
                  {...(s.href.startsWith("http") && { target: "_blank", rel: "noopener noreferrer" })}
                  className="flex h-10 w-10 items-center justify-center rounded-[24%] border border-black/5 shadow-[0_2px_6px_rgba(0,0,0,0.15)] transition-transform hover:-translate-y-0.5"
                  style={{ background: techIcons[s.icon].tile }}
                >
                  <TechIcon name={s.icon} variant="tile" className="h-[55%] w-[55%]" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-10 sm:flex-row sm:gap-24">
          <ul className="flex flex-col gap-2.5 leading-5">
            {links.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  {...(l.href.startsWith("http") || l.href.endsWith(".pdf") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="group flex items-center gap-2 text-sm font-medium text-black/70 transition-colors hover:text-black"
                >
                  {l.label}
                  <span aria-hidden className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </a>
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-3 text-sm">
            <p className="flex items-center gap-2 text-black/70">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#28B446] opacity-60 motion-reduce:animate-none" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#28B446]" />
              </span>
              Disponível para oportunidades
            </p>
            <p className="text-black/55">
              WhatsApp:{" "}
              <a
                href={`https://wa.me/${profile.whatsapp.number}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-black/70 transition-colors hover:text-black"
              >
                {profile.whatsapp.display}
              </a>
            </p>
            <p className="text-black/55">
              E-mail:{" "}
              <a href={`mailto:${profile.email}`} className="text-black/70 transition-colors hover:text-black">
                {profile.email}
              </a>
            </p>
            <p className="text-black/45">© {2026} {profile.name}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
