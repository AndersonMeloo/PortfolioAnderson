import Image from "next/image";
import { Award, Plane } from "lucide-react";
import { profile } from "@/data/profile";
import { systemDesignPage } from "@/data/system-design";
import { Stop } from "./LegEntry";

/**
 * Destino final da trilha: o certificado, em formato de cartão de embarque.
 * Sem `image`/`url`, os campos ausentes aparecem como "Em breve".
 */
export function CertificatePass() {
  const c = systemDesignPage.certificate;
  const ready = Boolean(c.image || c.url);
  const field = (label: string, value?: string) => (
    <div className="min-w-0">
      <p className="font-mono text-[8px] font-medium tracking-[0.14em] text-black/40 uppercase">{label}</p>
      <p className={`mt-0.5 truncate text-[13px] font-medium ${value ? "text-[#313030]" : "text-black/35"}`}>{value ?? "Em breve"}</p>
    </div>
  );

  return (
    <article data-leg data-planned={!ready || undefined} className="grid grid-cols-[var(--tl-label)_20px_minmax(0,1fr)] pb-10">
      <div className="overflow-hidden pt-[38px] pr-2 text-right font-mono leading-none max-md:invisible">
        <span className="block text-[6px] font-medium tracking-[0.12em] text-black/35 uppercase">Destino</span>
        <span className="mt-1 block text-[12px] font-medium text-black/50">final</span>
      </div>
      <div className="pt-[42px]">
        <Stop big planned={!ready} />
      </div>

      <div className="pl-2 md:pl-3">
        <span className="mb-2 flex" aria-hidden>
          <span className="flex h-[26px] w-[26px] items-center justify-center rounded-full border-2 border-[#faf5f5] bg-[#c9a227]">
            <Award className="h-3 w-3" color="#fff" strokeWidth={2.4} />
          </span>
        </span>
        <h2 className="flex items-baseline gap-2.5 text-[16px] font-medium text-[#060606]">
          {c.title}
          <span className={`font-mono text-[10px] font-medium tracking-[0.12em] uppercase ${ready ? "text-[#3a53ed]" : "text-black/40"}`}>
            {ready ? "Conquistado" : "Destino final"}
          </span>
        </h2>
        <p className="mt-1.5 text-[15px] leading-[1.7] text-black/55">A última parada da trilha: o certificado de conclusão.</p>

        {/* Cartão de embarque */}
        <div className="mt-5 overflow-hidden rounded-2xl border border-black/[0.07] bg-white shadow-[0_10px_30px_rgba(60,40,30,0.08)]">
          <div className="flex items-center justify-between bg-[#1c1d22] px-5 py-3 text-white">
            <span className="font-mono text-[10px] font-medium tracking-[0.18em] uppercase">Cartão de embarque</span>
            <Plane className="h-3.5 w-3.5 -rotate-45 text-white/80" fill="currentColor" strokeWidth={1.5} />
          </div>

          <div className="grid gap-5 p-5 sm:grid-cols-[minmax(0,1fr)_auto]">
            <div className="grid grid-cols-2 gap-x-6 gap-y-4">
              {field("Passageiro", profile.name)}
              {field("Curso", c.course)}
              {field("Emissor", c.issuer)}
              {field("Emissão", c.date)}
            </div>

            {/* Canhoto: imagem do certificado ou espaço reservado */}
            <div className="relative flex h-[96px] w-full items-center justify-center overflow-hidden rounded-xl border border-dashed border-black/15 bg-[#faf5f5] sm:w-[136px]">
              {c.image ? (
                <Image src={c.image} alt={`Certificado de ${c.course}`} fill sizes="136px" className="object-cover" />
              ) : (
                <span className="flex flex-col items-center gap-1.5 text-black/35">
                  <Award className="h-5 w-5" strokeWidth={1.6} />
                  <span className="font-mono text-[9px] font-medium tracking-[0.16em] uppercase">Em breve</span>
                </span>
              )}
            </div>
          </div>

          {/* Linha picotada + rodapé */}
          <div className="relative border-t border-dashed border-black/15 px-5 py-3">
            <span className="absolute top-0 -left-2 h-4 w-4 -translate-y-1/2 rounded-full bg-[#faf5f5]" aria-hidden />
            <span className="absolute top-0 -right-2 h-4 w-4 -translate-y-1/2 rounded-full bg-[#faf5f5]" aria-hidden />
            {c.url ? (
              <a
                href={c.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[10px] font-medium tracking-[0.16em] text-[#3a53ed] uppercase hover:underline"
              >
                Verificar certificado ↗
              </a>
            ) : (
              <p className="font-mono text-[10px] font-medium tracking-[0.16em] text-black/40 uppercase">Embarque em breve</p>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
