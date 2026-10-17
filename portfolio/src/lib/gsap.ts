"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Draggable } from "gsap/Draggable";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, Draggable, useGSAP);

// No celular, a barra de endereço some/aparece durante a rolagem e muda a altura da tela;
// sem isto o ScrollTrigger recalcularia todas as animações no meio do scroll (gera "pulos").
ScrollTrigger.config({ ignoreMobileResize: true });

/** Query do gsap.matchMedia para animações completas. */
export const MOTION_OK = "(prefers-reduced-motion: no-preference)";
export const REDUCED = "(prefers-reduced-motion: reduce)";

export { gsap, ScrollTrigger, Draggable, useGSAP };
