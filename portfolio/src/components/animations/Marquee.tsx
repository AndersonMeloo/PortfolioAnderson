"use client";

import { useRef, type ReactNode } from "react";
import { gsap, useGSAP, MOTION_OK } from "@/lib/gsap";

/**
 * Faixa horizontal infinita. O conteúdo é duplicado e deslocado em -50%
 * num loop linear; pausa ao passar o mouse ou focar um item.
 * Com movimento reduzido vira uma faixa com rolagem manual.
 */
export function Marquee({
  children,
  duration = 40,
  label,
}: {
  children: ReactNode;
  duration?: number;
  label: string;
}) {
  const root = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(MOTION_OK, () => {
        const tween = gsap.to(track.current, { xPercent: -50, duration, ease: "none", repeat: -1 });
        const el = root.current!;
        const pause = () => gsap.to(tween, { timeScale: 0, duration: 0.4 });
        const play = () => gsap.to(tween, { timeScale: 1, duration: 0.4 });
        el.addEventListener("pointerenter", pause);
        el.addEventListener("pointerleave", play);
        el.addEventListener("focusin", pause);
        el.addEventListener("focusout", play);
        root.current!.dataset.animated = "true";
        return () => {
          el.removeEventListener("pointerenter", pause);
          el.removeEventListener("pointerleave", play);
          el.removeEventListener("focusin", pause);
          el.removeEventListener("focusout", play);
          delete el.dataset.animated;
        };
      });
    },
    { scope: root },
  );

  return (
    <div
      ref={root}
      role="region"
      aria-label={label}
      className="group/marquee relative overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden data-[animated=true]:overflow-hidden"
    >
      <div ref={track} className="flex w-max">
        <div className="flex shrink-0 gap-4 pr-4 md:gap-[18px] md:pr-[18px]">{children}</div>
        <div className="flex shrink-0 gap-4 pr-4 md:gap-[18px] md:pr-[18px]" aria-hidden inert>
          {children}
        </div>
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#fafafa] to-transparent md:w-24" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#fafafa] to-transparent md:w-24" />
    </div>
  );
}
