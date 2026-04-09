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
    id: 3,
    titulo: 'Baile da Melhor Idade',
    local: 'Sociedade de Canto Lyra - Salão Social',
    descricao:
      'Um momento especial pra dançar, se divertir e aproveitar boa música com quem faz a vida mais leve.',
    data: {
      dia: '12',
      mes: 'ABR',
      ano: '2026',
    },
    conteudo:
      `✨ Vem aí o Baile da Melhor Idade! ✨
Um momento especial pra dançar, se divertir e aproveitar boa música com quem faz a vida mais leve 💙
🎶 Animação com @triomielke 
📅 Dia 12 de abril
⏰ A partir das 13h30
💰 Ingresso: R$ 15,00 (não sócios)
🍽️ Reservas de almoço com a Marli 📲 (51) 99533-1319
📍 Sociedade de Canto Lyra – Estância Velha
Chama os amigos, prepara o sorriso e vem aproveitar essa tarde cheia de alegria! 💃🕺`    
  },
  {
    id: 2,
    titulo: '20º Baile de Kerb – De volta às origens!',
    local: 'Sociedade de Canto Lyra - Salão Social',
    imagem: 'https://instagram.fcxj5-1.fna.fbcdn.net/v/t51.82787-15/656697420_18003669596907535_6782074105361048767_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=106&ig_cache_key=Mzg2MTQyNzk4NTQ2NzcwMDI0Mw%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTgwMi5zZHIuQzMifQ%3D%3D&_nc_ohc=RPlipWegqlMQ7kNvwGGaDNN&_nc_oc=AdpfAl-HJoPykNv32yNayFDB0ksN2-48H2DF1uqJCvc_cVoArGeE2YdpExlZ0NfRGYI&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fcxj5-1.fna&_nc_gid=ZJwsqES36kNAioglF3TZRw&_nc_ss=7a32e&oh=00_Af1ZuaPjziIK5BihAFUyEodTJHn6cizrKrTlDG5FnH2E8w&oe=69DE1084',
    descricao:
      'Prepare-se para uma noite incrível com muita tradição, alegria e música boa!',
    data: {
      dia: '25',
      mes: 'ABR',
      ano: '2026',
    },
    conteudo:
      `🎉🍻 Vem aí o 20º Baile de Kerb – De volta às origens! 🍻🎉

Prepare-se para uma noite incrível com muita tradição, alegria e música boa! 🇩🇪✨

🎶 Animação da @superbandasantacruz 
💃 Deutsche Musik pra ninguém ficar parado!

📅 25 de abril
📍 Sociedade de Canto Lyra – Estância Velha

⏰ Programação:
• Recepção e Culto: 19h30
• Início do Baile: 22h30

🎟️ Ingressos:
• Antecipado: R$ 20,00
• No dia: R$ 25,00
• Sócios entrada franca

🍺 Barril de chopp disponível no evento!

👉 Garanta já o seu ingresso e venha celebrar essa tradição com a gente!

Marque os amigos e bora pro Kerb! 🇩🇪🔥`
  },
  {
    id: 1,
    titulo: 'Baile do Rei e Rainha',
    local: 'Sociedade de Canto Lyra - Salão Social',
    descricao:
      `É oficial 💚
19 de setembro tem baile do Rei e Rainha 👑`,
    data: {
      dia: '19',
      mes: 'SET',
      ano: '2026',
    },
    conteudo:
      `É oficial 💚
19 de setembro tem baile do Rei e Rainha 👑
se prepara que vai ser especial!

Em breve mais informações...`
  },
];

export function getEventoPorId(id: number): Evento | undefined {
  return EVENTOS.find((e) => e.id === id);
}
