"use client";

import { useRef, type HTMLAttributes, type ReactNode } from "react";
import { gsap, ScrollTrigger, useGSAP, MOTION_OK } from "@/lib/gsap";

/**
 * Anima os descendentes marcados com `data-reveal` quando entram na viewport
 * (opacidade + deslocamento vertical, em lotes escalonados).
 * O estado inicial oculto vem do CSS (`html.js [data-reveal]`) para não piscar.
 */
export function Reveal({
  children,
  className,
  y = 16,
  stagger = 0.06,
  duration = 0.7,
  start = "top 90%",
  ...rest
}: HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  className?: string;
  y?: number;
  stagger?: number;
  duration?: number;
  start?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(MOTION_OK, () => {
        const items = gsap.utils.toArray<HTMLElement>("[data-reveal]", ref.current);
        gsap.set(items, { y });
        ScrollTrigger.batch(items, {
          start,
          once: true,
          onEnter: (batch) =>
            gsap.to(batch, { opacity: 1, y: 0, duration, stagger, ease: "power2.out", overwrite: true }),
        });
      });
    },
    { scope: ref },
  );

  return (
    <div ref={ref} className={className} {...rest}>
      {children}
    </div>
  );
}
