import type { IconType } from "react-icons";
import { FaLinkedinIn } from "react-icons/fa6";
import {
  SiDocker,
  SiExpress,
  SiFastify,
  SiGit,
  SiGithub,
  SiGmail,
  SiJavascript,
  SiJsonwebtokens,
  SiMongodb,
  SiMysql,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiPhp,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReact,
  SiSass,
  SiTailwindcss,
  SiTypeorm,
  SiTypescript,
  SiZod,
} from "react-icons/si";
import type { TechKey } from "@/types/content";

/** Ícone + cor da marca + fundo do "app icon". */
export const techIcons: Record<TechKey, { Icon: IconType; brand: string; onTile: string; tile: string }> = {
  typescript: { Icon: SiTypescript, brand: "#3178C6", onTile: "#3178C6", tile: "#ffffff" },
  javascript: { Icon: SiJavascript, brand: "#E8C900", onTile: "#1a1a1a", tile: "#F7DF1E" },
  react: { Icon: SiReact, brand: "#58C4DC", onTile: "#58C4DC", tile: "#20232a" },
  nextjs: { Icon: SiNextdotjs, brand: "#000000", onTile: "#000000", tile: "#ffffff" },
  nodejs: { Icon: SiNodedotjs, brand: "#5FA04E", onTile: "#5FA04E", tile: "#ffffff" },
  nestjs: { Icon: SiNestjs, brand: "#E0234E", onTile: "#E0234E", tile: "#ffffff" },
  express: { Icon: SiExpress, brand: "#000000", onTile: "#000000", tile: "#ffffff" },
  fastify: { Icon: SiFastify, brand: "#000000", onTile: "#000000", tile: "#ffffff" },
  php: { Icon: SiPhp, brand: "#777BB4", onTile: "#ffffff", tile: "#777BB4" },
  postgresql: { Icon: SiPostgresql, brand: "#4169E1", onTile: "#4169E1", tile: "#ffffff" },
  mysql: { Icon: SiMysql, brand: "#00758F", onTile: "#ffffff", tile: "#00758F" },
  mongodb: { Icon: SiMongodb, brand: "#47A248", onTile: "#47A248", tile: "#ffffff" },
  prisma: { Icon: SiPrisma, brand: "#2D3748", onTile: "#ffffff", tile: "#2D3748" },
  typeorm: { Icon: SiTypeorm, brand: "#FE0803", onTile: "#FE0803", tile: "#ffffff" },
  docker: { Icon: SiDocker, brand: "#2496ED", onTile: "#ffffff", tile: "#2496ED" },
  tailwind: { Icon: SiTailwindcss, brand: "#38BDF8", onTile: "#38BDF8", tile: "#0f172a" },
  sass: { Icon: SiSass, brand: "#CC6699", onTile: "#ffffff", tile: "#CC6699" },
  git: { Icon: SiGit, brand: "#F05032", onTile: "#ffffff", tile: "#F05032" },
  github: { Icon: SiGithub, brand: "#181717", onTile: "#ffffff", tile: "#000000" },
  linkedin: { Icon: FaLinkedinIn, brand: "#0A66C2", onTile: "#ffffff", tile: "#0A66C2" },
  gmail: { Icon: SiGmail, brand: "#EA4335", onTile: "#EA4335", tile: "#ffffff" },
  zod: { Icon: SiZod, brand: "#3E67B1", onTile: "#3E67B1", tile: "#ffffff" },
  jwt: { Icon: SiJsonwebtokens, brand: "#000000", onTile: "#000000", tile: "#ffffff" },
  python: { Icon: SiPython, brand: "#3776AB", onTile: "#3776AB", tile: "#ffffff" },
};

/**
 * `variant="brand"` usa a cor da marca (sobre fundo claro);
 * `"tile"` usa a cor para o fundo do app icon; `"mono"` herda currentColor.
 */
export function TechIcon({ name, className, variant = "brand" }: { name: TechKey; className?: string; variant?: "brand" | "tile" | "mono" }) {
  const { Icon, brand, onTile } = techIcons[name];
  const color = variant === "brand" ? brand : variant === "tile" ? onTile : undefined;
  return <Icon aria-hidden className={className} color={color} />;
}
