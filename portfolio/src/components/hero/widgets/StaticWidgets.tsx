import Image from "next/image";
import Link from "next/link";
import { Layers, Network, type LucideIcon } from "lucide-react";
import { appGrid, profile, type AppGlyph } from "@/data/profile";
import { Widget } from "@/components/ui/Widget";
import { TechIcon, techIcons } from "@/components/icons/TechIcon";
import { FolderIcon } from "@/components/ui/FolderIcon";
import { cn } from "@/lib/cn";

/**
 * Foto de perfil. A moldura é sempre quadrada (como a foto), então a imagem
 * aparece inteira em qualquer dispositivo; `className` define só a largura.
 */
export function PhotoWidget({ className, sizes = "150px" }: { className?: string; sizes?: string }) {
  return (
    <div
      className={cn(
        "relative aspect-square overflow-hidden rounded-[22px] border-2 border-white shadow-[0_10px_30px_rgba(0,0,0,0.1)]",
        className,
      )}
    >
      <Image src={profile.photo.src} alt={profile.photo.alt} fill sizes={sizes} className="object-cover object-center" draggable={false} />
    </div>
  );
}

/** Grade 5×2 de "apps". */
const glyphs: Record<AppGlyph, LucideIcon> = { layers: Layers, network: Network };

/** Grade de "apps" (especialidades), em uma fileira. */
export function AppGridWidget({ className }: { className?: string }) {
  return (
    <Widget className={cn("p-4", className)}>
      <ul data-app-grid className="grid grid-cols-6 gap-x-3 md:gap-x-2.5">
        {appGrid.map((app) => {
          const isTech = "tech" in app;
          const Glyph = isTech ? null : glyphs[app.glyph];
          const tile = (
            <span
              className="flex aspect-square w-full items-center justify-center rounded-[24%] border border-black/5 shadow-[0_2px_6px_rgba(0,0,0,0.14)]"
              style={{ background: isTech ? techIcons[app.tech].tile : app.tile }}
            >
              {isTech ? (
                <TechIcon name={app.tech} variant="tile" className="h-[56%] w-[56%]" />
              ) : (
                Glyph && <Glyph className="h-[50%] w-[50%] text-white" strokeWidth={2.2} aria-hidden />
              )}
            </span>
          );
          return (
            <li key={app.label} title={app.label} className="w-full md:w-10">
              {app.href ? (
                app.href.startsWith("/") ? (
                  <Link href={app.href} aria-label={app.label} className="block transition-transform hover:scale-105">
                    {tile}
                  </Link>
                ) : (
                  <a href={app.href} target="_blank" rel="noopener noreferrer" aria-label={app.label} className="block transition-transform hover:scale-105">
                    {tile}
                  </a>
                )
              ) : (
                <span role="img" aria-label={app.label} className="block">
                  {tile}
                </span>
              )}
            </li>
          );
        })}
      </ul>
    </Widget>
  );
}

/** Pasta do "desktop": ícone + rótulo que fica azul no hover. Sem `href`, vira "Em breve" (sem nome). */
export function DesktopFolder({ label, href, compact = false }: { label?: string; href?: string; compact?: boolean }) {
  const cls = "group flex w-20 flex-col items-center gap-1 outline-none";
  const icon = (soon: boolean) => (
    <FolderIcon
      className={cn(
        "object-contain transition-transform",
        soon ? "opacity-60" : "group-hover:scale-105",
        compact ? "h-12 w-14" : "h-14 w-14",
      )}
    />
  );

  if (!href)
    return (
      <div className={cls} role="img" aria-label="Projeto em breve">
        {icon(true)}
        <span className="rounded-full bg-black/[0.06] px-2 py-0.5 text-[10px] font-semibold tracking-wide text-black/45 uppercase">
          Em breve
        </span>
      </div>
    );

  return (
    <Link href={href} draggable={false} className={cls}>
      {icon(false)}
      <span
        className={cn(
          "rounded-[5px] px-1.5 py-0.5 text-center font-medium leading-tight text-black/80 group-hover:bg-[#0069d9] group-hover:text-white group-focus-visible:bg-[#0069d9] group-focus-visible:text-white",
          compact ? "max-w-[84px] truncate text-[11px]" : "bg-white/70 text-[12px] backdrop-blur-sm",
        )}
      >
        {label?.replace(/-/g, "‑")}
      </span>
    </Link>
  );
}
