"use client";

import { profile } from "@/data/profile";
import { useNow } from "@/hooks/useNow";

const dateFmt = new Intl.DateTimeFormat("pt-BR", {
  weekday: "short",
  day: "numeric",
  month: "short",
  timeZone: profile.clock.timeZone,
});
const timeFmt = new Intl.DateTimeFormat("pt-BR", {
  hour: "2-digit",
  minute: "2-digit",
  timeZone: profile.clock.timeZone,
});

/** Barra de menus estilo macOS no topo da hero (desktop). */
export function MenuBar() {
  const now = useNow();
  return (
    <div className="absolute inset-x-0 top-0 z-10 flex h-7 items-center justify-between border-b border-black/10 bg-white/70 px-4 text-[11px] font-medium text-black/55 backdrop-blur-md">
      <div className="flex items-center gap-4">
        <span className="font-semibold text-black/70">{profile.initials}</span>
        <span>{profile.name}</span>
        <span className="text-black/35">{profile.role}</span>
      </div>
      <span className="min-w-[124px] text-right tabular-nums" suppressHydrationWarning>
        {now ? `${dateFmt.format(now)}  ${timeFmt.format(now)}` : " "}
      </span>
    </div>
  );
}
