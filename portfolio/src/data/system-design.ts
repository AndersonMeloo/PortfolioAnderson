/**
 * Conteúdo da página /system-design (trilha de estudo em formato de "plano de voo").
 * Trechos = módulos do "Curso Completo de System Design" (Augusto Galego, Hubla), na ordem do curso,
 * agrupados por tema. Nomes dos módulos conforme o índice do curso; descrições próprias.
 * Ordem: do trecho atual para os anteriores (como uma linha do tempo, mais recente no topo).
 */
export type TopicIcon =
  | "scale"
  | "gauge"
  | "triangle"
  | "shield"
  | "database"
  | "list"
  | "copy"
  | "split"
  | "network"
  | "globe"
  | "zap"
  | "timer"
  | "door"
  | "inbox"
  | "boxes"
  | "clock"
  | "activity"
  | "layers"
  | "lock"
  | "signpost"
  | "hash"
  | "box"
  | "workflow"
  | "calculator"
  | "rocket"
  | "messages"
  | "users";

export interface Topic {
  name: string;
  description: string;
  icon: TopicIcon;
}

export interface Leg {
  /** Código curto do trecho, exibido em mono ao lado da linha. */
  code: string;
  title: string;
  /** "current": em andamento (etiqueta "Atual"); "planned": ainda vai começar ("Próximo destino"). */
  status: "current" | "planned";
  subtitle: string;
  summary: string;
  /** Cor do trecho (miniaturas dos tópicos). */
  color: string;
  topics: Topic[];
}

export const systemDesignPage = {
  title: "System Design",
  subtitle: "Estudando como projetar sistemas que escalam, módulo a módulo, com o Curso Completo de System Design.",
  /**
   * Certificado (destino final da trilha). Enquanto `image`/`url` estiverem vazios,
   * o cartão aparece como "Em breve". Coloque a imagem em /public (ex.: "/images/certificado.png").
   */
  certificate: {
    title: "Certificado",
    course: "System Design",
    issuer: undefined as string | undefined, // [PREENCHER] instituição/plataforma
    date: undefined as string | undefined, // [PREENCHER] data de emissão, ex.: "Mar 2027"
    image: undefined as string | undefined, // [PREENCHER] "/images/certificado.png"
    url: undefined as string | undefined, // [PREENCHER] link de verificação
  },
  closing: {
    title: "Obrigado por voar comigo. Até o próximo destino.",
    text: "Esta trilha continua: novos tópicos, anotações e diagramas em breve.",
  },
};

export const legs: Leg[] = [
  {
    code: "SD·01",
    title: "Bancos de dados",
    status: "current",
    subtitle: "Onde e como a informação vive",
    summary: "O ponto de partida do curso: como os dados são guardados, consultados e mantidos consistentes.",
    color: "#3a53ed",
    topics: [
      { name: "Bancos de Dados (SQL)", description: "Tabelas, relações e transações em bancos relacionais.", icon: "database" },
      { name: "NoSQL", description: "Modelos flexíveis (documento, chave-valor) para outros tipos de escala.", icon: "layers" },
    ],
  },
  {
    code: "SD·02",
    title: "Filas e tráfego",
    status: "planned",
    subtitle: "Como as requisições chegam e são distribuídas",
    summary: "Desacoplar trabalho com filas e organizar a entrada de requisições no sistema.",
    color: "#0f9d76",
    topics: [
      { name: "Queues (Filas)", description: "Processar trabalho de forma assíncrona, fora da requisição.", icon: "inbox" },
      { name: "Load Balancers", description: "Distribuir requisições entre várias instâncias.", icon: "network" },
      { name: "API Gateway", description: "Porta de entrada única: roteamento, autenticação e limites.", icon: "door" },
    ],
  },
  {
    code: "SD·03",
    title: "Redes",
    status: "planned",
    subtitle: "O caminho da requisição pela internet",
    summary: "Como os sistemas conversam pela rede, se identificam e encontram uns aos outros.",
    color: "#e46a2b",
    topics: [
      { name: "Networking", description: "Protocolos e a comunicação entre clientes e servidores.", icon: "globe" },
      { name: "Auth", description: "Autenticação e autorização: quem é o usuário e o que ele pode fazer.", icon: "lock" },
      { name: "DNS", description: "Como um nome de domínio vira o endereço de um servidor.", icon: "signpost" },
    ],
  },
  {
    code: "SD·04",
    title: "Armazenamento e entrega",
    status: "planned",
    subtitle: "Guardar, gerar e servir dados rápido",
    summary: "Peças que tiram carga do banco e aproximam o conteúdo de quem acessa.",
    color: "#8b3df0",
    topics: [
      { name: "Sequencer", description: "Gerar identificadores únicos e ordenados em sistemas distribuídos.", icon: "hash" },
      { name: "Blob Store", description: "Armazenar arquivos grandes como imagens e vídeos.", icon: "box" },
      { name: "Cache", description: "Guardar respostas em memória para não repetir trabalho caro.", icon: "zap" },
      { name: "CDN", description: "Servir conteúdo estático a partir de servidores perto do usuário.", icon: "globe" },
    ],
  },
  {
    code: "SD·05",
    title: "Arquitetura",
    status: "planned",
    subtitle: "Como organizar o sistema como um todo",
    summary: "Padrões que se repetem em sistemas grandes e a escolha entre um bloco único ou vários serviços.",
    color: "#c9a227",
    topics: [
      { name: "Conceitos Adicionais e Padrões de Arquitetura", description: "Padrões recorrentes no desenho de sistemas.", icon: "workflow" },
      { name: "Microserviços e Monolitos", description: "Quando dividir em serviços e quando manter tudo junto.", icon: "boxes" },
    ],
  },
  {
    code: "SD·06",
    title: "Requisitos e escala",
    status: "planned",
    subtitle: "Do que o sistema precisa e quanto ele aguenta",
    summary: "Levantar requisitos, estimar capacidade e colocar o sistema no ar para crescer.",
    color: "#0e7490",
    topics: [
      { name: "Requisitos e Estimativas", description: "Requisitos, SLA, Lei de Little e estimativas back-of-the-envelope.", icon: "calculator" },
      { name: "Deploys e Escalabilidade", description: "Publicar mudanças e escalar o sistema em produção.", icon: "rocket" },
    ],
  },
];
