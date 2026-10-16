"use client";

import { useRef, type ReactNode } from "react";
import { gsap, ScrollTrigger, useGSAP, MOTION_OK, REDUCED } from "@/lib/gsap";

/**
 * Linha do tempo com progresso ligado ao scroll: a linha azul cresce de cima
 * para baixo e cada ponto (`[data-stop]`) acende ao ser alcançado.
 * A linha azul só cobre os trechos em andamento; os planejados (`[data-planned]`)
 * ficam apenas no trilho tracejado ("ainda não voado").
 * Os trechos (`[data-leg]`) entram com fade + deslocamento.
 */
export function FlightTimeline({ children }: { children: ReactNode }) {
  const root = useRef<HTMLDivElement>(null);
  const fill = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      const stops = gsap.utils.toArray<HTMLElement>("[data-stop]", root.current);
      const flown = gsap.utils.toArray<HTMLElement>("[data-leg]:not([data-planned])", root.current);
      const lastFlown = flown[flown.length - 1];

      // Altura da linha azul = até o fim do último trecho em andamento (recalcula no resize).
      const sizeFill = () => {
        if (!fill.current) return;
        fill.current.style.height = lastFlown ? `${lastFlown.offsetTop + lastFlown.offsetHeight}px` : "0px";
      };
      sizeFill();
      ScrollTrigger.addEventListener("refreshInit", sizeFill);

      mm.add(MOTION_OK, () => {
        if (lastFlown)
          gsap.fromTo(
            fill.current,
            { scaleY: 0 },
            {
              scaleY: 1,
              ease: "none",
              scrollTrigger: { trigger: root.current, start: "top 62%", endTrigger: lastFlown, end: "bottom 62%", scrub: 0.4 },
            },
          );
        stops.forEach((stop) =>
          ScrollTrigger.create({
            trigger: stop,
            start: "top 62%",
            onEnter: () => stop.setAttribute("data-active", ""),
            onLeaveBack: () => stop.removeAttribute("data-active"),
          }),
        );
        gsap.utils.toArray<HTMLElement>("[data-leg]", root.current).forEach((leg) =>
          gsap.fromTo(
            leg,
            { opacity: 0, y: 24 },
            { opacity: 1, y: 0, duration: 0.8, ease: "power2.out", scrollTrigger: { trigger: leg, start: "top 88%", once: true } },
          ),
        );
      });

      // Sem animação: linha (até o trecho atual) completa e pontos acesos.
      mm.add(REDUCED, () => {
        gsap.set(fill.current, { scaleY: 1 });
        stops.forEach((s) => s.setAttribute("data-active", ""));
      });

      return () => ScrollTrigger.removeEventListener("refreshInit", sizeFill);
    },
    { scope: root },
  );

  return (
    <div ref={root} className="relative">
      {/* Trilho tracejado (linha inteira) + preenchimento azul (só trechos em andamento) */}
      <div className="pointer-events-none absolute top-0 bottom-0 left-[calc(var(--tl-label)+9.5px)] w-px border-l border-dashed border-black/15" aria-hidden />
      <div
        ref={fill}
        className="pointer-events-none absolute top-0 left-[calc(var(--tl-label)+9.5px)] h-0 w-px origin-top bg-[#3a53ed]"
        aria-hidden
      />
      <span
        className="pointer-events-none absolute -bottom-1 left-[calc(var(--tl-label)+6px)] text-[8px] leading-none text-black/30"
        aria-hidden
      >
        ▾
      </span>
      {children}
    </div>
  );
}
