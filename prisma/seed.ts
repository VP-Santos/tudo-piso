import { PrismaClient } from '@prisma/client'



const prisma = new PrismaClient()

async function main() {
    // Categorias

    await prisma.produto.deleteMany()
    await prisma.linha.deleteMany()
    await prisma.fabricante.deleteMany()
    await prisma.categoria.deleteMany()


    // Fabricantes
    const quickstep = await prisma.fabricante.upsert({
        where: { nome: 'Quickstep' },
        update: {},
        create: {
            nome: 'Quickstep',
            descricao: 'Marca internacional com ampla linha de pisos vinílicos e laminados.',
            site: 'https://quickstep.com',
        },
    })

    const eucafloor = await prisma.fabricante.upsert({
        where: { nome: 'Eucafloor' },
        update: {},
        create: {
            nome: 'Eucafloor',
            descricao: 'Especialista em pisos resistentes com foco em sustentabilidade.',
            site: 'https://eucafloor.com.br',
        },
    })

    const santoro = await prisma.fabricante.upsert({
        where: { nome: 'Santoro' },
        update: {},
        create: {
            nome: 'Santoro',
            descricao: 'Fabricante nacional de rodapés e acessórios de acabamento.',
            site: 'https://santoro.com.br',
        },
    })
    const pisoLaminado = await prisma.categoria.upsert({
        where: { slug: 'piso-laminado' },
        update: {},
        create: {
            nome: 'Piso Laminado',
            slug: 'piso-laminado',
            descricao: 'Pisos compostos por lâminas decorativas, duráveis e fáceis de instalar.',
            fabricanteId: quickstep.id
        },
    })

    const pisoVinilico = await prisma.categoria.upsert({
        where: { slug: 'piso-vinilico' },
        update: {},
        create: {
            nome: 'Piso Vinílico',
            slug: 'piso-vinilico',
            descricao: 'Piso flexível e resistente à água, ideal para áreas úmidas e de alto tráfego.',
            fabricanteId: eucafloor.id
        },
    })

    const rodape = await prisma.categoria.upsert({
        where: { slug: 'rodape' },
        update: {},
        create: {
            nome: 'Rodapé',
            slug: 'rodape',
            descricao: 'Acabamentos para paredes que protegem e dão estilo ao ambiente.',
            fabricanteId: santoro.id,
        },
    })
    // Linhas
    const smart = await prisma.linha.upsert({
        where: { nome: 'Smart' },
        update: {},
        create: {
            nome: 'Smart',
            descricao: 'Linha econômica com estilo moderno e instalação prática.',
            fabricanteId: quickstep.id,
            categoriaId: pisoLaminado.id,
        },
    })

    const studio = await prisma.linha.upsert({
        where: { nome: 'Studio' },
        update: {},
        create: {
            nome: 'Studio',
            descricao: 'Linha vinílica com foco em conforto e durabilidade.',
            fabricanteId: eucafloor.id,
            categoriaId: pisoVinilico.id,
        },
    })

    const white = await prisma.linha.upsert({
        where: { nome: 'White' },
        update: {},
        create: {
            nome: 'White',
            descricao: 'Rodapés brancos com design clean e acabamento fosco.',
            fabricanteId: santoro.id,
            categoriaId: rodape.id,
        },
    })

    // Produto: Quickstep → Piso Laminado → Smart
    await prisma.produto.create({
        data: {
            nome: 'Piso Laminado Smart Carvalho Claro',
            codigo: 'QS-SM-001',
            cor: 'Carvalho Claro',
            espessuraMm: 7.0,
            larguraMm: 192.0,
            comprimentoMm: 1285.0,
            imagemUrl: 'https://example.com/smart-carvalho-claro.jpg',
            descricao: 'Piso laminado da linha Smart com acabamento em carvalho claro e sistema de encaixe fácil.',
            categoriaId: pisoLaminado.id,
            fabricanteId: quickstep.id,
            linhaId: smart.id,
        },
    })

    // Produto: Eucafloor → Piso Vinílico → Studio
    await prisma.produto.create({
        data: {
            nome: 'Piso Vinílico Studio Cinza Urbano',
            codigo: 'EU-ST-010',
            cor: 'Cinza Urbano',
            espessuraMm: 4.0,
            larguraMm: 180.0,
            comprimentoMm: 1220.0,
            imagemUrl: 'https://example.com/studio-cinza-urbano.jpg',
            descricao: 'Vinílico moderno da linha Studio, indicado para ambientes internos com alto tráfego.',
            categoriaId: pisoVinilico.id,
            fabricanteId: eucafloor.id,
            linhaId: studio.id,
        },
    })

    // Produto: Santoro → Rodapé → White
    await prisma.produto.create({
        data: {
            nome: 'Rodapé Branco White 12cm',
            codigo: 'ST-WH-005',
            cor: 'Branco',
            espessuraMm: 15.0,
            larguraMm: 120.0,
            comprimentoMm: 2400.0,
            imagemUrl: 'https://example.com/white-rodape-12cm.jpg',
            descricao: 'Rodapé da linha White com design moderno, ideal para ambientes sofisticados.',
            categoriaId: rodape.id,
            fabricanteId: santoro.id,
            linhaId: white.id,
        },
    })
}

main()
    .then(() => {
        console.log('✅ Seed concluído com sucesso.')
    })
    .catch((e) => {
        console.error(e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })
