"use client";

import { profile } from "@/data/profile";
import { useNow, zonedParts } from "@/hooks/useNow";
import { Widget } from "@/components/ui/Widget";
import { cn } from "@/lib/cn";

const weekdayFmt = new Intl.DateTimeFormat("pt-BR", { weekday: "long", timeZone: profile.clock.timeZone });
const heads = ["D", "S", "T", "Q", "Q", "S", "S"];

function useToday() {
  const now = useNow();
  if (!now) return null;
  const t = zonedParts(now, profile.clock.timeZone);
  return { ...t, weekday: weekdayFmt.format(now) };
}

/** Calendário do mês com o dia atual destacado (desktop). */
export function CalendarWidget() {
  const today = useToday();
  const cells: (number | null)[] = [];
  if (today) {
    const first = new Date(Date.UTC(today.year, today.month, 1)).getUTCDay();
    const days = new Date(Date.UTC(today.year, today.month + 1, 0)).getUTCDate();
    for (let i = 0; i < first; i++) cells.push(null);
    for (let d = 1; d <= days; d++) cells.push(d);
  }

  return (
    <Widget className="h-[150px] w-[150px] px-3.5 pt-3.5 pb-3">
      <p className="text-[9px] font-bold uppercase tracking-[0.06em] text-[#FF3700]" suppressHydrationWarning>
        {today?.weekday ?? " "}
      </p>
      <p className="text-[22px] font-semibold leading-none tracking-[-0.025em]" suppressHydrationWarning>
        {today?.day ?? " "}
      </p>
      <div className="mt-2 grid grid-cols-7 gap-y-[1px] text-center text-[7.5px] leading-[10px]">
        {heads.map((h, i) => (
          <span key={i} className="font-semibold text-black/30">
            {h}
          </span>
        ))}
        {cells.map((d, i) => (
          <span
            key={i}
            className={cn(
              "mx-auto flex h-[10px] w-[10px] items-center justify-center rounded-full text-black/50",
              d === today?.day && "bg-black font-bold text-white",
            )}
          >
            {d ?? ""}
          </span>
        ))}
      </div>
    </Widget>
  );
}

/** Versão mobile: dia da semana + número + chamada para contato. */
export function CalendarCard({ href }: { href: string }) {
  const today = useToday();
  return (
    <a href={href} className="block h-full">
      <Widget className="flex h-full flex-col justify-center p-4">
        <p className="text-[11px] font-bold uppercase tracking-[0.06em] text-[#FF3700]" suppressHydrationWarning>
          {today?.weekday ?? " "}
        </p>
        <p className="mt-1 text-[26px] font-semibold leading-none" suppressHydrationWarning>
          {today?.day ?? " "}
        </p>
        <p className="mt-3 text-[12px] text-black/45">Toque para falar comigo</p>
      </Widget>
    </a>
  );
}
