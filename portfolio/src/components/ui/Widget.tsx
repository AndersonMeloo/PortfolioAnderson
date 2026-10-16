import type { HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

/** Card branco dos widgets da hero. */
export function Widget({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        // Vidro (mesmos valores da referência): o que estiver atrás aparece desfocado e saturado.
        "rounded-2xl border border-white/45 bg-white/30 shadow-[inset_0_1px_0_rgba(255,255,255,0.6),0_8px_32px_rgba(0,0,0,0.12)] backdrop-blur-2xl backdrop-saturate-150",
        className,
      )}
      {...props}
    />
  );
}
