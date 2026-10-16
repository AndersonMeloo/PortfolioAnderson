import type { AccentColor } from "@/types/content";

export type DockIcon = "home" | "folder" | "sparkles" | "heart" | "calendar" | "contact";

export interface DockItem {
  label: string;
  href: string;
  icon: DockIcon;
  color?: AccentColor;
}

/**
 * Itens do dock, na mesma ordem das seções na página (esquerda → direita = cima → baixo).
 * O primeiro é separado por um divisor.
 */
export const dockItems: DockItem[] = [
  { label: "Início", href: "#inicio", icon: "home" },
  { label: "Habilidades", href: "#habilidades", icon: "sparkles", color: "purple" },
  { label: "Projetos", href: "#projetos", icon: "folder", color: "blue" },
  { label: "Experiência", href: "#experiencia", icon: "calendar" },
  { label: "Sobre", href: "#sobre", icon: "heart", color: "red" },
  { label: "Contato", href: "#contato", icon: "contact", color: "green" },
];

export interface DesktopFolderItem {
  /** Nome exibido. Sem `href`, a pasta aparece só como "Em breve" (sem nome) e não é clicável. */
  label?: string;
  href?: string;
}

/** Pastas do "desktop" da hero (coluna da direita). */
export const desktopFolders: DesktopFolderItem[] = [
  { label: "System Design", href: "/system-design" },
  {}, // em breve
  {}, // em breve
  {}, // em breve
  {}, // em breve
];
