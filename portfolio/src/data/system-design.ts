/**
 * Conteúdo da página /system-design (trilha de estudo em formato de "plano de voo").
 * Trechos = módulos do "Curso Completo de System Design" (Augusto Galego, Hubla), na ordem do curso;
 * tópicos = aulas de cada módulo. Resumos, subtítulos e descrições das aulas são textos próprios.
 * Ordem: a mesma do curso. Ao avançar, atualize `currentLesson` e o `status` dos módulos.
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
  /** O que é e para que serve. */
  description: string;
  icon: TopicIcon;
}

export interface Leg {
  /** Código curto do trecho, exibido em mono ao lado da linha. */
  code: string;
  title: string;
  /** "done": concluído; "current": em andamento ("Atual"); "planned": ainda vai começar ("Próximo destino"). */
  status: "done" | "current" | "planned";
  subtitle: string;
  summary: string;
  /** Cor do trecho (miniaturas dos tópicos). */
  color: string;
  topics: Topic[];
}

/** Aula em que parei: o avião estaciona aqui. Precisa ser o nome de uma aula do módulo "current". */
export const currentLesson = "Introdução a Bancos de Dados";

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

const palette = ["#3a53ed", "#0f9d76", "#e46a2b", "#8b3df0", "#c9a227", "#0e7490"];

/** Monta um trecho: `lessons` são as aulas do módulo ([título, descrição]), na ordem do curso. */
const leg = (
  index: number,
  title: string,
  icon: TopicIcon,
  subtitle: string,
  summary: string,
  lessons: [string, string][],
  status: Leg["status"] = "planned",
): Leg => ({
  code: `SD·${String(index).padStart(2, "0")}`,
  title,
  status,
  subtitle,
  summary,
  color: palette[(index - 1) % palette.length],
  topics: lessons.map(([name, description]) => ({ name, description, icon })),
});

