"use client";

import { useRef, type ReactNode } from "react";
import { Plane } from "lucide-react";
import { gsap, ScrollTrigger, useGSAP, MOTION_OK, REDUCED } from "@/lib/gsap";

// Rota do avião em coordenadas da linha do tempo (x = linha, y = topo da linha do tempo):
// decola do "Plano de voo" (34, -67), desce a trilha tracejada até a linha (0, 0) e segue
// pela linha até o fim do trecho atual (0, altura da linha azul).
const routeFrom = "M34,-67 L34,-54 C34,-28 0,-32 0,0";

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
  const plane = useRef<HTMLDivElement>(null);
  const bob = useRef<HTMLSpanElement>(null);
  const turn = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      const stops = gsap.utils.toArray<HTMLElement>("[data-stop]", root.current);
      const flown = gsap.utils.toArray<HTMLElement>("[data-leg]:not([data-planned])", root.current);
      const lastFlown = flown[flown.length - 1];

      // Altura da linha azul = até o fim do último trecho em andamento (recalcula no resize).
      const flownHeight = () => (lastFlown ? lastFlown.offsetTop + lastFlown.offsetHeight : 0);
      const sizeFill = () => {
        if (!fill.current) return;
        fill.current.style.height = `${flownHeight()}px`;
      };
      gsap.set(plane.current, { xPercent: -50, yPercent: -50 });
      // Linha de referência (45% da tela): a ponta azul, o avião e os pontos se alinham a ela.
      // A linha começa a ser "voada" quando o topo da linha do tempo chega à referência;
      // antes disso o avião faz a decolagem (no mínimo 60px de rolagem, para não ser brusca).
      const lineStart = () =>
        Math.max(60, (root.current?.getBoundingClientRect().top ?? 0) + window.scrollY - window.innerHeight * 0.45);
      sizeFill();
      ScrollTrigger.addEventListener("refreshInit", sizeFill);

      mm.add(MOTION_OK, () => {
        // Flutua de leve (parado no topo ou estacionado no trecho atual).
        gsap.to(bob.current, { y: -2.5, duration: 1.4, ease: "sine.inOut", yoyo: true, repeat: -1 });

        // Giro extra por cima da rota: parado no topo o avião aponta para CIMA (+180°);
        // ao começar a rolar ele vira suavemente para a direção da rota (0°), passando pelo
        // lado da curva, e ao voltar ao topo vira para cima de novo. `back.out` dá o "balanço".
        let pointingUp = true;
        gsap.set(turn.current, { rotation: 180 });
        const turnTo = (deg: number) =>
          gsap.to(turn.current, { rotation: deg, duration: 0.8, ease: "back.out(1.6)", overwrite: true });

        // 1) Decola: segue a trilha tracejada do "Plano de voo" até a linha, apontando para onde vai.
        gsap.to(plane.current, {
          motionPath: { path: routeFrom, autoRotate: true },
          ease: "none",
          immediateRender: true,
          scrollTrigger: {
            trigger: root.current,
            start: 0,
            end: lineStart,
            scrub: 0.4,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
              const moving = self.progress > 0.002;
              if (moving && pointingUp) {
                pointingUp = false;
                turnTo(0);
              } else if (!moving && !pointingUp) {
                pointingUp = true;
                turnTo(180);
              }
            },
          },
        });
        // 2) Desce pela linha com o mesmo início/fim da linha azul: fica sempre na ponta dela
        //    e estaciona no fim do trecho atual. A altura é recalculada no resize.
        if (lastFlown)
          gsap.fromTo(
            plane.current,
            { y: 0, rotation: 90 },
            {
              y: () => flownHeight(),
              rotation: 90,
              ease: "none",
              immediateRender: false,
              scrollTrigger: {
                trigger: root.current,
                start: lineStart,
                endTrigger: lastFlown,
                end: "bottom 45%",
                scrub: 0.4,
                invalidateOnRefresh: true,
              },
            },
          );
        if (lastFlown)
          gsap.fromTo(
            fill.current,
            { scaleY: 0 },
            {
              scaleY: 1,
              ease: "none",
              scrollTrigger: { trigger: root.current, start: lineStart, endTrigger: lastFlown, end: "bottom 45%", scrub: 0.4, invalidateOnRefresh: true },
            },
          );
        stops.forEach((stop) =>
          ScrollTrigger.create({
            trigger: stop,
            start: "top 45%",
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
        // Sem animação: avião já estacionado no trecho atual, apontando para baixo.
        gsap.set(plane.current, { x: 0, y: flownHeight(), rotation: 90 });
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
      {/* Avião: decola do "Plano de voo" e acompanha a linha azul até o trecho atual. */}
      <div ref={plane} className="pointer-events-none absolute top-0 left-[calc(var(--tl-label)+10px)] z-20 will-change-transform" aria-hidden>
        <span ref={turn} className="block">
          <span ref={bob} className="block">
            {/* O ícone aponta para a direita (rotação 0); o autoRotate gira para a direção da rota. */}
            <Plane
              className="h-3.5 w-3.5 rotate-45 text-[#3a53ed] drop-shadow-[0_0_2px_#faf5f5]"
              fill="currentColor"
              strokeWidth={1.5}
            />
          </span>
        </span>
      </div>
      {children}
    </div>
  );
}
