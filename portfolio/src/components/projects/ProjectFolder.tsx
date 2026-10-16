import Image from "next/image";
import type { Project } from "@/types/content";
import { PillLink } from "@/components/ui/PillLink";
import { Reveal } from "@/components/animations/Reveal";

// Recorte da aba da pasta (mesma geometria da referência: aba arredondada com curva suave).
const TAB_PATH = "M0 80 L0 32 Q0 2 30 2 L198 2 Q226 2 240 20 C254 36 264 40 300 40 L320 40 L320 80 Z";

/**
 * Uma "pasta" da pilha de projetos. No desktop fica sticky em top: 96px
 * com z-index crescente, então cada pasta desliza por cima da anterior.
 */
export function ProjectFolder({ project, index }: { project: Project; index: number }) {
  const n = String(index + 1).padStart(2, "0");
  return (
    <article
      id={project.slug}
      aria-labelledby={`${project.slug}-title`}
      className="z-10 flex h-auto w-full scroll-mt-24 flex-col max-md:static max-md:mt-4 md:sticky md:top-24 md:h-[calc(100dvh-6rem)]"
      style={{ zIndex: 10 + index }}
    >
      {/* Aba */}
      <div className="relative h-20 w-full shrink-0">
        <div className="absolute inset-x-0 bottom-[-32px] h-[72px] rounded-t-[30px] bg-[#e5e7eb]" />
        <div className="absolute top-0 left-0 h-20 w-[320px] bg-[#e5e7eb]" style={{ clipPath: `path("${TAB_PATH}")` }} />
        <span className="absolute top-3 left-12 flex h-9 items-center text-[13px] font-bold tracking-[0.08em] text-black/50 uppercase">
          {project.tab}
        </span>
      </div>

      {/* Corpo */}
      <div className="relative -mt-2 flex min-h-0 w-full flex-1 items-start overflow-hidden rounded-t-[28px] bg-gradient-to-b from-[#f7f8fa] via-[#f0f2f5] to-[#e7e9ed] shadow-[inset_0_2px_1px_rgba(255,255,255,0.35),0_-4px_16px_rgba(0,0,0,0.03)] max-md:rounded-b-[28px] md:items-center">
        <Reveal data-folder-content className="mx-auto w-full max-w-[1100px] px-8 py-12 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:max-h-full md:overflow-y-auto md:px-12" y={20} stagger={0.1}>
          <p data-reveal className="mb-2 text-[10px] font-semibold tracking-[0.15em] text-black/35 uppercase">
            Projeto nº{n}
          </p>
          <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr]">
            <div data-reveal>
              <h2 id={`${project.slug}-title`} className="mb-4 max-w-md text-2xl leading-tight font-bold md:text-3xl">
                {project.heading}
              </h2>
              <p className="max-w-md text-sm leading-relaxed text-black/60">{project.summary}</p>
              <p className="mt-4 max-w-md text-[11px] leading-relaxed font-medium text-black/40">{project.tech.join(" · ")}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.links.live && <PillLink href={project.links.live}>Ver projeto</PillLink>}
                {project.links.code && <PillLink href={project.links.code}>Código</PillLink>}
              </div>
            </div>

            {/* Nota amarela */}
            <div data-reveal className="group transition-transform duration-300 hover:-translate-y-1.5">
              <div className="rounded-[6px] shadow-[0_14px_30px_rgba(0,0,0,0.18)] transition-shadow duration-300 group-hover:shadow-[0_22px_48px_rgba(0,0,0,0.24)]">
                <div className="flex h-7 items-center rounded-t-[6px] border border-b-0 border-[#d9b83a]/40 bg-gradient-to-b from-[#F4DA71] via-[#EACB4E] to-[#DFBA35] px-3">
                  <span className="text-[11px] font-bold text-black/50">{project.name}</span>
                </div>
                <div className="rounded-b-[6px] border border-t-0 border-white/60 bg-white/60 p-6 backdrop-blur-xl backdrop-saturate-150">
                  <div className="relative mb-5 aspect-[16/7] max-h-[24dvh] w-full overflow-hidden rounded-[4px] bg-[#eef0f4] max-md:hidden">
                    <Image src={project.image.src} alt={project.image.alt} fill sizes="(min-width: 1100px) 540px, 50vw" className="object-cover" />
                  </div>
                  <ul className="space-y-4">
                    {project.features.map((f) => (
                      <li key={f.title}>
                        <p className="text-[15px] leading-snug font-bold text-black/85">{f.title}</p>
                        <p className="mt-0.5 text-sm leading-snug text-black/55 max-md:hidden">{f.detail}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </article>
  );
}
