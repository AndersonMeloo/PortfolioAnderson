"use client";

import { useRef, type ReactNode } from "react";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap";

/**
 * Em telas sem hover (toque) ou estreitas, marca o elemento `[data-folder-group]`
 * com `data-open="true"` enquanto a seção está no centro da tela, e remove ao sair.
 * Assim o efeito de "abrir" (que no desktop vem do hover) se repete a cada vez
 * que a pessoa chega ou volta à seção.
 */
export function OpenOnView({ children, className }: { children: ReactNode; className?: string }) {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(hover: none), (max-width: 767px)", () => {
        const group = root.current?.querySelector<HTMLElement>("[data-folder-group]");
        if (!group) return;
        // Só escreve quando o estado muda (evita mutações repetidas a cada scroll).
        const open = () => {
          if (group.dataset.open !== "true") group.dataset.open = "true";
        };
        const close = () => {
          if (group.dataset.open) delete group.dataset.open;
        };
        // Histerese: abre perto do centro, mas só fecha quando sai totalmente da tela.
        // Assim a oscilação do toque / da barra de endereço na borda não gera abre-fecha (tremor).
        const openTrigger = ScrollTrigger.create({
          trigger: group,
          start: "top 80%",
          end: "bottom 20%",
          onEnter: open,
          onEnterBack: open,
        });
        const closeTrigger = ScrollTrigger.create({
          trigger: group,
          start: "top bottom",
          end: "bottom top",
          onLeave: close,
          onLeaveBack: close,
        });
        return () => {
          openTrigger.kill();
          closeTrigger.kill();
          close();
        };
      });
    },
    { scope: root },
  );

  return (
    <div ref={root} className={className}>
      {children}
    </div>
  );
}
