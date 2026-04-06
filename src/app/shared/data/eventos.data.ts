export interface EventoData {
  dia: string;
  mes: string;
  ano: string;
}

export interface Evento {
  id: number;
  /** URL da imagem; se vazio ou ausente, o detalhe exibe a data no hero (fundo verde). */
  imagem?: string;
  titulo: string;
  local: string;
  /** Texto resumido para cards */
  descricao: string;
  data: EventoData;
  conteudo: string;
}

const MESES_ABREV: Record<string, string> = {
  JAN: 'janeiro',
  FEV: 'fevereiro',
  MAR: 'março',
  ABR: 'abril',
  MAI: 'maio',
  JUN: 'junho',
  JUL: 'julho',
  AGO: 'agosto',
  SET: 'setembro',
  OUT: 'outubro',
  NOV: 'novembro',
  DEZ: 'dezembro',
};

/** Ex.: { dia: '14', mes: 'MAR', ano: '2026' } → "14 de março de 2026" */
export function formatarDataEventoPt(data: EventoData): string {
  const mesKey = data.mes.trim().toUpperCase();
  const nomeMes = MESES_ABREV[mesKey];
  if (!nomeMes) {
    return `${data.dia} ${data.mes}. ${data.ano}`;
  }
  return `${parseInt(data.dia, 10)} de ${nomeMes} de ${data.ano}`;
}

export const EVENTOS: Evento[] = [
  {
    id: 1,
    titulo: 'Ensaio Aberto ao Público',
    local: 'Sede da Sociedade Lyra - Rua das Flores, 123',
    descricao:
      'Venha conhecer nosso coral em um ensaio aberto e gratuito.',
    data: {
      dia: '14',
      mes: 'MAR',
      ano: '2026',
    },
    conteudo:
      'Convidamos a todos para participar do nosso ensaio aberto ao público. É uma oportunidade única de conhecer de perto o trabalho do coral, o repertório que estamos preparando e o ambiente acolhedor da Sociedade de Canto Lyra. A entrada é gratuita e não é necessário fazer inscrição prévia. Esperamos você!',
  },
  {
    id: 2,
    titulo: 'Workshop de Técnica Vocal',
    local: 'Auditório Municipal - Centro Cultural',
    descricao:
      'Workshop exclusivo com professor renomado para coristas.',
    data: {
      dia: '19',
      mes: 'MAR',
      ano: '2026',
    },
    conteudo:
      'O workshop abordará respiração, projeção vocal e interpretação em grupo. Serão vagas limitadas; recomendamos chegagem com antecedência. Materiais de apoio serão disponibilizados no local. Traga roupa confortável e muita vontade de aprender.',
  },
  {
    id: 3,
    titulo: 'Concerto Beneficente',
    local: 'Igreja Matriz São Pedro - Centro',
    descricao:
      'Apresentação especial com renda revertida para instituição de caridade.',
    data: {
      dia: '9',
      mes: 'ABR',
      ano: '2026',
    },
    conteudo:
      'Uma noite especial de música com o Coral Lyra em prol de uma instituição de caridade local. Toda a renda dos ingressos será revertida. O repertório inclui obras sacras e populares. Ingressos à venda na sede da sociedade e no local, sujeitos à lotação do espaço.',
  },
];

export function getEventoPorId(id: number): Evento | undefined {
  return EVENTOS.find((e) => e.id === id);
}
