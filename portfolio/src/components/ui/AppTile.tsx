import type { ReactNode } from "react";
import type { AccentColor } from "@/types/content";
import { cn } from "@/lib/cn";

export const accentGradients: Record<AccentColor, string> = {
  blue: "bg-gradient-to-b from-[#5FB0FF] to-[#2E7CF6]",
  sage: "bg-gradient-to-b from-[#A9C7B8] to-[#7FA796]",
  purple: "bg-gradient-to-b from-[#C17BFF] to-[#8B3DF0]",
  red: "bg-gradient-to-b from-[#FF6B81] to-[#F0304E]",
  yellow: "bg-gradient-to-b from-[#FFCF4A] to-[#F5A623]",
  green: "bg-gradient-to-b from-[#5EE07A] to-[#28B446]",
};

/** Ícone de app com cantos "squircle" e brilho superior. */
export function AppTile({
  color,
  children,
  className,
}: {
  color: AccentColor;
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "relative flex items-center justify-center rounded-[24%] text-white shadow-[0_6px_14px_rgba(0,0,0,0.18),inset_0_1px_0_rgba(255,255,255,0.35)]",
        accentGradients[color],
        className,
      )}
    >
      {children}
    </span>
  );
}
