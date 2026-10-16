"use client";

import { profile } from "@/data/profile";
import { useNow, zonedParts } from "@/hooks/useNow";
import { Widget } from "@/components/ui/Widget";
import { cn } from "@/lib/cn";

const ticks = Array.from({ length: 12 }, (_, i) => i);

export function ClockWidget({ className }: { className?: string }) {
  const now = useNow();
  const t = now ? zonedParts(now, profile.clock.timeZone) : null;
  const sec = t ? t.seconds * 6 : 0;
  const min = t ? t.minutes * 6 + t.seconds * 0.1 : 0;
  const hour = t ? (t.hours % 12) * 30 + t.minutes * 0.5 : 0;

  return (
    // `className` substitui o tamanho/padding padrão (sem conflito de classes).
    <Widget className={cn("flex items-center justify-center", className ?? "h-[150px] w-[150px] p-3")}>
      <svg viewBox="0 0 120 120" className="h-full w-full" role="img" aria-label={`Relógio — ${profile.clock.label}`}>
        <circle cx="60" cy="60" r="58" fill="#fff" />
        {ticks.map((i) => (
          <line
            key={i}
            x1="60"
            y1={i % 3 === 0 ? 6 : 7}
            x2="60"
            y2={i % 3 === 0 ? 12 : 10}
            stroke="#000"
            strokeOpacity={i % 3 === 0 ? 0.55 : 0.35}
            strokeWidth={i % 3 === 0 ? 1.6 : 1.1}
            strokeLinecap="round"
            transform={`rotate(${i * 30} 60 60)`}
          />
        ))}
        <text x="60" y="35" textAnchor="middle" className="fill-black/40 text-[8px] font-semibold uppercase tracking-wide">
          {profile.clock.label}
        </text>
        {t && (
          <g strokeLinecap="round">
            <line x1="60" y1="62" x2="60" y2="32" stroke="#111" strokeWidth="3.2" transform={`rotate(${hour} 60 60)`} />
            <line x1="60" y1="64" x2="60" y2="16" stroke="#111" strokeWidth="2.2" transform={`rotate(${min} 60 60)`} />
            <line x1="60" y1="70" x2="60" y2="12" stroke="#FF3B30" strokeWidth="1" transform={`rotate(${sec} 60 60)`} />
            <circle cx="60" cy="60" r="2.6" fill="#111" />
            <circle cx="60" cy="60" r="1.2" fill="#FF3B30" />
          </g>
        )}
      </svg>
    </Widget>
  );
}
