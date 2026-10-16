import type { Project } from "@/types/content";

/**
 * Projetos. `featured: true` vira uma "pasta" na pilha principal (ordem do array).
 * Os demais aparecem só como pasta na hero, abrindo o link do projeto. Imagens em /public/images/projects.
 */
export const projects: Project[] = [
  {
    slug: "post-automation",
    name: "Post Automation",
    tab: "Automação",
    heading: "Publicação de vídeos curtos no automático, do upload ao agendamento.",
    summary:
      "Automatiza um fluxo real de publicação de vídeos curtos: envio e organização dos arquivos, agendamento no horário ideal e acompanhamento de cada post, como numa operação profissional de conteúdo.",
    features: [
      { title: "Agendamento no horário ideal", detail: "Upload, organização por nicho e publicação agendada." },
      { title: "Métricas dinâmicas", detail: "Visualizações, curtidas e comentários de cada publicação." },
      { title: "Áreas protegidas", detail: "Autenticação e conexão ativa com Google/YouTube." },
    ],
    tech: ["NestJS", "Prisma", "PostgreSQL", "Google APIs", "Cron", "JWT", "Docker", "Next.js", "TypeScript", "Tailwind CSS"],
    image: { src: "/images/projects/post-automation-2026b.png", alt: "Telas do Post Automation" },
    links: {
      code: "https://github.com/AndersonMeloo/PostAutomation",
      live: "https://post-automation-psi.vercel.app/",
    },
    featured: true,
  },
  {
    slug: "webaudit",
    name: "WebAudit",
    tab: "Auditoria web",
    heading: "Auditoria técnica de páginas: SEO, HTML e CSS a partir de uma URL.",
    summary:
      "Coleta o conteúdo de qualquer endereço e valida SEO, HTML e CSS, simulando uma análise profissional de qualidade e conformidade, com uma visão clara da saúde técnica da página.",
    features: [
      { title: "Score de SEO", detail: "Problemas, nível de severidade e sugestões de correção." },
      { title: "Validadores da W3C", detail: "Validação real de HTML e CSS integrada ao backend." },
      { title: "Cache e paralelismo", detail: "Cache em memória e processamento paralelo das análises." },
    ],
    tech: ["Next.js", "React", "TypeScript", "NestJS", "Axios", "W3C APIs", "Cheerio"],
    image: { src: "/images/projects/WebAudit.png", alt: "Telas do WebAudit em notebook e celulares" },
    links: { code: "https://github.com/AndersonMeloo/WebAudit" },
    featured: true,
  },
  {
    slug: "clima-tempo",
    name: "Clima Tempo",
    tab: "Clima",
    heading: "Condições climáticas em tempo real, buscando por cidade.",
    summary:
      "Consulta o clima de forma simples e intuitiva, com respostas rápidas e uma experiência fluida, simulando o funcionamento de plataformas reais de previsão do tempo.",
    features: [
      { title: "Busca por cidade", detail: "Encontre qualquer cidade e veja o clima na hora." },
      { title: "Dados ao vivo", detail: "Temperatura atual, velocidade e direção do vento." },
      { title: "Horário local", detail: "Hora da cidade consultada, apresentada com clareza." },
    ],
    tech: ["Next.js", "TypeScript", "Node.js", "Tailwind", "Docker", "Python", "JWT"],
    image: { src: "/images/projects/ClimaTempo.png", alt: "Telas do Clima Tempo" },
    links: { code: "https://github.com/AndersonMeloo/OpenMeteo" },
    featured: true,
  },
  {
    slug: "supers-esportivos",
    name: "Supers Esportivos",
    tab: "Catálogo",
    heading: "Catálogo de superesportivos com cadastro e gestão de anúncios.",
    summary:
      "Um catálogo de carros superesportivos onde é possível cadastrar veículos com imagem e informações detalhadas, reproduzindo um cenário próximo ao de plataformas automotivas reais.",
    features: [
      { title: "Cadastro com imagem", detail: "Veículos com foto e informações detalhadas." },
      { title: "Controle dos dados", detail: "Adicionar, visualizar e remover registros." },
      { title: "Foco em clareza", detail: "Organização das informações e facilidade de uso." },
    ],
    tech: ["React", "TypeScript", "Node.js", "Prisma", "MongoDB", "Sass"],
    image: { src: "/images/projects/SupersEsportivos.png", alt: "Telas do Supers Esportivos" },
    links: {
      code: "https://github.com/AndersonMeloo/SupersEsportivos",
      live: "https://supers-esportivos.vercel.app/",
    },
    featured: true,
  },
  {
    slug: "e-commerce",
    name: "E-commerce",
    tab: "Loja",
    heading: "Fluxo de compra completo, do catálogo ao carrinho.",
    summary:
      "Simula um fluxo real de compra: navegação pelos produtos, carrinho com total dinâmico e áreas protegidas com histórico de compras e dados pessoais.",
    features: [
      { title: "Carrinho dinâmico", detail: "Adicionar e remover itens com total em tempo real." },
      { title: "Autenticação", detail: "Histórico de compras e dados apenas para usuários logados." },
      { title: "Catálogo", detail: "Navegação pelos produtos da loja." },
    ],
    tech: ["React", "TypeScript", "Node.js", "Prisma", "MongoDB", "JWT", "Sass"],
    image: { src: "/images/projects/E-commerce.png", alt: "Telas do E-commerce" },
    links: { code: "https://github.com/AndersonMeloo/Ecommerce" },
    featured: false,
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
