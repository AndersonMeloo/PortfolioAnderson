"use client";

import { useRef, useState } from "react";
import { gsap, useGSAP, MOTION_OK } from "@/lib/gsap";

// Posições da persiana (em unidades do viewBox): parcialmente baixada, levantada (hover) e fechada.
const SHADE = { rest: -150, hover: -172, closed: 0 };

/**
 * Janela de avião desenhada em SVG: moldura, céu com nuvens que deslizam
 * e uma persiana que sobe no hover e fecha/abre no clique.
 */
export function AirplaneWindow() {
  const root = useRef<HTMLButtonElement>(null);
  const shade = useRef<SVGGElement>(null);
  const clouds = useRef<SVGGElement>(null);
  const [closed, setClosed] = useState(false);
  const hovering = useRef(false);

  const moveShade = (y: number, duration = 0.6) => gsap.to(shade.current, { y, duration, ease: "power3.out", overwrite: true });

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(MOTION_OK, () => {
        gsap.to(clouds.current, { x: -160, duration: 38, ease: "none", repeat: -1 });
      });
      gsap.set(shade.current, { y: SHADE.rest });
    },
    { scope: root },
  );

  const toggle = () => {
    const next = !closed;
    setClosed(next);
    moveShade(next ? SHADE.closed : hovering.current ? SHADE.hover : SHADE.rest, 0.9);
  };

  return (
    <button
      ref={root}
      type="button"
      onClick={toggle}
      onPointerEnter={() => {
        hovering.current = true;
        if (!closed) moveShade(SHADE.hover);
      }}
      onPointerLeave={() => {
        hovering.current = false;
        if (!closed) moveShade(SHADE.rest);
      }}
      aria-pressed={closed}
      aria-label={closed ? "Abrir a persiana da janela" : "Fechar a persiana da janela"}
      className="block cursor-pointer rounded-[48%/38%] outline-none focus-visible:ring-2 focus-visible:ring-[#3a53ed]/50 focus-visible:ring-offset-8 focus-visible:ring-offset-[#faf5f5]"
    >
      <svg viewBox="0 0 200 270" className="h-[214px] w-[158px] drop-shadow-[0_18px_30px_rgba(60,40,30,0.12)] md:h-[250px] md:w-[185px]" aria-hidden>
        <defs>
          <linearGradient id="aw-frame" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#fbf8f4" />
            <stop offset="0.55" stopColor="#ebe4dc" />
            <stop offset="1" stopColor="#d9d0c6" />
          </linearGradient>
          <linearGradient id="aw-bezel" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#cfc6bc" />
            <stop offset="1" stopColor="#f3eee8" />
          </linearGradient>
          <linearGradient id="aw-sky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#5aa8f0" />
            <stop offset="0.45" stopColor="#a9d3f7" />
            <stop offset="0.62" stopColor="#eef6fd" />
            <stop offset="1" stopColor="#ffffff" />
          </linearGradient>
          <linearGradient id="aw-shade" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#efe9e2" />
            <stop offset="0.92" stopColor="#e4ddd5" />
            <stop offset="1" stopColor="#cfc6bc" />
          </linearGradient>
          <clipPath id="aw-glass">
            <rect x="42" y="42" width="116" height="186" rx="54" />
          </clipPath>
        </defs>

        {/* Moldura */}
        <rect x="6" y="6" width="188" height="258" rx="88" fill="url(#aw-frame)" />
        <rect x="6.5" y="6.5" width="187" height="257" rx="87.5" fill="none" stroke="#fff" strokeOpacity="0.9" />
        <rect x="30" y="30" width="140" height="210" rx="66" fill="url(#aw-bezel)" />

        {/* Vidro: céu, nuvens e persiana */}
        <g clipPath="url(#aw-glass)">
          <rect x="42" y="42" width="116" height="186" fill="url(#aw-sky)" />
          <g ref={clouds} fill="#fff">
            {[0, 160].map((dx) => (
              <g key={dx} transform={`translate(${dx} 0)`}>
                <ellipse cx="60" cy="150" rx="30" ry="12" opacity="0.95" />
                <ellipse cx="82" cy="142" rx="20" ry="13" opacity="0.95" />
                <ellipse cx="130" cy="156" rx="34" ry="11" opacity="0.9" />
                <ellipse cx="150" cy="147" rx="18" ry="11" opacity="0.9" />
                <ellipse cx="100" cy="176" rx="70" ry="20" />
                <ellipse cx="190" cy="172" rx="40" ry="16" />
              </g>
            ))}
          </g>
          <g ref={shade}>
            <rect x="42" y="42" width="116" height="186" fill="url(#aw-shade)" />
            <rect x="72" y="214" width="56" height="8" rx="4" fill="#d6cdc3" />
          </g>
          {/* Reflexo no vidro */}
          <path d="M60 70 Q70 52 92 48" stroke="#fff" strokeOpacity="0.55" strokeWidth="4" fill="none" strokeLinecap="round" />
        </g>
        <rect x="42" y="42" width="116" height="186" rx="54" fill="none" stroke="#bfb5aa" strokeOpacity="0.6" />
      </svg>
    </button>
  );
}