export const legs: Leg[] = [
  leg(1, "Intro", "network", "O ponto de partida", "O que é System Design e a base de como os sistemas se comunicam.", [
    ["O que é System Design?", "Planejar como as partes de um sistema se conectam para ele funcionar e crescer."],
    ["Client Server", "O modelo base da web: o cliente faz pedidos e o servidor processa e responde."],
  ], "done"),
  leg(2, "Bancos de Dados (SQL)", "database", "Onde e como a informação vive", "Como os dados são guardados, consultados e mantidos consistentes.", [
    ["Introdução a Bancos de Dados", "O que é um banco de dados e por que quase todo sistema depende de um."],
    ["ACID", "Garantias de uma transação: ou tudo acontece, ou nada, sem deixar dados inconsistentes."],
    ["BASE", "Abre mão da consistência imediata para ganhar disponibilidade e escala."],
    ["DBs", "Os tipos de banco e quando cada um faz sentido."],
    ["Sharding", "Divide os dados entre vários servidores quando um só não dá conta."],
    ["Partições lógicas", "Separa os dados em grupos para consultar e administrar partes menores."],
    ["Teorema CAP", "Com a rede falhando, o sistema precisa escolher entre consistência e disponibilidade."],
    ["Otimizações de Bancos de Dados", "Técnicas para responder mais rápido, como índices e consultas melhores."],
    ["Reads, Writes e Gargalos", "Entender como leituras e escritas pesam no banco e onde ele trava."],
    ["Locks Otimistas e Pessimistas", "Duas formas de evitar que edições simultâneas sobrescrevam dados."],
    ["Federation", "Separa os bancos por função, como usuários e pedidos, para dividir a carga."],
    ["Locks", "Travas que controlam o acesso simultâneo ao mesmo dado."],
  ], "current"),
  leg(3, "NoSQL", "layers", "Modelos além do relacional", "Quando sair das tabelas para ganhar flexibilidade e escala.", [
    ["NoSQL Intro", "Bancos sem tabelas fixas, como documentos e chave-valor, para dados flexíveis e grande escala."],
  ]),
  leg(4, "Queues (Filas)", "inbox", "Trabalho fora da requisição", "Desacoplar serviços e processar tarefas de forma assíncrona.", [
    ["Message Queue", "Guarda mensagens para serem processadas depois, sem travar quem as enviou."],
    ["Filas e DBs", "Por que uma fila é diferente de usar o banco de dados para enfileirar tarefas."],
    ["Tipos de Entregas de Mensagens", "No máximo uma vez, pelo menos uma vez ou exatamente uma vez."],
    ["Particionamento de Filas", "Divide a fila em partes para processar mais mensagens em paralelo."],
    ["Consumidores", "Os serviços que leem as mensagens e executam o trabalho."],
    ["Escalando Filas", "Como dar conta de mais mensagens adicionando capacidade."],
    ["Limites de Escala de Filas", "Até onde uma fila cresce antes de virar gargalo."],
    ["Dead Letter Queue", "Fila separada para mensagens que falharam, para analisar sem perdê-las."],
  ]),
  leg(5, "Load Balancers", "network", "Dividir a carga", "Distribuir as requisições entre várias instâncias.", [
    ["Load Balancer", "Distribui as requisições entre servidores para nenhum ficar sobrecarregado."],
    ["Load Balancer – Aula avançada", "Algoritmos de distribuição, checagem de saúde e tolerância a falhas."],
  ]),
  leg(6, "API Gateway", "door", "A porta de entrada", "Um ponto único para receber e controlar as requisições.", [
    ["API Gateway", "Porta de entrada única que roteia as requisições para os serviços certos."],
    ["Rate Limit", "Limita as requisições por cliente para proteger o sistema de abusos."],
  ]),
  leg(7, "Networking", "globe", "Como os sistemas conversam", "Protocolos, comunicação entre serviços e segurança de rede.", [
    ["Introdução de Network", "Como os dados viajam entre máquinas pela rede."],
    ["Servers", "O que é um servidor e como ele atende às requisições."],
    ["Protocolos e APIs", "As regras de comunicação e as interfaces entre sistemas."],
    ["HTTP", "O protocolo da web: requisições, respostas, métodos e status."],
    ["REST e RESTful", "Um estilo de criar APIs usando recursos e os métodos do HTTP."],
    ["TCP, UDP e RPC", "Entrega confiável, entrega rápida e chamadas remotas entre serviços."],
    ["Protocolos Real Time", "WebSockets e afins, para dados que chegam na hora, como em um chat."],
    ["Gerenciar Estado na Web", "Como lembrar do usuário em um protocolo sem memória: cookies, sessões e tokens."],
    ["Redes e Infra Sec", "Proteger a rede e a infraestrutura contra acessos indevidos."],
    ["WAF", "Firewall que filtra ataques no tráfego das aplicações web."],
  ]),
  leg(8, "Auth", "lock", "Quem é e o que pode fazer", "Identificar usuários, controlar acessos e proteger dados.", [
    ["Autenticação e Autorização", "Confirmar quem é o usuário e definir o que ele pode fazer."],
    ["Proteção de Dados", "Criptografia e cuidados para manter dados sensíveis seguros."],
    ["Keycloak, Cognito e Auth0", "Serviços prontos de login, em vez de construir autenticação do zero."],
  ]),
  leg(9, "DNS", "signpost", "Do nome ao servidor", "Como um domínio chega até o endereço certo.", [
    ["DNS", "A agenda da internet: traduz um domínio para o endereço do servidor."],
    ["Endereço de IP", "O número que identifica cada máquina na rede."],
    ["DNS Routing", "Direciona o usuário ao servidor mais adequado, por região ou por carga."],
  ]),
  leg(10, "Sequencer", "hash", "Identificadores únicos", "Gerar IDs únicos e ordenados em sistemas distribuídos.", [
    ["Sequencer", "Gera IDs únicos e ordenados mesmo com vários servidores ao mesmo tempo."],
  ]),
  leg(11, "Blob Store", "box", "Arquivos grandes", "Armazenar imagens, vídeos e outros arquivos.", [
    ["Blob Store – Parte 1", "Armazenamento para arquivos grandes, como imagens e vídeos, fora do banco."],
    ["Blob Store – Parte 2", "Como esses arquivos são organizados e acessados em grande escala."],
    ["Blob Store – Parte 3", "Manter os arquivos disponíveis e seguros contra perdas."],
  ]),
  leg(12, "Cache", "zap", "Respostas mais rápidas", "Guardar resultados em memória para não repetir trabalho caro.", [
    ["Cache", "Guarda resultados em memória para responder rápido e poupar o banco."],
    ["Estimativas com Cache", "Calcular quanta memória o cache precisa e quanto ele alivia o sistema."],
    ["Tópicos adicionais sobre Cache", "Invalidação, expiração e os problemas mais comuns de cache."],
  ]),
  leg(13, "CDN", "globe", "Conteúdo perto do usuário", "Entregar conteúdo a partir de servidores próximos de quem acessa.", [
    ["CDN", "Rede de servidores que entrega arquivos a partir do ponto mais perto do usuário."],
    ["Mais sobre CDN", "Como manter o conteúdo atualizado e quando uma CDN compensa."],
  ]),
  leg(14, "Conceitos Adicionais e Padrões de Arquitetura", "workflow", "O repertório de arquitetura", "Padrões que se repetem no desenho de sistemas grandes.", [
    ["Design de alto nível", "Desenhar as grandes peças do sistema antes de entrar nos detalhes."],
    ["Design anti-patterns", "Erros comuns de arquitetura e como evitá-los."],
    ["Arquitetura Multi-Tier", "Separa o sistema em camadas, como interface, aplicação e dados."],
    ["BFF", "Um back-end sob medida para cada front-end, como web e mobile."],
    ["Service Mesh", "Camada que cuida da comunicação entre microsserviços."],
    ["Concorrência e Paralelismo", "Lidar com várias tarefas ao mesmo tempo, e executá-las de fato juntas."],
    ["Event Driven", "Serviços que reagem a eventos, em vez de chamar uns aos outros diretamente."],
    ["Event Sourcing", "Guarda cada mudança como um evento, em vez de só o estado final."],
    ["CQRS", "Separa os modelos de leitura e de escrita para otimizar cada um."],
    ["SAGA", "Coordena uma transação que passa por vários serviços, com passos de compensação."],
    ["Elasticsearch", "Motor de busca para pesquisar textos rapidamente em grandes volumes."],
  ]),
  leg(15, "Microserviços e Monolitos", "boxes", "Um bloco ou vários serviços", "Quando dividir o sistema e quando manter tudo junto.", [
    ["Microserviços e Monolitos – Parte 1", "Sistema único ou vários serviços independentes: as diferenças."],
    ["Microserviços e Monolitos – Parte 2", "As vantagens e os custos de cada abordagem."],
    ["Microserviços e Monolitos – Parte 3", "Como decidir qual caminho faz sentido para cada projeto."],
  ]),
  leg(16, "Requisitos e Estimativas", "calculator", "Do que o sistema precisa", "Definir requisitos e estimar a capacidade necessária.", [
    ["Requirements", "Definir o que o sistema precisa fazer e com que qualidade."],
    ["SLA", "O nível de serviço prometido, como o tempo de disponibilidade."],
    ["Little's Law", "Relaciona requisições simultâneas, vazão e tempo de resposta."],
    ["Estimativas back-of-the-envelope", "Contas rápidas para prever tráfego, armazenamento e custo."],
  ]),
  leg(17, "Deploys e Escalabilidade", "rocket", "Colocar no ar e crescer", "Publicar mudanças e escalar o sistema em produção.", [
    ["Deploys", "Como publicar novas versões com segurança e sem derrubar o sistema."],
    ["Deploys – Parte 2", "Estratégias como blue-green e canary para reduzir riscos."],
  ]),
];
