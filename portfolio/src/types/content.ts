export type TechKey =
  | "typescript"
  | "javascript"
  | "react"
  | "nextjs"
  | "nodejs"
  | "nestjs"
  | "express"
  | "fastify"
  | "php"
  | "postgresql"
  | "mysql"
  | "mongodb"
  | "prisma"
  | "typeorm"
  | "docker"
  | "tailwind"
  | "sass"
  | "git"
  | "github"
  | "linkedin"
  | "gmail"
  | "zod"
  | "jwt"
  | "python";

export interface SocialLink {
  label: string;
  href: string;
  icon: TechKey;
}

export interface Profile {
  firstName: string;
  name: string;
  initials: string;
  role: string;
  /** Linha 1 e 2 do título da hero. `highlight` aparece sublinhado. */
  headline: { intro: string; lead: string; highlight: string };
  subtitle: string;
  tagline: string;
  availability: string;
  since: number;
  /** Fuso horário usado no relógio e na barra de menus. */
  clock: { label: string; timeZone: string };
  /** Cidade e coordenadas do widget de clima (Open-Meteo). */
  weather: { city: string; latitude: number; longitude: number };
  photo: { src: string; alt: string };
  email: string;
  /** WhatsApp: `display` é o texto exibido; `number` só dígitos com DDI (para o link wa.me). */
  whatsapp: { display: string; number: string };
  cv: string;
  socials: SocialLink[];
  about: { then: string; now: string; future: string };
}

export interface ProjectFeature {
  title: string;
  detail: string;
}

export interface Project {
  slug: string;
  name: string;
  /** Rótulo da aba da pasta (caixa alta via CSS). */
  tab: string;
  heading: string;
  summary: string;
  features: ProjectFeature[];
  tech: string[];
  image: { src: string; alt: string };
  links: { code?: string; live?: string };
  /** Aparece na pilha de pastas; os demais vão para a lista. */
  featured: boolean;
}

export type AccentColor = "blue" | "sage" | "purple" | "red" | "yellow" | "green";

export interface Skill {
  title: string;
  description: string;
  icon: "code" | "server" | "brain" | "layers" | "users";
  color: AccentColor;
}

export interface ExperienceItem {
  title: string;
  description: string;
}

export interface Experience {
  company: string;
  role: string;
  /** Opcional: sem período, mostra só a empresa. */
  period?: string;
  items: ExperienceItem[];
}

export interface PracticeCard {
  label: string;
  title: string;
  icon: TechKey;
}
