import { profile } from "@/data/profile";
import { FutureToggle } from "./FutureToggle";

const label = "mb-3 text-xs font-semibold tracking-[0.15em] text-black/40 uppercase";

/** Texto com parágrafos: uma linha em branco (\n\n) no dado vira um novo parágrafo. */
function Paragraphs({ text }: { text: string }) {
  return (
    <div className="space-y-3 text-sm leading-[1.65] text-black/60">
      {text.split(/\n\s*\n/).map((part) => (
        <p key={part}>{part.trim()}</p>
      ))}
    </div>
  );
}

/** Janela "sobre-mim.txt" com semáforos (equivalente a about-me.txt). */
export function AboutWindow() {
  return (
    <section id="sobre" className="relative z-50 mx-auto max-w-[1060px] scroll-mt-24 px-6 py-16">
      <div className="overflow-hidden rounded-xl border border-black/10 bg-white shadow-[0_30px_60px_-20px_rgba(0,0,0,0.18)]">
        <div className="relative flex h-8 items-center border-b border-black/10 bg-[#f5f5f5] px-4">
          <span className="flex gap-2" aria-hidden>
            <span className="h-3 w-3 rounded-full bg-[#FF5F57]" />
            <span className="h-3 w-3 rounded-full bg-[#FEBC2E]" />
            <span className="h-3 w-3 rounded-full bg-[#28C840]" />
          </span>
          <h2 className="absolute left-1/2 -translate-x-1/2 text-[11px] font-medium text-black/55">sobre-mim.txt</h2>
        </div>
        <div className="grid gap-10 px-8 py-12 md:grid-cols-2 md:gap-14 md:px-14">
          <div>
            <p className={label}>Antes</p>
            <Paragraphs text={profile.about.then} />
          </div>
          <div>
            <p className={label}>Agora</p>
            <Paragraphs text={profile.about.now} />
            <FutureToggle className={label}>{profile.about.future}</FutureToggle>
          </div>
        </div>
      </div>
    </section>
  );
}
