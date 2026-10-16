import type { Metadata } from "next";
import Link from "next/link";
import { profile } from "@/data/profile";
import { legs, systemDesignPage } from "@/data/system-design";
import { AirplaneWindow } from "@/components/system-design/AirplaneWindow";
import { FlightTimeline } from "@/components/system-design/FlightTimeline";
import { LegEntry } from "@/components/system-design/LegEntry";
import { CertificatePass } from "@/components/system-design/CertificatePass";
import { FlightAside, FlightFooter, FlightPlan } from "@/components/system-design/FlightChrome";

export const metadata: Metadata = {
  title: `System Design | ${profile.name}`,
  description: `Trilha de estudo de System Design de ${profile.name}: fundamentos, dados, tráfego e cache, sistemas assíncronos e distribuídos.`,
};

export default function SystemDesignPage() {
  return (
    <>
      <FlightAside />

      <main className="mx-auto w-full max-w-[640px] px-5 pb-[34vh] [--tl-label:0px] md:px-0 md:[--tl-label:64px]">
        {/* Janela + título */}
        <section className="flex flex-col items-center pt-10 text-center md:pt-24">
          <AirplaneWindow />
          <h1 className="mt-12 text-[16px] font-medium tracking-[-0.0075em] text-[#060606]">{systemDesignPage.title}</h1>
          <p className="mt-1.5 max-w-[460px] text-[16px] leading-[1.6] text-black/50">{systemDesignPage.subtitle}</p>
        </section>

        {/* Plano de voo + linha do tempo (conteúdo alinhado à coluna da referência) */}
        <div className="mt-6 md:-ml-[calc(var(--tl-label)+20px)] md:pr-[calc(var(--tl-label)+20px)]">
          <FlightPlan />
          <FlightTimeline>
            {legs.map((leg) => (
              <LegEntry key={leg.code} leg={leg} />
            ))}
            <CertificatePass />
          </FlightTimeline>

          {/* Encerramento */}
          <div className="mt-8 grid grid-cols-[var(--tl-label)_20px_minmax(0,1fr)]">
            <span />
            <span />
            <div className="pl-2 md:pl-3">
              <p className="text-[16px] font-medium text-[#313030]">{systemDesignPage.closing.title}</p>
              <p className="mt-1 text-[14px] text-[#434445]">{systemDesignPage.closing.text}</p>
              <Link
                href="/"
                className="mt-5 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/60 px-4 py-2 font-mono text-[10px] font-medium tracking-[0.18em] text-black/60 uppercase transition-colors hover:bg-white hover:text-black"
              >
                ← Voltar ao portfólio
              </Link>
            </div>
          </div>
        </div>
      </main>

      <FlightFooter />
    </>
  );
}
