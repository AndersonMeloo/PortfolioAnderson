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
        const st = ScrollTrigger.create({
          trigger: group,
          start: "top 75%",
          end: "bottom 25%",
          onToggle: (self) => {
            if (self.isActive) group.dataset.open = "true";
            else delete group.dataset.open;
          },
        });
        return () => {
          st.kill();
          delete group.dataset.open;
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
