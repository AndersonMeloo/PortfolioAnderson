import { ArrowUpRight } from "lucide-react";
import { experiences } from "@/data/experience";
import { githubUrl } from "@/data/profile";
import { Reveal } from "@/components/animations/Reveal";
import { SectionTitle } from "@/components/ui/SectionTitle";

function Row({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div
      data-reveal
      className="flex flex-col gap-1 border-b border-black/10 py-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
    >
      <span className="text-[15px] leading-snug font-bold">{title}</span>
      <div className="text-sm text-black/55 sm:max-w-md sm:text-right">{children}</div>
    </div>
  );
}

/** Lista em linhas (equivalente a "Venture studio & portfolio work"). */
export function Experience() {
  return (
    <section id="experiencia" className="relative z-50 scroll-mt-24 border-t border-black/10 bg-white px-6 py-20">
      <div className="mx-auto max-w-[1060px]">
        <SectionTitle>Experiência profissional</SectionTitle>
        {experiences.map((exp, i) => (
          <div key={exp.role} className={i === 0 ? "mt-2" : "mt-14"}>
            <div className="mb-6 flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
              <h3 className={i === 0 ? "text-[15px] text-black/55" : "text-[20px] leading-tight font-extrabold tracking-[-0.02em]"}>
                {exp.role}
              </h3>
              <p className="text-sm text-black/45">
                {exp.company}
                {exp.period && ` · ${exp.period}`}
              </p>
            </div>
            <Reveal stagger={0.05}>
              {exp.items.map((item) => (
                <Row key={item.title} title={item.title}>
                  <p>{item.description}</p>
                </Row>
              ))}
            </Reveal>
          </div>
        ))}

        {/* Link genérico para o GitHub, sem destacar um projeto específico. */}
        <Reveal className="mt-14">
          <a
            data-reveal
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col gap-1.5 border-y border-black/10 py-5"
          >
            <span className="text-[15px] leading-snug font-bold">Mais projetos</span>
            <span className="inline-flex items-center gap-1 self-start text-sm text-black/55 transition-colors group-hover:text-black">
              Estudos, experimentos, criação de agents e outros projetos no GitHub
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
