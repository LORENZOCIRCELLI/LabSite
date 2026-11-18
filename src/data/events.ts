export interface AcademicEvent {
  id: string;
  name: string;
  fullName: string;
  area: string;
  confirmed: boolean;
  date: string;
  place: string;
  cost: string;
  costNote: string;
  why: string;
  participation: string;
  source: string;
  sourceLabel: string;
  announcement?: string;
  notice?: string;
  featureLabel?: string;
}

// Dates and prices are editorial records, not live registration availability.
// Keep the reference year explicit when a 2027 edition has not been announced.
export const eventsReviewedAt = "18/11/2026";
export const academicEvents: AcademicEvent[] = [
  {
    id: "conic",
    name: "CONIC UNAERP",
    featureLabel: "Nosso congresso · UNAERP",
    fullName: "Congresso de Iniciação Científica e Pesquisa",
    area: "Iniciação científica",
    confirmed: false,
    date: "2027 · calendário a divulgar",
    place: "Referência 2026: Ribeirão Preto · SP",
    cost: "Taxas de 2027 a divulgar",
    costNote: "Prioridade local: pode reduzir gastos de deslocamento para quem estuda em Ribeirão Preto. Consulte as condições para ouvintes e autores.",
    why: "Dar o primeiro passo na apresentação de pesquisa, organizar resultados de iniciação científica e conversar com pesquisadores da própria universidade.",
    participation: "Em 2026, recebeu painéis e apresentações orais; a modalidade oral era destinada a graduandos em iniciação científica.",
    source: "https://lp.unaerp.br/conic/",
    sourceLabel: "Evento e normas · referência 2026",
  },
  {
    id: "siicusp",
    name: "SIICUSP",
    fullName: "Simpósio Internacional de Iniciação Científica e Tecnológica da USP",
    area: "Iniciação científica",
    confirmed: false,
    date: "2027 · calendário a divulgar",
    place: "USP · unidade conforme a área do trabalho",
    cost: "2026: inscrição gratuita",
    costNote: "Gratuidade de 2027 ainda não confirmada. A unidade de apresentação define os custos de deslocamento.",
    why: "Apresentar uma pesquisa de graduação, receber comentários sobre o trabalho e conhecer projetos de outros grupos.",
    participation: "A edição de 2026 admitiu graduandos da USP e de outras instituições, com inscrição validada pelo orientador. Aguarde as normas de 2027.",
    source: "https://www.ime.usp.br/siicusp/",
    sourceLabel: "Normas oficiais · referência 2026",
  },
  {
    id: "verao-icmc",
    name: "Verão no ICMC",
    fullName: "Programa de Verão em Matemática · USP",
    area: "Formação científica",
    confirmed: true,
    date: "4 jan. a 5 fev. de 2027",
    place: "São Carlos · SP — presencial",
    cost: "Gratuito em 2027",
    costNote: "Transporte, alimentação e eventual hospedagem ficam fora da gratuidade.",
    why: "Aprofundar a base matemática usada em modelos computacionais e conhecer grupos de pesquisa e caminhos para a pós-graduação.",
    participation: "Voltado a estudantes no fim da graduação, pós-graduandos e pesquisadores de qualquer instituição.",
    notice: "O prazo divulgado para inscrição terminou em 16/11/2026. Consulte a organização sobre atividades e eventuais novas vagas.",
    source: "https://www.icmc.usp.br/noticias/7723-icmc-abre-inscricoes-para-a-45a-edicao-do-programa-de-verao-em-matematica",
    sourceLabel: "Anúncio oficial de 2027",
  },
  {
    id: "sbpc",
    name: "79ª Reunião da SBPC",
    fullName: "Sociedade Brasileira para o Progresso da Ciência",
    area: "Ciência e pesquisa",
    confirmed: true,
    date: "25 a 31 jul. de 2027",
    place: "UFPB · João Pessoa — PB",
    cost: "2026: acesso geral gratuito",
    costNote: "Valores de 2027 a confirmar. Em 2026, minicursos e apresentação de trabalhos tinham cobrança. Inclua a viagem no orçamento.",
    why: "Conhecer pesquisas de diferentes áreas, discutir ciência e aproximar seu projeto de questões que vão além da computação.",
    participation: "Acompanhe a chamada de 2027 para saber como participar como ouvinte ou submeter um trabalho.",
    source: "https://ra.sbpcnet.org.br/78RA/",
    sourceLabel: "Referência de participação · 2026",
    announcement: "https://portal.sbpcnet.org.br/eventos/tipo/reunioes-anuais/",
  },
  {
    id: "erad-sp",
    name: "ERAD-SP",
    fullName: "Escola Regional de Alto Desempenho de São Paulo",
    area: "Computação e hardware",
    confirmed: false,
    date: "2027 · calendário a divulgar",
    place: "Estado de São Paulo · sede de 2027 a definir",
    cost: "2026: graduação desde R$ 25",
    costNote: "R$ 25 no primeiro lote para associados à SBC com anuidade vigente; R$ 63 para não associados, ou R$ 60 com associação. Não são preços de 2027.",
    why: "Entrar em contato com computação paralela e infraestrutura de alto desempenho, temas diretamente ligados às pesquisas do LIRA.",
    participation: "Acompanhe minicursos, palestras e a chamada de trabalhos para estudantes. Confira a categoria de inscrição antes de pagar.",
    source: "https://erad-sp.github.io/inscricoes",
    sourceLabel: "Tabela oficial de valores · 2026",
  },
  {
    id: "semcomp",
    name: "SEMCOMP USP",
    fullName: "Semana da Computação · ICMC",
    area: "Computação e hardware",
    confirmed: false,
    date: "2027 · calendário a divulgar",
    place: "Referência 2026: São Carlos · SP",
    cost: "2026: evento gratuito",
    costNote: "Aguarde as condições de 2027. Considere o transporte e a disponibilidade de vagas nas atividades.",
    why: "Experimentar assuntos novos em oficinas, conhecer profissionais e pesquisadores e aprender com outros estudantes de computação.",
    participation: "A programação anunciada em 2026 incluiu palestras, minicursos e hackathon. Verifique inscrições específicas de cada atividade em 2027.",
    source: "https://icmc.usp.br/noticias/7684-semcomp-2026-abre-inscricoes-para-semana-de-palestras-minicursos-hackathon-e-oportunidades-no-icmc",
    sourceLabel: "Divulgação oficial · referência 2026",
  },
  {
    id: "senc",
    name: "SEnC USP",
    fullName: "Semana da Engenharia da Computação · ICMC / EESC",
    area: "Computação e hardware",
    confirmed: false,
    date: "2027 · calendário a divulgar",
    place: "Referência 2026: São Carlos · SP",
    cost: "2026: aberta e gratuita",
    costNote: "Condições de 2027 ainda não divulgadas. Uma opção regional para acompanhar sem uma viagem longa.",
    why: "Explorar a ligação entre software e hardware, conhecer aplicações de engenharia e encontrar ideias para protótipos e projetos.",
    participation: "Em 2026, foi aberta a toda a comunidade, com palestras, workshops e visitas técnicas. Aguarde a programação de 2027.",
    source: "https://eesc.usp.br/noticias/releases_s.php?guid=60660&termid=releases",
    sourceLabel: "Divulgação oficial · referência 2026",
  },
];
