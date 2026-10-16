import { ArrowUpRight } from "lucide-react";
import { practice } from "@/data/experience";
import { Marquee } from "@/components/animations/Marquee";
import { TechIcon } from "@/components/icons/TechIcon";
import { SectionTitle } from "@/components/ui/SectionTitle";

/** Carrossel infinito de cards (equivalente ao "In the press" da referência). */
export function Practice() {
  return (
    <section id="na-pratica" className="relative z-50 scroll-mt-24 overflow-hidden bg-[#fafafa] py-16">
      <div className="mx-auto max-w-[1060px] px-6">
        <SectionTitle>Na prática</SectionTitle>
      </div>
      <div className="mt-10">
        <Marquee label="Como eu trabalho">
          {practice.map((c) => (
            <a
              key={c.label}
              href="#experiencia"
              className="flex h-[145px] w-[248px] shrink-0 flex-col rounded-xl border border-black/[0.07] bg-white p-4 shadow-[0_1px_3px_rgba(0,0,0,0.04)] transition-shadow hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)]"
            >
              <span className="flex items-center gap-2 text-[11px] font-bold tracking-[0.04em] text-black/55 uppercase">
                <TechIcon name={c.icon} variant="mono" className="h-4 w-4 text-black/60" />
                {c.label}
              </span>
              <span className="mt-3 text-[13px] leading-[1.4] font-semibold text-black/80">{c.title}</span>
              <span className="mt-auto flex items-center gap-1 text-[11px] font-medium text-black/45">
                Ver experiência <ArrowUpRight className="h-3 w-3" />
              </span>
            </a>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
