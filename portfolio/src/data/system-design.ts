/**
 * Conteúdo da página /system-design (trilha de estudo em formato de "plano de voo").
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
  | "activity";

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
  subtitle: "Estudando como projetar sistemas que escalam, dos fundamentos aos sistemas distribuídos.",
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
    title: "Fundamentos",
    status: "current",
    subtitle: "Base para qualquer decisão de arquitetura",
    summary: "Estudando os conceitos que guiam os trade-offs de um sistema: como ele cresce, quão rápido responde e o que acontece quando algo falha.",
    color: "#3a53ed",
    topics: [
      { name: "Escalabilidade vertical e horizontal", description: "Máquinas maiores ou mais máquinas, e o custo de cada caminho.", icon: "scale" },
      { name: "Latência vs. throughput", description: "Quanto tempo uma requisição leva e quantas o sistema aguenta.", icon: "gauge" },
      { name: "Teorema CAP", description: "Consistência, disponibilidade e tolerância a partições: escolher duas.", icon: "triangle" },
      { name: "Disponibilidade", description: "Redundância, failover e o que significam os \"noves\" de um SLA.", icon: "shield" },
    ],
  },
  {
    code: "SD·02",
    title: "Dados",
    status: "planned",
    subtitle: "Onde e como a informação vive",
    summary: "Modelagem e armazenamento: escolher o banco certo e fazê-lo crescer sem perder desempenho nem confiabilidade.",
    color: "#0f9d76",
    topics: [
      { name: "SQL vs. NoSQL", description: "Esquema e transações de um lado, flexibilidade e escala do outro.", icon: "database" },
      { name: "Índices", description: "Consultas rápidas em troca de escrita mais cara e espaço extra.", icon: "list" },
      { name: "Replicação", description: "Cópias do banco para leitura em escala e recuperação de falhas.", icon: "copy" },
      { name: "Sharding", description: "Particionar os dados entre servidores quando um só não dá conta.", icon: "split" },
    ],
  },
  {
    code: "SD·03",
    title: "Tráfego e cache",
    status: "planned",
    subtitle: "O caminho da requisição até o servidor",
    summary: "Distribuir carga, aproximar o conteúdo do usuário e evitar trabalho repetido.",
    color: "#e46a2b",
    topics: [
      { name: "Load balancer", description: "Distribui as requisições entre instâncias e tira as que falham.", icon: "network" },
      { name: "CDN", description: "Conteúdo estático servido perto de quem acessa.", icon: "globe" },
      { name: "Cache (Redis)", description: "Respostas guardadas em memória para não repetir trabalho caro.", icon: "zap" },
      { name: "Rate limiting", description: "Limitar requisições por cliente para proteger o sistema.", icon: "timer" },
      { name: "API gateway", description: "Porta de entrada única: autenticação, roteamento e limites.", icon: "door" },
    ],
  },
  {
    code: "SD·04",
    title: "Assíncrono e distribuído",
    status: "planned",
    subtitle: "Quando o sistema vira vários sistemas",
    summary: "Desacoplar serviços, lidar com dados que chegam fora de ordem e enxergar o que acontece em produção.",
    color: "#8b3df0",
    topics: [
      { name: "Filas e mensageria", description: "RabbitMQ e Kafka para processar trabalho fora da requisição.", icon: "inbox" },
      { name: "Microsserviços", description: "Serviços independentes, com deploy e escala separados.", icon: "boxes" },
      { name: "Consistência eventual", description: "Aceitar que os dados convergem com o tempo, e projetar para isso.", icon: "clock" },
      { name: "Observabilidade", description: "Logs, métricas e tracing para entender o sistema em produção.", icon: "activity" },
    ],
  },
];
