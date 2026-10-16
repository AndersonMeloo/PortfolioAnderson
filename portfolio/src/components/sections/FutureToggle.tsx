"use client";

import { useId, useRef, useState, type ReactNode } from "react";
import { Plus } from "lucide-react";
import { gsap, useGSAP } from "@/lib/gsap";
import { cn } from "@/lib/cn";

/** Acordeão "O futuro +" animado com GSAP (altura + opacidade). */
export function FutureToggle({ children, className }: { children: ReactNode; className: string }) {
  const [open, setOpen] = useState(false);
  const panel = useRef<HTMLDivElement>(null);
  const icon = useRef<SVGSVGElement>(null);
  const id = useId();

  useGSAP(
    () => {
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const d = reduce ? 0 : 0.45;
      gsap.to(panel.current, { height: open ? "auto" : 0, opacity: open ? 1 : 0, duration: d, ease: "power3.inOut" });
      gsap.to(icon.current, { rotate: open ? 45 : 0, duration: d * 0.6, ease: "power2.out" });
    },
    { dependencies: [open] },
  );

  return (
    <div className="mt-10">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={id}
        onClick={() => setOpen((o) => !o)}
        className={cn(className, "mb-0 flex items-center gap-2 transition-colors hover:text-black/70")}
      >
        O futuro
        <Plus ref={icon} className="h-3.5 w-3.5" strokeWidth={2.4} />
      </button>
      <div id={id} ref={panel} className="h-0 overflow-hidden opacity-0" aria-hidden={!open}>
        <p className="pt-3 text-sm leading-[1.65] text-black/60">{children}</p>
      </div>
    </div>
  );
}
