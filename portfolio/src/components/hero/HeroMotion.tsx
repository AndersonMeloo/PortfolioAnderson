"use client";

import { useRef, type CSSProperties, type ReactNode } from "react";
import { gsap, Draggable, useGSAP, MOTION_OK } from "@/lib/gsap";

/**
 * Comportamentos da hero desktop:
 * - Intro: título primeiro, depois widgets/pastas em sequência (y: 8 → 0, stagger .05, delay .08).
 * - Widgets e pastas arrastáveis (GSAP Draggable) com leve aumento enquanto arrasta.
 */
export function HeroMotion({ children, className, style }: { children: ReactNode; className?: string; style?: CSSProperties }) {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add(MOTION_OK, () => {
        const tl = gsap.timeline({ defaults: { ease: "power2.out" } });
        tl.fromTo("[data-intro-title]", { opacity: 0, y: 8 }, { opacity: 1, y: 0, duration: 0.6, stagger: 0.08 });
        tl.fromTo(
          "[data-intro]",
          { opacity: 0, y: 8 },
          { opacity: 1, y: 0, duration: 0.45, stagger: 0.05, clearProps: "transform" },
          0.08 + 0.3,
        );
      });

      mm.add("(min-width: 768px) and (pointer: fine)", () => {
        const container = root.current!;
        const draggables = Draggable.create(gsap.utils.toArray<HTMLElement>("[data-drag]", container), {
          bounds: container,
          dragClickables: true,
          zIndexBoost: true,
          minimumMovement: 4,
          onPress() {
            gsap.to(this.target, { scale: 1.04, duration: 0.2, ease: "power2.out" });
          },
          onRelease() {
            gsap.to(this.target, { scale: 1, duration: 0.25, ease: "power2.out" });
          },
          onDragStart() {
            (this.target as HTMLElement).dataset.dragging = "true";
          },
          onDragEnd() {
            const el = this.target as HTMLElement;
            setTimeout(() => delete el.dataset.dragging, 0);
          },
        });

        // Um arraste não deve abrir o link da pasta/app.
        const blockClick = (e: MouseEvent) => {
          if ((e.target as HTMLElement).closest("[data-dragging]")) {
            e.preventDefault();
            e.stopPropagation();
          }
        };
        container.addEventListener("click", blockClick, true);
        return () => {
          container.removeEventListener("click", blockClick, true);
          draggables.forEach((d) => d.kill());
        };
      });
    },
    { scope: root },
  );

  return (
    <div ref={root} className={`hero-motion ${className ?? ""}`} style={style}>
      {children}
    </div>
  );
}
