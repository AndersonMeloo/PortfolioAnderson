import type { ReactNode } from "react";
import type { IconType } from "react-icons";
import { SiNestjs, SiReact } from "react-icons/si";
import { githubUrl } from "@/data/profile";
import { OpenOnView } from "@/components/animations/OpenOnView";

/** Mini "janela de editor" desenhada em código (sem imagem): logo, rótulo e duas linhas. */
function CodeCard({ Icon, color, label, children }: { Icon: IconType; color: string; label: string; children: ReactNode }) {
  return (
    <span className="flex aspect-square w-full flex-col justify-between bg-[#1e1f24] p-[9%] text-left">
      <span className="flex items-center gap-[6%]">
        <Icon className="h-auto w-[34%] shrink-0" color={color} />
        <span className="text-[7px] leading-none font-bold text-white/85 md:text-[8px]">{label}</span>
      </span>
      <span className="flex flex-col gap-[3px] font-mono text-[5px] leading-tight md:text-[6px]">{children}</span>
    </span>
  );
}

/**
 * "Meu [pasta] GitHub": no hover a frente da pasta inclina em 3D,
 * os cartões sobem girando e aparece a pílula "Abrir" (equivalente ao Playground).
 * No mobile (sem hover), o mesmo efeito acontece ao entrar na seção (OpenOnView).
 */
export function GithubShowcase() {
  const card =
    "absolute bottom-[30%] left-1/2 block w-[44%] overflow-hidden rounded-lg border-[3px] border-white bg-[#1e1f24] shadow-md transition-transform duration-300 ease-out motion-reduce:transition-none";
  return (
    <section id="github" className="relative z-50 scroll-mt-24 border-t border-black/10 bg-white px-6 py-28">
      <OpenOnView>
      <a
        data-folder-group
        href={githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group mx-auto flex w-fit flex-col items-center outline-none"
      >
        <span className="flex flex-nowrap items-center justify-center gap-3 sm:gap-5 md:gap-8">
          <span className="text-[38px] font-extrabold tracking-tight sm:text-5xl md:text-7xl">Meu</span>
          <span className="relative block h-[76px] w-[106px] shrink-0 sm:h-[108px] sm:w-[150px] md:h-[126px] md:w-[176px]" aria-hidden>
            <span className="absolute top-[8%] left-0 h-[34%] w-[42%] rounded-t-xl bg-[#c8ccd3]" />
            <span className="absolute inset-x-0 bottom-0 h-[78%] rounded-2xl bg-gradient-to-b from-[#c8ccd3] to-[#b6bac2]" />
            <span className={`${card} aspect-square -translate-x-[95%] group-hover:-translate-x-[108%] group-data-[open=true]:-translate-x-[108%] group-hover:-translate-y-[48%] group-data-[open=true]:-translate-y-[48%] group-hover:-rotate-12 group-data-[open=true]:-rotate-12 group-focus-visible:-translate-x-[108%] group-focus-visible:-translate-y-[48%] group-focus-visible:-rotate-12`}>
              <CodeCard Icon={SiReact} color="#58C4DC" label="Hooks">
                <span className="text-[#c792ea]">
                  const <span className="text-white/80">[a, set]</span>
                </span>
                <span className="text-[#58C4DC]">useState()</span>
                <span className="text-[#58C4DC]">useEffect()</span>
              </CodeCard>
            </span>
            <span className={`${card} aspect-square -translate-x-[5%] group-hover:translate-x-[8%] group-data-[open=true]:translate-x-[8%] group-hover:-translate-y-[48%] group-data-[open=true]:-translate-y-[48%] group-hover:rotate-12 group-data-[open=true]:rotate-12 group-focus-visible:translate-x-[8%] group-focus-visible:-translate-y-[48%] group-focus-visible:rotate-12`}>
              <CodeCard Icon={SiNestjs} color="#E0234E" label="API">
                <span className="text-[#ffcb6b]">@Controller()</span>
                <span className="text-[#ffcb6b]">@Get(&apos;:id&apos;)</span>
                <span className="text-white/80">findOne()</span>
              </CodeCard>
            </span>
            <span className="absolute bottom-[30%] left-1/2 flex aspect-square w-[32%] -translate-x-1/2 -rotate-1 items-center justify-center rounded-lg bg-[#FFE066] p-1 shadow-md transition-transform duration-300 ease-out group-hover:-translate-y-[68%] group-data-[open=true]:-translate-y-[68%] group-focus-visible:-translate-y-[68%] motion-reduce:transition-none">
              <span className="text-center text-[7px] leading-tight font-semibold text-black/70 md:text-[8px]">Código aberto</span>
            </span>
            <span className="absolute inset-x-0 bottom-0 z-10 block h-[62%] origin-bottom rounded-2xl bg-gradient-to-b from-[#f2f3f5] to-[#dfe1e6] shadow-[inset_0_1px_0_rgba(255,255,255,0.8),0_-2px_8px_rgba(0,0,0,0.06)] transition-transform duration-300 ease-out [transform:perspective(700px)] group-hover:[transform:perspective(700px)_rotateX(-24deg)] group-data-[open=true]:[transform:perspective(700px)_rotateX(-24deg)] group-focus-visible:[transform:perspective(700px)_rotateX(-24deg)] motion-reduce:transition-none" />
            <span className="absolute top-1/2 left-1/2 z-20 -translate-x-1/2 -translate-y-1/2 scale-90 rounded-full bg-[#F7CE46] px-5 py-2 text-sm font-semibold text-black opacity-0 shadow-lg transition-all duration-300 group-hover:scale-100 group-data-[open=true]:scale-100 group-hover:opacity-100 group-data-[open=true]:opacity-100 group-focus-visible:scale-100 group-focus-visible:opacity-100">
              Abrir
            </span>
          </span>
          <span className="text-[38px] font-extrabold tracking-tight sm:text-5xl md:text-7xl">GitHub</span>
        </span>
        <span className="mt-8 text-center text-sm text-black/45">Mais projetos, estudos e experimentos em código aberto.</span>
      </a>
      </OpenOnView>
    </section>
  );
}
