import assets from "./conic2026-assets.json";

interface ConicWorkContent {
  id: keyof typeof assets;
  participant: string;
  title: string;
  topic: string;
  authors: string[];
  summary: string;
  photo: string;
  photoAlt: string;
  partnerPhoto?: { src: string; alt: string };
}

const works: ConicWorkContent[] = [
  {
    id: "lorenzo-calabrese-circelli",
    participant: "Lorenzo Calabrese Circelli",
    title: "Implementação de uma rede neural para reconhecimento de dígitos manuscritos em FPGA DE10-Lite",
    topic: "Inteligência artificial / FPGA",
    authors: ["Lorenzo Calabrese Circelli", "Prof. Me. Fernando Marcos Perez Campos", "Prof. Dr. Carlos Eduardo Formigoni"],
    summary: "Uma rede neural para reconhecer dígitos de 0 a 9, com inferência na FPGA DE10-Lite. O pôster apresenta a arquitetura, o treinamento e registros dos testes na placa.",
    photo: "/conic2026/lorenzo.webp",
    photoAlt: "Registro de Lorenzo e Fernando junto ao pôster no CONIC 2026",
  },
  {
    id: "hugo-franca",
    participant: "Hugo França e Gabriel Monteiro",
    title: "Estudo comparativo entre um cluster computacional local e a computação em nuvem da AWS para predição de casos de dengue com LSTM",
    topic: "Computação de alto desempenho / Machine learning",
    authors: ["Gabriel Felix Monteiro", "Hugo Rafael N. França", "Igor Morello Palazzo", "Lorenzo Calabrese Circelli", "Rene de Oliveira Beleboni", "Fernando Marco Perez Campos"],
    summary: "Um protocolo para comparar cluster local e AWS executando o mesmo modelo LSTM sobre dados de dengue de Ribeirão Preto. Nesta etapa, o trabalho valida o pipeline, sem apontar superioridade entre as infraestruturas.",
    photo: "/conic2026/hugo.webp",
    photoAlt: "Registro de Hugo e Fernando junto ao pôster no CONIC 2026",
    partnerPhoto: { src: "/photos/Gabriel.png", alt: "Gabriel Monteiro" },
  },
  {
    id: "nicolas-giussani-vieira",
    participant: "Nicolas Giussani Vieira",
    title: "Mapeamento de culturas agrícolas por drone, QR Codes e visão computacional",
    topic: "Visão computacional / Agricultura",
    authors: ["Nicolas Giussani Vieira", "Rene de Oliveira Beleboni", "Fernando Marco Perez Campos"],
    summary: "Um sistema que associa QR Codes ao padrão visual da vegetação para delimitar e recortar talhões. A validação inicial usa imagens de satélite com marcadores digitais; os testes com drone e QR Codes físicos estão em andamento.",
    photo: "/photos/Nicolas.png", photoAlt: "Nicolas Giussani Vieira",
  },
  {
    id: "igor-palazzo",
    participant: "Igor Palazzo",
    title: "Camadas de segurança no controle de motores brushless para robôs móveis: proteção do usuário e tolerância a falhas",
    topic: "Robótica / Controle de motores",
    authors: ["Gabriel Felix Monteiro", "Hugo Rafael N. França", "Igor Morello Palazzo", "Nicolas Giussani Vieira", "Lorenzo Calabrese Circelli", "Fernando Marco Perez Campos", "Rodrigo de Oliveira Plotze", "Carlos Eduardo Formigoni"],
    summary: "Uma arquitetura de proteção que combina supervisão do controle remoto, limites de movimento com sonares e parada física independente. Os ensaios iniciais verificaram respostas individuais; os testes integrados precedem a validação em campo.",
    photo: "/photos/Igor.png", photoAlt: "Igor Palazzo",
  },
];

export const conicWorks = works.map((work) => ({
  ...work,
  placeholder: assets[work.id].placeholder,
  pdf: `/conic2026/posters/${work.id}.pdf?v=${assets[work.id].version}`,
  preview: `/conic2026/previews/${work.id}.jpg?v=${assets[work.id].version}`,
}));
export type ConicWork = typeof conicWorks[number];
