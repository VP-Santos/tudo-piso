export const categories_data = [
  {
    id: 1,
    name: 'Laminado',
    image_path: '/assets/category/laminado.png',
    description: `O piso laminado é uma opção prática e elegante para ambientes internos. Ele reproduz o visual da madeira, oferecendo conforto, fácil limpeza e ótimo custo-benefício.

## Tipos de instalação:

**Clicado:**
Sistema de encaixe entre as réguas, sem uso de cola. Proporciona instalação rápida, limpa e permite substituição fácil de peças.

**Colado:**
As réguas são unidas por cola aplicada nos encaixes laterais. Garante boa estabilidade, porém exige instalação mais cuidadosa.

Ideal para quem busca beleza e praticidade no dia a dia.`,
    slug: 'laminado'
  },
  {
    id: 2,
    name: 'Vinílico',
    image_path: '/assets/category/vinilico.png',
    description: `O piso vinílico é um revestimento moderno, confortável e versátil, feito de PVC. Ele pode imitar madeira, pedra e outros materiais, oferecendo toque macio, baixo ruído ao caminhar e fácil manutenção.

## Tipos de instalação:

**Clicado:**
Sistema de encaixe entre as peças, sem uso de cola. Instalação rápida e prática.

**Colado:**
Aplicado com adesivo no contrapiso. Indicado para áreas de maior circulação, com excelente fixação.

Ideal para conforto e praticidade.`,
    slug: 'vinilico'
  },
  {
    id: 3,
    name: 'Acabamento',
    image_path: '/assets/category/acabamento.png',
    description: `Os acabamentos são elementos essenciais para valorizar o projeto, garantindo um resultado sofisticado e bem definido.

## Tipos de acabamentos:

**Divisor de ambiente:**
Transição entre pisos ou ambientes, protegendo emendas.

**Rodapé:**
Protege a base da parede contra impactos e sujeira.

**Cantoneiras:**
Protegem cantos e quinas, evitando desgaste.

Garante durabilidade e estética ao projeto.`,
    slug: 'acabamento'
  }
];

export const manufacturers_data = [
  {
    id: 1,
    name: 'Quick-Step',
    description: 'A Quick-Step é uma marca internacional de pisos pertencente ao grupo Unilin, reconhecida pela produção de pisos laminados e vinílicos de alta qualidade. Surgida nos anos 1990, a empresa se destacou por desenvolver soluções práticas e inovadoras, como o sistema de encaixe clicável que facilita a instalação sem necessidade de cola. Seus produtos combinam design moderno com durabilidade, resistência à água e baixa necessidade de manutenção, sendo amplamente utilizados em ambientes residenciais e comerciais. Além disso, a marca também investe em práticas sustentáveis, utilizando materiais reciclados e processos que reduzem o impacto ambiental',
    origin: 'Bélgica',
    image_path: 'assets/manufacturers/quick-step.png',
    slug: 'quick-step'
  },
  {
    id: 2,
    name: 'Eucafloor',
    description: 'A Eucafloor é uma marca brasileira do grupo Eucatex, especializada na fabricação de pisos laminados e vinílicos. É conhecida por utilizar madeira de reflorestamento e por seu foco em sustentabilidade, durabilidade e bom custo-benefício.',
    origin: 'Brasil',
    image_path: 'assets/manufacturers/eucafllor.png',
    slug: 'eucafloor'
  },
  {
    id: 3,
    name: 'Tarkett',
    description: 'A Tarkett é uma multinacional referência mundial em pisos vinílicos, laminados e esportivos, muito presente no Brasil com soluções para residências, hospitais e ambientes corporativos.',
    origin: 'França',
    image_path: 'assets/manufacturers/tarkett.png',
    slug: 'tarkett'
  },
  {
    id: 4,
    name: 'OspeFloor',
    description: 'A Ospenfloor é uma marca voltada à comercialização de pisos laminados e vinílicos, com foco em soluções acessíveis e práticas para o dia a dia. Tem presença mais forte no varejo e distribuição.',
    origin: 'Brasil',
    image_path: 'assets/manufacturers/ospefloor.png',
    slug: 'ospefloor'
  },
]

export const category_manufacturer_data = [
  {
    manufacturer_id: 1,
    category_id: 1
  },
  {
    manufacturer_id: 1,
    category_id: 3
  },
  {
    manufacturer_id: 2,
    category_id: 1
  },
  {
    manufacturer_id: 2,
    category_id: 3
  },
  {
    manufacturer_id: 3,
    category_id: 2
  },
  {
    manufacturer_id: 4,
    category_id: 2
  },
]

export const product_lines_data = [
  {
    name: 'Eligna Wide',
    width: 19,
    length: 1.38,
    category_manufacturer_id: 1,
    image_path: 'assets/line/eligna-wide.webp',
    slug: 'eligna-wide',

  },
  {
    name: 'Smart',
    width: 19,
    length: 1.2,
    category_manufacturer_id: 1,
    image_path: 'assets/line/smart.jpeg',
    slug: 'smart',

  },
  {
    name: 'Prime',
    width: 19.7,
    length: 1.35,
    category_manufacturer_id: 3,
    image_path: 'assets/line/prime.jfif',
    slug: 'prime',
  },
  {
    name: 'New Evidence',
    width: 29.2,
    length: 1.35,
    category_manufacturer_id: 3,
    image_path: 'assets/line/new-evidence.jfif',
    slug: 'new-evidence',
  },
  {
    name: 'Paviflex',
    width: 0.3,
    length: 0.3,
    category_manufacturer_id: 5,
    image_path: 'assets/line/paviflex.jfif',
    slug: 'paviflex',
  },
]

export const products_data = [
  {
    name: 'Patina Cottage',
    product_line_id: 2,
    code: 'QSSM5001',
    image_path: 'assets/product/patina-cottage.jfif',
    slug: 'patina-cottage'
  },
  {
    name: 'Carvalho Café Restaurado',
    product_line_id: 1,
    code: 'QSEW3679',
    image_path: 'assets/product/carvalho-cafe-restaurado.jfif',
    slug: 'carvalho-cafe-restaurado'
  },
]

export const installations_performed_data = [
  {
    product_id: 2,
    image_path: 'assets/installations_performed/carvalho-cafe-restaurado.jfif'
  },
]

export const images_istallations_data = [
  {
    installations_performed_id: 1,
    image_path: '/assets/images_installations/1.webp'
  },
  {
    installations_performed_id: 1,
    image_path: '/assets/images_installations/2.jfif'
  },
  {
    installations_performed_id: 1,
    image_path: '/assets/images_installations/3.jfif'
  },

]
