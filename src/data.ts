export type Category = {
  id: string;
  title: string;
  description?: string;
  image: string;
  link?: string;
  isFeatured?: boolean;
  hasSubcategories?: boolean;
  bgColor?: string;
  buttonText?: string;
};

// Centralized image and link configuration for Home Categories
export const CATEGORIES: Category[] = [
  {
    id: 'moldes-3d',
    title: 'Moldes 3D',
    description: 'Os melhores personagens em 3D para você montar.',
    image: 'https://i.imgur.com/PfpzrlP.jpeg',
    hasSubcategories: true,
    isFeatured: true,
    buttonText: 'Baixar'
  },
  {
    id: 'colorir',
    title: 'Página para Colorir',
    image: 'https://i.imgur.com/bnypWYa.jpeg',
    link: 'https://1drv.ms/f/c/3ba4ece23a5691f5/IgDbvHhlDvauSbuBi0Hz5xavAfjKgjbfUM92h2yXUPnx27c?e=ZcIJus',
    buttonText: 'Baixar'
  },
  {
    id: 'atividades',
    title: 'Complete o Desenho',
    image: 'https://i.imgur.com/UEmlzhA.jpeg',
    link: 'https://1drv.ms/f/c/3ba4ece23a5691f5/IgD4j9RWV9nNS4P6TYnvUDdsAZ95I5k1sH53QoGEwk52W4M?e=dJwkdS',
    buttonText: 'Baixar'
  },
  {
    id: 'jogos',
    title: 'Desenho Facilitado',
    image: 'https://i.imgur.com/UXg2dzT.jpeg',
    link: 'https://1drv.ms/f/c/3ba4ece23a5691f5/IgAVtcQJCXSoRKI3P0_fxIMQAZy7FnAu6XQDLtxsngUy2jI?e=bJMjHg',
    buttonText: 'Baixar'
  },
  {
    id: 'quebra-cabecas',
    title: 'Encontre o Erro',
    image: 'https://i.imgur.com/LvNYvnX.jpeg',
    link: 'https://1drv.ms/f/c/3ba4ece23a5691f5/IgBnaRkxMREyQr-mzzjHxigQAeeSnTZciBu9XXbi6htwTvU?e=h1bnFV',
    buttonText: 'Baixar'
  },
  {
    id: 'cartoes',
    title: 'Tutoriais de Desenhos',
    image: 'https://i.imgur.com/jcIA1N6.jpeg',
    link: 'https://1drv.ms/f/c/3ba4ece23a5691f5/IgDlye9J7g0HTJ8UBMH92Xd-AUzD7YiE_0dn5Au5dV2EHzM?e=EFMe19',
    buttonText: 'Baixar'
  },
  {
    id: 'mascaras',
    title: 'Copie a Imagem',
    image: 'https://i.imgur.com/56uTjmS.jpeg',
    link: 'https://1drv.ms/f/c/3ba4ece23a5691f5/IgAUqOGUSVBzQZXyqGbGpQmyAfZZZ5e8hhwnEx_5hDAKp9A?e=f16gq1',
    buttonText: 'Baixar'
  },
  {
    id: 'decoracao',
    title: 'Labirintos',
    image: 'https://i.imgur.com/9ZdmB1y.jpeg',
    link: 'https://1drv.ms/f/c/3ba4ece23a5691f5/IgBfxba7QZNhSa9bu4anXg1_ARDE5cBCstA9KUJyVZmwK8A?e=hK2FoD',
    buttonText: 'Baixar'
  },
  {
    id: 'origami',
    title: 'Posters Gigantes para Colorir',
    image: 'https://i.imgur.com/Lk9G9w0.jpeg',
    link: 'https://1drv.ms/f/c/3ba4ece23a5691f5/IgBy_0u2nGGMQ5WiUjXRMCwGAc9nT5J7JBPwRFa_dH4irVQ?e=2djvxb',
    buttonText: 'Baixar'
  },
  {
    id: 'etiquetas',
    title: 'Máscaras',
    image: 'https://i.imgur.com/3h1inmU.jpeg',
    link: 'https://1drv.ms/f/c/3ba4ece23a5691f5/IgCEfeGTnG81SJcLlHNTiO78AffCcWjSRwjV5fKZrlHkQa8?e=WsZNDk',
    buttonText: 'Baixar'
  }
];

