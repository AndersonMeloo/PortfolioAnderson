import { profile } from "@/data/profile";
import { cn } from "@/lib/cn";

/** Monograma usado no dock e no rodapé. */
export function Monogram({ className }: { className?: string }) {
  return (
    <span className={cn("font-monogram leading-none font-normal tracking-[-0.04em]", className)} aria-hidden>
      {profile.initials}
    </span>
  );
}
