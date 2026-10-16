import type { Experience, PracticeCard } from "@/types/content";

/** Cargos, do mais recente para o mais antigo. */
export const experiences: Experience[] = [
  {
    company: "Yaslip",
    role: "Supervisor Técnico de Desenvolvimento Front-End",
    period: "Fev 2025 – Atual",
    items: [
      { title: "Liderança técnica", description: "Gestão e acompanhamento da equipe de desenvolvimento, com suporte técnico, mentoria e orientação." },
      { title: "Contato com clientes", description: "Levantamento de requisitos, alinhamento de demandas e apresentação de soluções." },
      { title: "Desenvolvimento web", description: "Aplicações com Next.js, React, TypeScript, JavaScript e PHP." },
      { title: "Arquitetura em Laravel", description: "Criação da arquitetura do site base em Laravel, que sustenta os layouts desenvolvidos pelo front-end. Em paralelo, curso de Laravel 11 e 12." },
      { title: "Páginas de conversão", description: "Criação e otimização com foco em performance, SEO e experiência do usuário." },
      { title: "SEO técnico", description: "Técnicas avançadas de SEO e análise de métricas para melhoria contínua." },
      { title: "Infraestrutura web", description: "CyberPanel, Vercel (deploy de aplicações Next.js), DNS, domínios, certificados SSL e hospedagem." },
      { title: "E-mail corporativo", description: "Configuração de SMTP, autenticação e entregabilidade." },
      { title: "Monitoramento", description: "Google Analytics, Search Console, Lighthouse e PageSpeed Insights." },
    ],
  },
  {
    company: "Yaslip",
    role: "Desenvolvedor Front-End Júnior",
    // period: "Mês 20XX – Jan 2025", // [PREENCHER] período do cargo júnior
    items: [
      { title: "Adoção do Next.js", description: "Auxiliando outros desenvolvedores na adoção do Next.js na empresa." },
      { title: "Design e marketing", description: "Colaboração com as equipes de marketing e design, com entregas de valor real." },
      { title: "Acessibilidade", description: "Soluções acessíveis e inclusivas, seguindo padrões como WCAG." },
      { title: "Sites e aplicações", description: "Criação e otimização de sites e aplicações web personalizadas, no front-end e no back-end." },
      { title: "Tecnologias", description: "JavaScript, React, Next.js, PHP, HTML5, CSS3, SCSS, Tailwind CSS e Bootstrap." },
      { title: "Performance e SEO", description: "Boas práticas que melhoram Core Web Vitals, experiência do usuário e posicionamento nas buscas." },
      { title: "Integrações e análise", description: "Integração com APIs e uso de Google Analytics e Search Console para melhoria contínua." },
    ],
  },
];

/** Cards do carrossel "Na prática". */
export const practice: PracticeCard[] = [
  { label: "Performance", title: "Core Web Vitals, SEO técnico e experiência do usuário como prioridade", icon: "nextjs" },
  { label: "Acessibilidade", title: "Soluções acessíveis seguindo padrões como WCAG", icon: "react" },
  { label: "Colaboração", title: "Ajudando outros devs a adotar Next.js, junto de design e marketing", icon: "git" },
  { label: "Integrações", title: "APIs, Google Analytics e Search Console para melhoria contínua", icon: "nodejs" },
  { label: "Full Stack", title: "Do front-end ao back-end com TypeScript, NestJS e bancos SQL/NoSQL", icon: "nestjs" },
  { label: "Qualidade", title: "Código limpo, componentes reutilizáveis e entregas com valor real", icon: "typescript" },
];
