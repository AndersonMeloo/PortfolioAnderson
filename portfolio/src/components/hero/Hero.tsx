import type { CSSProperties, ReactNode } from "react";
import { profile, whatsappUrl } from "@/data/profile";
import { desktopFolders } from "@/data/navigation";
import { MenuBar } from "@/components/layout/MenuBar";
import { HeroMotion } from "./HeroMotion";
import { Reveal } from "@/components/animations/Reveal";
import { ClockWidget } from "./widgets/ClockWidget";
import { CalendarCard, CalendarWidget } from "./widgets/CalendarWidget";
import { MusicWidget } from "./widgets/MusicWidget";
import { WeatherWidget } from "./widgets/WeatherWidget";
import { AppGridWidget, DesktopFolder, PhotoWidget } from "./widgets/StaticWidgets";
import { Widget } from "@/components/ui/Widget";

// Coluna de pastas à direita com a grade de apps logo abaixo. Em telas altas: começa
// em 90px com passo de 108px (como na referência). Em telas baixas o passo cai até 96px
// e a coluna sobe (até 40px) para que tudo caiba na primeira dobra.
const STEP_MIN = 96;
const GRID_H = 136; // grade de apps (124px) + espaço acima dela
const folderVars = (n: number) =>
  ({
    "--folder-step": `clamp(${STEP_MIN}px, calc((100dvh - 330px) / ${n}), 108px)`,
    "--folder-top": `clamp(40px, calc(100dvh - ${n * STEP_MIN + GRID_H + 12}px), 90px)`,
  }) as CSSProperties;
const folderTop = (i: number) => `calc(var(--folder-top) + ${i} * var(--folder-step))`;

const folders = desktopFolders;

/** Item posicionado e arrastável do "desktop". */
function Slot({ style, children }: { style: CSSProperties; children: ReactNode }) {
  return (
    <div data-drag data-intro className="absolute z-20 cursor-grab touch-none select-none active:cursor-grabbing" style={style}>
      {children}
    </div>
  );
}

function Title({ className }: { className?: string }) {
  const { headline } = profile;
  return (
    <h1 className={className}>
      <span data-intro-title className="block">
        {headline.intro}
      </span>
      <span data-intro-title className="block">
        {headline.lead}{" "}
        <span className="underline decoration-black/25 decoration-[3px] underline-offset-[6px]">{headline.highlight}</span>.
      </span>
    </h1>
  );
}

export function Hero() {
  return (
    <header id="inicio" className="relative z-0 w-full bg-[#fafafa]">
      {/* Desktop: área de trabalho estilo macOS */}
      <HeroMotion
        className="relative hidden h-[100dvh] min-h-[720px] overflow-hidden md:block"
        style={folderVars(folders.length)}
      >
        <MenuBar />

        <Slot style={{ top: 90, left: 24 }}>
          <ClockWidget />
        </Slot>
        <Slot style={{ top: 90, left: 194 }}>
          <CalendarWidget />
        </Slot>
        <Slot style={{ top: 90, left: 364 }}>
          <MusicWidget />
        </Slot>
        <Slot style={{ top: 264, left: 24 }}>
          <WeatherWidget />
        </Slot>
        <Slot style={{ top: 404, left: 24 }}>
          <PhotoWidget className="w-[150px]" />
        </Slot>

        {folders.map((f, i) => (
          <Slot key={f.label ?? `soon-${i}`} style={{ top: folderTop(i), right: "2.5%" }}>
            <DesktopFolder label={f.label} href={f.href} />
          </Slot>
        ))}

        <Slot style={{ top: `calc(${folderTop(folders.length)} + 12px)`, right: 48 }}>
          <AppGridWidget />
        </Slot>

        <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center px-6 pb-6 text-center">
          <Title className="pointer-events-auto text-[48px] leading-[1.05] font-extrabold tracking-[-0.025em] text-black" />
          <p data-intro-title className="pointer-events-auto mt-6 max-w-[540px] text-base leading-[26px] text-black/50">
            {profile.subtitle}
          </p>
        </div>
      </HeroMotion>

      {/* Mobile: pilha de cards */}
      {/* Mesmos widgets do desktop, empilhados, com entrada animada (sem arrastar, para não brigar com a rolagem). */}
      <Reveal data-hero-mobile className="flex flex-col gap-4 px-5 pt-10 pb-6 md:hidden" y={12} stagger={0.06} start="top 98%">
        <Widget data-reveal className="p-5">
          <Title className="text-[30px] leading-[1.08] font-extrabold tracking-[-0.025em]" />
          <p className="mt-3 text-[15px] leading-relaxed text-black/50">{profile.subtitle}</p>
        </Widget>
        <div data-reveal className="grid grid-cols-2 gap-4">
          <ClockWidget className="aspect-square h-auto w-full p-4" />
          <PhotoWidget className="w-full" sizes="50vw" />
        </div>
        <div data-reveal>
          <WeatherWidget className="h-[110px] w-full" />
        </div>
        <div data-reveal>
          <CalendarCard href={whatsappUrl} />
        </div>
        <div data-reveal>
          <MusicWidget className="w-full" />
        </div>
        <div data-reveal className="grid grid-cols-4 gap-y-4 py-2">
          {folders.map((f, i) => (
            <div key={f.label ?? `soon-${i}`} className="flex justify-center">
              <DesktopFolder label={f.label} href={f.href} compact />
            </div>
          ))}
        </div>
        <div data-reveal>
          <AppGridWidget />
        </div>
      </Reveal>
    </header>
  );
}