// Centralized image and link configuration for Moldes 3D Subcategories
export const MOLDES_3D_SUBCATEGORIES: Category[] = [
  {
    id: 'todos-os-moldes',
    title: 'Todos os Moldes',
    image: 'https://i.imgur.com/RX7nvUP.jpeg',
    link: 'https://1drv.ms/f/c/3ba4ece23a5691f5/IgCs9GmMTB-LRYaRbzLpvRTEAQuUfhAU0Lu34pB-ap3DB_c?e=085rYg',
    buttonText: 'Baixar'
  },
  {
    id: 'desenhos',
    title: 'Desenhos',
    image: 'https://i.imgur.com/U03MRWs.jpeg',
    link: 'https://1drv.ms/f/c/3ba4ece23a5691f5/IgCEFngj-97TQZK8euhMX1ISAdERIq2WWwqxFQc0Nu7Zr7I?e=FLdMoG',
    buttonText: 'Baixar'
  },
  {
    id: 'star-wars',
    title: 'Galáxia',
    image: 'https://i.imgur.com/C6BTXwv.jpeg',
    link: 'https://1drv.ms/f/c/3ba4ece23a5691f5/IgBuCvHHs6shR7uxXHs6LpSRAeY8cpSNPltEOx9S4JKbn1I?e=yqplQy',
    buttonText: 'Baixar'
  },
  {
    id: 'super-herois',
    title: 'Super Heróis e Vilões',
    image: 'https://i.imgur.com/JFwYVpb.jpeg',
    link: 'https://1drv.ms/f/c/3ba4ece23a5691f5/IgCNsFtrmgrOR4LAioAiUQlxAT-aHzAjzWqzZ_C7Uq_Mn6g?e=exiT6p',
    buttonText: 'Baixar'
  },
  {
    id: 'guardioes',
    title: 'Patrulha Espacial',
    image: 'https://i.imgur.com/0kGSWdb.jpeg',
    link: 'https://1drv.ms/f/c/3ba4ece23a5691f5/IgAD7klMfMt1Tajmq4dkBWIBAelLg_YRmrTxZATmdrIwCvk?e=0UWkrX',
    buttonText: 'Baixar'
  },
  {
    id: 'disney',
    title: 'Contos de Fadas',
    image: 'https://i.imgur.com/2Ezw2Jn.jpeg',
    link: 'https://1drv.ms/f/c/3ba4ece23a5691f5/IgCnaAOtR68zQL5VmNaS_jLMAUA5MOzVBH6KaFprOajvNnA?e=IzeXTw',
    buttonText: 'Baixar'
  },
  {
    id: 'famosos',
    title: 'Personagens Famosos',
    image: 'https://i.imgur.com/pD72sF8.jpeg',
    link: 'https://1drv.ms/f/c/3ba4ece23a5691f5/IgBPbvw92j8tTp_FZEWTAsnPASmSd9jzCKM0SkJbuh7CZzo?e=XvLM7N',
    buttonText: 'Baixar'
  },
  {
    id: 'anime',
    title: 'Anime',
    image: 'https://i.imgur.com/f50Zu7k.jpeg',
    link: 'https://1drv.ms/f/c/3ba4ece23a5691f5/IgD__M2CF0CGT69hsMdQTeUfAQWCyKFsIM-ARTHGZ3X3-Mc?e=gY7M8M',
    buttonText: 'Baixar'
  },
  {
    id: 'lego',
    title: 'Mundo de Blocos',
    image: 'https://i.imgur.com/4P399F4.jpeg',
    link: 'https://1drv.ms/f/c/3ba4ece23a5691f5/IgCvHlWCCzf-R62ghNrikNXuATE_dLU6S2HhUPzubOquRrk?e=4KIcAr',
    buttonText: 'Baixar'
  },
  {
    id: 'complexos',
    title: 'Moldes Complexos',
    image: 'https://i.imgur.com/Sgb1QuQ.jpeg',
    link: 'https://1drv.ms/f/c/3ba4ece23a5691f5/IgDEg6-XQ64USpf3QR49jBoEAfCxH-0cy1BWtKiniQ7wBXc?e=Lh8mJJ',
    buttonText: 'Baixar'
  },
  {
    id: 'dinossauros',
    title: 'Dinossauros',
    image: 'https://i.imgur.com/OxRFZIv.jpeg',
    link: 'https://1drv.ms/f/c/3ba4ece23a5691f5/IgDqS73uFiChTJKcz-nvFAoXAUaUE1wiwO3dIIqBHZBG1Wc?e=PU5W26',
    buttonText: 'Baixar'
  },
  {
    id: 'minecraft',
    title: 'Aventura Pixelada',
    image: 'https://i.imgur.com/TcPkCLk.png',
    link: 'https://1drv.ms/f/c/3ba4ece23a5691f5/IgBXnCSDgq92SKnG_r6bNpYvAWejOr18mnKUoGg-Exfp8ig?e=HMrpiI',
    buttonText: 'Baixar'
  }
];
