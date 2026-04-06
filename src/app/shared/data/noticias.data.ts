export interface Noticia {
  id: number;
  imagem: string;
  titulo: string;
  descricao: string;
  /** Data curta para cards (dd/mm/aaaa) */
  data: string;
  conteudo: string;
}

const MESES = [
  'janeiro',
  'fevereiro',
  'março',
  'abril',
  'maio',
  'junho',
  'julho',
  'agosto',
  'setembro',
  'outubro',
  'novembro',
  'dezembro',
] as const;

/** Converte "dd/mm/aaaa" para "d de mês de aaaa". */
export function formatarDataNoticiaPt(dataCurta: string): string {
  const partes = dataCurta.split('/').map((p) => parseInt(p, 10));
  if (partes.length !== 3 || partes.some((n) => Number.isNaN(n))) {
    return dataCurta;
  }
  const [dia, mes, ano] = partes;
  const nomeMes = MESES[mes - 1];
  if (!nomeMes) {
    return dataCurta;
  }
  return `${dia} de ${nomeMes} de ${ano}`;
}

export const NOTICIAS: Noticia[] = [
  {
    id: 1,
    imagem: 'https://picsum.photos/400/200?random=1',
    titulo: 'Coral Lyra realiza apresentação especial',
    descricao:
      'Apresentação emocionante marca o retorno dos ensaios presenciais após a pandemia.',
    data: '07/03/2026',
    conteudo:
      'A Sociedade de Canto Lyra realizou uma apresentação especial no último domingo, marcando o retorno dos ensaios presenciais. O evento contou com a presença de mais de 200 pessoas e foi um grande sucesso. O repertório incluiu músicas clássicas e populares, emocionando o público presente.',
  },
  {
    id: 2,
    imagem: 'https://picsum.photos/400/200?random=2',
    titulo: 'Abertura de inscrições para novos coristas',
    descricao:
      'Sociedade abre vagas para novos membros interessados em fazer parte.',
    data: '06/03/2026',
    conteudo:
      'A Sociedade de Canto Lyra abriu o período de inscrições para novos coristas. Interessados podem entrar em contato pela área de associados ou pelo formulário de contato do aplicativo. As vagas são limitadas e a seleção considera experiência musical e disponibilidade para ensaios.',
  },
  {
    id: 3,
    imagem: 'https://picsum.photos/400/200?random=3',
    titulo: 'Concerto de Primavera 2026',
    descricao:
      'Tradicional concerto de primavera já tem data marcada para este ano.',
    data: '28/02/2026',
    conteudo:
      'O tradicional Concerto de Primavera da Lyra retorna em 2026 com repertório especial e participação de convidados. A data e o local serão divulgados em breve nas notícias e redes sociais da sociedade.',
  },
];

export function getNoticiaPorId(id: number): Noticia | undefined {
  return NOTICIAS.find((n) => n.id === id);
}
