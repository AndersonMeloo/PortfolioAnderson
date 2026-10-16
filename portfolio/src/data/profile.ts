import type { Profile, TechKey } from "@/types/content";

/**
 * Dados pessoais. Tudo o que aparece no site sobre você sai daqui.
 * Itens marcados com [CONFIRMAR] são suposições que você deve revisar.
 */
export const profile: Profile = {
  firstName: "Anderson",
  name: "Anderson Melo",
  initials: "AM",
  role: "Desenvolvedor Full Stack",
  headline: {
    intro: "Sou Anderson.",
    lead: "Desenvolvedor",
    highlight: "Full Stack",
  },
  subtitle:
    "Transformo ideias em aplicações que resolvem problemas reais, com foco em performance, SEO e código limpo.",
  tagline: "Transformando ideias em código desde 2023.",
  availability: "Disponível para oportunidades • Aberto a novos projetos",
  since: 2023,
  // [CONFIRMAR] cidade/fuso exibidos no relógio e na barra de menus.
  clock: { label: "Brasil", timeZone: "America/Sao_Paulo" },
  // Cidade do widget de clima. Coordenadas: https://open-meteo.com/en/docs
  weather: { city: "São Paulo", latitude: -23.5505, longitude: -46.6333 },
  photo: { src: "/images/profile/anderson-2026.png", alt: "Foto de Anderson Melo" },
  email: "andersonrodriguesmelo@hotmail.com",
  whatsapp: { display: "(11) 98873-0794", number: "5511988730794" },
  cv: "/AndersonMelo-FullStack.pdf",
  socials: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/andersonrodriguesmelo/", icon: "linkedin" },
    { label: "GitHub", href: "https://github.com/AndersonMeloo", icon: "github" },
    { label: "Email", href: "mailto:andersonrodriguesmelo@hotmail.com", icon: "gmail" },
  ],
  about: {
    then: "Entrei na área de tecnologia em 2023. Comecei pelo básico (HTML, CSS e depois JavaScript) e, conforme fui aprendendo, percebi que era isso que eu queria seguir como carreira. Cada dificuldade virava aprendizado e vontade de saber mais.",
    now: "Comecei como Desenvolvedor Front-End, com aquele receio de quem tinha acabado de migrar de área. Em vez de me acomodar, segui estudando todos os dias para evoluir como profissional.\n\nHoje sou Supervisor Técnico de Desenvolvimento Front-End na mesma empresa, conciliando desenvolvimento, liderança técnica, mentoria do time e contato com clientes. Em paralelo, curso Engenharia de Software.",
    future:
      "Continuar aprendendo, agora lado a lado com a IA. Ela já escreve boa parte do código; o diferencial está em entender o porquê: System Design, Arquitetura de Software, Design Patterns e as regras de negócio por trás de cada sistema.",
  },
};

export const githubUrl = "https://github.com/AndersonMeloo";

/** Conversa no WhatsApp com uma mensagem inicial já preenchida (pensada para recrutadores). */
export const whatsappUrl = `https://wa.me/${profile.whatsapp.number}?text=${encodeURIComponent(`Olá, ${profile.firstName}! Encontrei seu portfólio e gostaria de conversar sobre uma oportunidade.`)}`;

/** Ícones desenhados (lucide) para conceitos que não têm logo de marca. */
export type AppGlyph = "layers" | "network";

export type AppGridItem = { label: string; href?: string } & (
  | { tech: TechKey }
  | { glyph: AppGlyph; /** Cor de fundo do ícone. */ tile: string }
);

/**
 * Grade de "apps" no canto da hero (uma fileira), da base para o topo:
 * linguagem → front-end → back-end → full stack → visão do sistema.
 */
export const appGrid: AppGridItem[] = [
  { tech: "typescript", label: "TypeScript" },
  { tech: "react", label: "React" },
  { tech: "nextjs", label: "Next.js" },
  { tech: "nestjs", label: "NestJS" },
  { glyph: "layers", tile: "#1c1d22", label: "Full Stack Engineer" },
  { glyph: "network", tile: "#3a53ed", label: "System Design" },
];
