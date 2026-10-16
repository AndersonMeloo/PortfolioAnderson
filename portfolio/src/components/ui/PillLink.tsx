import type { ReactNode } from "react";

/** Botão pílula azul das pastas de projeto. */
export function PillLink({ href, children }: { href: string; children: ReactNode }) {
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      {...(external && { target: "_blank", rel: "noopener noreferrer" })}
      className="whitespace-nowrap rounded-full bg-[#57A4F0] px-4 py-2 text-xs font-bold text-white shadow-sm transition-colors hover:bg-[#3E8FE4] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2E7CF6]"
    >
      {children} <span aria-hidden>→</span>
    </a>
  );
}
