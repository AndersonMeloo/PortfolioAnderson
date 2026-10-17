import {
  Activity,
  Boxes,
  Clock,
  Copy,
  Database,
  DoorOpen,
  Gauge,
  Globe,
  Inbox,
  ListOrdered,
  Network,
  Scale,
  ShieldCheck,
  Split,
  Timer,
  Triangle,
  Zap,
  Layers,
  Lock,
  Signpost,
  Hash,
  Box,
  Workflow,
  Calculator,
  Rocket,
  MessagesSquare,
  Users,
  type LucideIcon,
} from "lucide-react";
import type { Leg, Topic, TopicIcon } from "@/data/system-design";

const icons: Record<TopicIcon, LucideIcon> = {
  scale: Scale,
  gauge: Gauge,
  triangle: Triangle,
  shield: ShieldCheck,
  database: Database,
  list: ListOrdered,
  copy: Copy,
  split: Split,
  network: Network,
  globe: Globe,
  zap: Zap,
  timer: Timer,
  door: DoorOpen,
  inbox: Inbox,
  boxes: Boxes,
  clock: Clock,
  activity: Activity,
  layers: Layers,
  lock: Lock,
  signpost: Signpost,
  hash: Hash,
  box: Box,
  workflow: Workflow,
  calculator: Calculator,
  rocket: Rocket,
  messages: MessagesSquare,
  users: Users,
};

/**
 * Ponto na linha do tempo. Acende (azul) quando `data-active` é aplicado pelo FlightTimeline.
 * Pontos de trechos planejados são vazados/tracejados e nunca acendem (sem `data-stop`).
 */
export function Stop({ big = false, planned = false }: { big?: boolean; planned?: boolean }) {
  if (planned)
    return (
      <span
        className={
          big
            ? "relative z-10 mx-auto block h-[11px] w-[11px] rounded-full border border-dashed border-black/30 bg-[#faf5f5]"
            : "relative z-10 mx-auto block h-[5px] w-[5px] rounded-full border border-black/25 bg-[#faf5f5]"
        }
      />
    );
  return (
    <span
      data-stop
      className={
        big
          ? "group/stop relative z-10 mx-auto flex h-[11px] w-[11px] items-center justify-center rounded-full border border-black/25 bg-[#faf5f5] transition-colors duration-300 data-[active]:border-[#3a53ed]"
          : "relative z-10 mx-auto block h-[5px] w-[5px] rounded-full bg-black/25 transition-colors duration-300 data-[active]:bg-[#3a53ed]"
      }
    >
      {big && <span className="h-[5px] w-[5px] rounded-full bg-black/25 transition-colors duration-300 group-data-[active]/stop:bg-[#3a53ed]" />}
    </span>
  );
}

/** Miniaturas em leque (3 cartões) que se abrem no hover da linha. */
function TopicFan({ topic, color }: { topic: Topic; color: string }) {
  const Icon = icons[topic.icon];
  const card = "absolute top-1/2 left-1/2 h-[42px] w-[30px] rounded-[5px] border border-white shadow-[0_2px_6px_rgba(0,0,0,0.18)] transition-transform duration-300 ease-out motion-reduce:transition-none";
  return (
    <span className="relative block h-[48px] w-[58px] shrink-0" aria-hidden>
      <span className={`${card} -translate-x-[95%] -translate-y-1/2 -rotate-6 opacity-70 group-hover:-translate-x-[118%] group-hover:-rotate-12`} style={{ background: color }} />
      <span className={`${card} -translate-x-[5%] -translate-y-1/2 rotate-6 opacity-70 group-hover:translate-x-[18%] group-hover:rotate-12`} style={{ background: color }} />
      <span
        className={`${card} z-10 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center bg-[#1c1d22] group-hover:-translate-y-[58%] group-hover:scale-105`}
      >
        <Icon className="h-3.5 w-3.5" color="#fff" strokeWidth={2.2} />
      </span>
    </span>
  );
}

/** Um trecho do "plano de voo": rótulo à esquerda, ponto na linha e conteúdo à direita. */
export function LegEntry({ leg }: { leg: Leg }) {
  const [prefix, num] = leg.code.split("·");
  const planned = leg.status === "planned";
  return (
    <article
      data-leg
      data-planned={planned || undefined}
      className="grid grid-cols-[var(--tl-label)_20px_minmax(0,1fr)] pb-16 last:pb-10"
    >
      {/* Rótulo do trecho */}
      {/* Continua no grid no mobile (coluna de 0px), só invisível — se saísse do fluxo, as colunas deslocariam. */}
      <div className="overflow-hidden pt-[38px] pr-2 text-right font-mono leading-none max-md:invisible">
        <span className="block text-[6px] font-medium tracking-[0.12em] text-black/35 uppercase">{prefix}</span>
        <span className="mt-1 block text-[12px] font-medium text-black/50">{num}</span>
      </div>
      <div className="pt-[42px]">
        <Stop big planned={planned} />
      </div>

      <div className={planned ? "pl-2 opacity-60 md:pl-3" : "pl-2 md:pl-3"}>
        <span className="mb-2 flex -space-x-1.5" aria-hidden>
          {leg.topics.slice(0, 3).map((t) => {
            const Icon = icons[t.icon];
            return (
              <span key={t.name} className="flex h-[26px] w-[26px] items-center justify-center rounded-full border-2 border-[#faf5f5]" style={{ background: leg.color }}>
                <Icon className="h-3 w-3" color="#fff" strokeWidth={2.4} />
              </span>
            );
          })}
        </span>
        <h2 className="flex items-baseline gap-2.5 text-[16px] font-medium text-[#060606]">
          <span className="font-mono text-[10px] font-medium tracking-[0.1em] text-black/35 md:hidden">{leg.code}</span>
          {leg.title}
          {planned ? (
            <span className="font-mono text-[10px] font-medium tracking-[0.12em] text-black/40 uppercase">Próximo destino</span>
          ) : (
            <span className="font-mono text-[10px] font-medium tracking-[0.12em] text-[#3a53ed] uppercase">Atual</span>
          )}
        </h2>
        <p className="mt-1.5 text-[15px] font-medium text-[#313030]">{leg.subtitle}</p>
        <p className="mt-1.5 text-[15px] leading-[1.7] text-black/55">{leg.summary}</p>

        <ul className="mt-5 flex flex-col gap-1">
          {leg.topics.map((t) => (
            <li key={t.name} className="relative">
              {/* Ponto pequeno na linha, alinhado a este tópico */}
              <span className="absolute top-1/2 -left-[calc(20px+0.5rem)] w-5 -translate-y-1/2 md:-left-[calc(20px+0.75rem)]">
                <Stop planned={planned} />
              </span>
              {/* Hover (fundo + leque abrindo) só no trecho em andamento; os planejados ficam estáticos. */}
              <div
                className={
                  planned
                    ? "flex items-center gap-3 rounded-2xl px-3 py-2.5"
                    : "group flex items-center gap-3 rounded-2xl px-3 py-2.5 transition-colors duration-200 hover:bg-black/[0.035]"
                }
              >
                <TopicFan topic={t} color={leg.color} />
                <div className="min-w-0">
                  <p className="text-[14px] font-medium text-[#313030]">{t.name}</p>
                  <p className="text-[13px] font-medium text-[#666]">{t.description}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
