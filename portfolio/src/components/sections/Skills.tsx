import { Brain, CodeXml, Layers, Server, Users } from "lucide-react";
import { skills } from "@/data/skills";
import { AppTile } from "@/components/ui/AppTile";
import { Reveal } from "@/components/animations/Reveal";
import { SectionTitle } from "@/components/ui/SectionTitle";

const icons = { code: CodeXml, server: Server, brain: Brain, layers: Layers, users: Users };

export function Skills() {
  return (
    <section id="habilidades" className="relative z-50 scroll-mt-24 bg-white px-6 py-20">
      <div className="mx-auto max-w-[1060px]">
        <SectionTitle>Habilidades</SectionTitle>
        <Reveal className="mt-10 grid grid-cols-2 gap-x-5 gap-y-8 md:grid-cols-5">
          {skills.map((s) => {
            const Icon = icons[s.icon];
            return (
              <article key={s.title} data-reveal>
                <div className="flex aspect-[196/144] items-center justify-center rounded-2xl border border-black/[0.06] bg-[#f5f5f5]">
                  <AppTile color={s.color} className="h-[72px] w-[72px]">
                    <Icon className="h-9 w-9" strokeWidth={1.8} />
                  </AppTile>
                </div>
                <h3 className="mt-6 text-[15px] leading-[1.375] font-bold">{s.title}</h3>
                <p className="mt-1.5 text-sm leading-[1.375] text-black/55">{s.description}</p>
              </article>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
