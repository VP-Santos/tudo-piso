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
    image_path: '/assets/manufacturers/quick-step.png',
    slug: 'quick-step'
  },
  {
    id: 2,
    name: 'Eucafloor',
    description: 'A Eucafloor é uma marca brasileira do grupo Eucatex, especializada na fabricação de pisos laminados e vinílicos. É conhecida por utilizar madeira de reflorestamento e por seu foco em sustentabilidade, durabilidade e bom custo-benefício.',
    origin: 'Brasil',
    image_path: '/assets/manufacturers/eucafllor.png',
    slug: 'eucafloor'
  },
  {
    id: 3,
    name: 'Tarkett',
    description: 'A Tarkett é uma multinacional referência mundial em pisos vinílicos, laminados e esportivos, muito presente no Brasil com soluções para residências, hospitais e ambientes corporativos.',
    origin: 'França',
    image_path: '/assets/manufacturers/tarkett.png',
    slug: 'tarkett'
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
]

export const product_lines_data = [
  {
    name: 'Eligna Wide',
    width: 19,
    length: 1.38,
    category_manufacturer_id: 1,
    image_path: '/assets/product_lines/eligna-wide.webp',
    slug: 'eligna-wide',

  },
  {
    name: 'Smart',
    width: 19,
    length: 1.2,
    category_manufacturer_id: 1,
    image_path: '/assets/product_lines/smart.jpeg',
    slug: 'smart',

  },
  {
    name: 'Prime',
    width: 19.7,
    length: 1.35,
    category_manufacturer_id: 3,
    image_path: '/assets/product_lines/prime.jfif',
    slug: 'prime',
  },
  {
    name: 'New Evidence',
    width: 29.2,
    length: 1.35,
    category_manufacturer_id: 3,
    image_path: '/assets/product_lines/new-evidence.jfif',
    slug: 'new-evidence',
  },
  {
    name: 'Paviflex',
    width: 0.3,
    length: 0.3,
    category_manufacturer_id: 5,
    image_path: '/assets/product_lines/paviflex.jfif',
    slug: 'paviflex',
  },
  {
    name: 'Perfil Mesmo Nivel',
    width: 0.3,
    length: 0.3,
    category_manufacturer_id: 2,
    image_path: '/assets/product_lines/perfil-mesmo-nivel-quick-step.jpg',
    slug: 'perfil-mesmo-nivel-quick-step',
  },
  {
    name: 'Perfil DN',
    width: 0.3,
    length: 0.3,
    category_manufacturer_id: 2,
    image_path: '/assets/product_lines/perfil-dn-quick-step.jfif',
    slug: 'perfil-dn-quick-step',
  },
  {
    name: 'Perfil Canto de Parede',
    width: 0.3,
    length: 0.3,
    category_manufacturer_id: 2,
    image_path: '/assets/product_lines/perfil-pp-quick-step.jpg',
    slug: 'perfil-parede-quick-step',
  }, 
  {
    name: 'Rodapé',
    width: 0.3,
    length: 0.3,
    category_manufacturer_id: 2,
    image_path: '/assets/product_lines/rodape-quick-step.jfif',
    slug: 'rodape-quick-step',
  },
  {
    name: 'Cantoneira',
    width: 0.3,
    length: 0.3,
    category_manufacturer_id: 2,
    image_path: '/assets/product_lines/cantoneira-quick-step.jpeg',
    slug: 'cantoneira-quick-step',
  },
  {
    name: 'Perfil Mesmo Nivel',
    width: 0.3,
    length: 0.3,
    category_manufacturer_id: 4,
    image_path: '/assets/product_lines/perfil-mesmo-nivel-eucafloor.jfif',
    slug: 'perfil-mesmo-nivel-eucafloor',
  },
  {
    name: 'Perfil DN',
    width: 0.3,
    length: 0.3,
    category_manufacturer_id: 4,
    image_path: '/assets/product_lines/perfil-dn-eucafloor.jpg',
    slug: 'perfil-dn-eucafloor',
  },
  {
    name: 'Perfil Canto de parede',
    width: 0.3,
    length: 0.3,
    category_manufacturer_id: 4,
    image_path: '/assets/product_lines/perfil-pp-eucafloor.webp',
    slug: 'perfil-parede-eucafloor',
  },
  {
    name: 'Rodapé',
    width: 0.3,
    length: 0.3,
    category_manufacturer_id: 4,
    image_path: '/assets/product_lines/rodape-eucafloor.jfif',
    slug: 'rodape-eucafloor',
  },
  {
    name: 'Cantoneira',
    width: 0.3,
    length: 0.3,
    category_manufacturer_id: 4,
    image_path: '/assets/product_lines/cantoneira-eucafloor.webp',
    slug: 'cantoneira-eucafloor',
  },
]

export const products_data = [
  {
    name: 'Patina Cottage',
    product_line_id: 2,
    code: 'QSSM5001',
    image_path: '/assets/products/laminado/patina-cottage.jfif',
    slug: 'patina-cottage'
  },
  {
    name: 'Carvalho Café Restaurado',
    product_line_id: 1,
    code: 'QSEW3679',
    image_path: '/assets/products/laminado/carvalho-cafe-restaurado.jfif',
    slug: 'carvalho-cafe-restaurado'
  },  
  {
    name: 'Carvalho Canela',
    product_line_id: 3,
    code: '7951470',
    image_path: '/assets/products/laminado/carvalho-canela.webp',
    slug: 'carvalho-canela'
  },  
  {
    name: 'Freijó Âmbar',
    product_line_id: 4,
    code: '7950179',
    image_path: '/assets/products/laminado/freijo-ambar.webp',
    slug: 'freijo-ambar'
  },  
  {
    name: 'Cor: 25759522',
    product_line_id: 5,
    code: '25759522',
    image_path: '/assets/products/vinilico/paviflex-25759522.jpg',
    slug: 'cor-25759522'
  },  
  {
    name: 'Cor: 25759569',
    product_line_id: 5,
    code: '25759569',
    image_path: '/assets/products/vinilico/paviflex-25759569.jpg',
    slug: 'cor-25759569'
  },  
  {
    name: 'Perfil DN Patina Cottage',
    product_line_id: 7,
    code: '25759569',
    image_path: '/assets/products/acabamento/perfil-dn-patina-cottage.webp',
    slug: 'perfil-dn-patina-cottage'
  },  
  {
    name: 'Rodapé Patina Cottage',
    product_line_id: 9,
    code: '25759569',
    image_path: '/assets/products/acabamento/rodape-patina-cottage.webp',
    slug: 'rodape-patina-cottage'
  },
  {
    name: 'Cantoneira Patina Cottage',
    product_line_id: 10,
    code: '25759569',
    image_path: '/assets/products/acabamento/cantoneira-patina-cottage.webp',
    slug: 'cantoneira-patina-cottage'
  },  
]

export const installations_performed_data = [
  {
    product_id: 2,
    image_path: '/assets/installations_performed/carvalho-cafe-restaurado.jfif'
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
