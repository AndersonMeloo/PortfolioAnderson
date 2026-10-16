"use client";

import { Fragment, useRef } from "react";
import { BookUser, Folder, Heart, Sparkles } from "lucide-react";
import { dockItems, type DockItem } from "@/data/navigation";
import { profile } from "@/data/profile";
import { AppTile } from "@/components/ui/AppTile";
import { Monogram } from "@/components/ui/Monogram";
import { useNow, zonedParts } from "@/hooks/useNow";
import { gsap, useGSAP, MOTION_OK } from "@/lib/gsap";

// Medidas verificadas na referência: repouso 40px, pico 60px, raio 100px.
const REST = 40;
const PEAK = 60;
const RANGE = 100;

// Balões em tom pastel da cor de cada ícone (fundo claro + texto escuro do mesmo tom).
const tooltipTone: Record<DockItem["icon"], string> = {
  home: "bg-[#F2F2F4] text-[#3A3A3C] border-black/10",
  sparkles: "bg-[#F1E8FF] text-[#6D28D9] border-[#6D28D9]/15",
  folder: "bg-[#E6F0FF] text-[#1D5FD1] border-[#1D5FD1]/15",
  calendar: "bg-[#FFF6D6] text-[#A16207] border-[#A16207]/20",
  heart: "bg-[#FFE8EC] text-[#C8183A] border-[#C8183A]/15",
  contact: "bg-[#E4F7E8] text-[#1A7F37] border-[#1A7F37]/15",
};

const weekday = new Intl.DateTimeFormat("pt-BR", { weekday: "short", timeZone: profile.clock.timeZone });

function CalendarFace() {
  const now = useNow();
  const day = now ? zonedParts(now, profile.clock.timeZone).day : null;
  return (
    <span className="flex h-full w-full flex-col items-center justify-center rounded-[24%] border border-black/10 bg-white leading-none shadow-[0_2px_6px_rgba(0,0,0,0.25)]">
      <span className="text-[0.22em] font-bold uppercase text-[#FF3B30]" suppressHydrationWarning>
        {now ? weekday.format(now).replace(".", "") : " "}
      </span>
      <span className="mt-[0.06em] text-[0.5em] font-semibold text-black" suppressHydrationWarning>
        {day ?? " "}
      </span>
    </span>
  );
}

function DockFace({ item }: { item: DockItem }) {
  const icon = "h-1/2 w-1/2";
  switch (item.icon) {
    case "home":
      return (
        <span className="flex h-full w-full items-center justify-center rounded-[24%] border border-black/10 bg-white text-black shadow-[0_2px_6px_rgba(0,0,0,0.25)] transition-colors hover:bg-[#f3f3f3]">
          <Monogram className="text-[0.42em]" />
        </span>
      );
    case "calendar":
      return <CalendarFace />;
    default: {
      const Icon = { folder: Folder, sparkles: Sparkles, heart: Heart, contact: BookUser }[item.icon];
      return (
        <AppTile color={item.color ?? "blue"} className="h-full w-full">
          <Icon className={icon} strokeWidth={2.2} fill={item.icon === "heart" || item.icon === "folder" ? "currentColor" : "none"} />
        </AppTile>
      );
    }
  }
}

/**
 * Dock fixo (sticky) com magnificação estilo macOS feita com gsap.quickTo:
 * cada ícone cresce conforme a distância horizontal do cursor ao seu centro.
 */
export function Dock() {
  const bar = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(`${MOTION_OK} and (pointer: fine)`, () => {
        const items = gsap.utils.toArray<HTMLElement>("[data-dock-item]", bar.current);
        const setters = items.map((el) => {
          const w = gsap.quickTo(el, "width", { duration: 0.35, ease: "power3.out" });
          const f = gsap.quickTo(el, "fontSize", { duration: 0.35, ease: "power3.out" });
          return (v: number) => {
            w(v);
            f(v);
          };
        });
        const el = bar.current!;
        const onMove = (e: PointerEvent) => {
          items.forEach((item, i) => {
            const r = item.getBoundingClientRect();
            const d = Math.abs(e.clientX - (r.left + r.width / 2));
            const t = Math.max(0, 1 - d / RANGE);
            setters[i](REST + (PEAK - REST) * t);
          });
        };
        const onLeave = () => setters.forEach((s) => s(REST));
        el.addEventListener("pointermove", onMove);
        el.addEventListener("pointerleave", onLeave);
        return () => {
          el.removeEventListener("pointermove", onMove);
          el.removeEventListener("pointerleave", onLeave);
        };
      });
    },
    { scope: bar },
  );

  return (
    <div className="pointer-events-none sticky top-4 z-[60] flex justify-center px-4 py-3 md:-mt-32 md:h-32 md:items-start md:py-0">
      <nav
        aria-label="Navegação principal"
        ref={bar}
        className="pointer-events-auto flex items-start gap-2.5 rounded-2xl border border-white/45 bg-white/30 px-3 pt-2 pb-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.6),0_8px_32px_rgba(0,0,0,0.12)] backdrop-blur-2xl backdrop-saturate-150"
      >
        {dockItems.map((item, i) => (
          <Fragment key={item.href}>
            <div data-dock-item className="group relative aspect-square" style={{ width: REST, fontSize: REST }}>
              <a
                href={item.href}
                aria-label={item.label}
                className="block h-full w-full rounded-[24%] text-[1em] transition-[filter] hover:brightness-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2E7CF6]"
                style={{ fontSize: "inherit" }}
              >
                <DockFace item={item} />
              </a>
              <span
                role="tooltip"
                className={`pointer-events-none absolute top-full left-1/2 mt-2.5 -translate-x-1/2 -translate-y-1 whitespace-nowrap rounded-md border px-2.5 py-1 text-[12px] font-semibold opacity-0 shadow-[0_4px_14px_rgba(0,0,0,0.1)] transition-all duration-150 group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:translate-y-0 group-focus-within:opacity-100 ${tooltipTone[item.icon]}`}
              >
                {item.label}
              </span>
            </div>
            {i === 0 && <div className="mt-0.5 h-8 w-px self-start bg-black/15" />}
          </Fragment>
        ))}
      </nav>
    </div>
  );
}
