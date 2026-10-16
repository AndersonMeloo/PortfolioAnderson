import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export function SectionTitle({ children, className }: { children: ReactNode; className?: string }) {
  return <h2 className={cn("text-[30px] leading-9 font-extrabold tracking-[-0.025em]", className)}>{children}</h2>;
}
