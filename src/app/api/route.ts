import { prisma } from '@/lib/prisma';   // Importa a instância singleton do Prisma
import { NextResponse } from 'next/server';  // Função para responder na rota API do Next.js App Router

export async function GET() {
  // Consulta todos os produtos, trazendo também as relações categoria, fabricante e linha
  const produtos = await prisma.produto.findMany({
    include: {
      categoria: true,
      fabricante: true,
      linha: true,
    },
  });

  const categoria = await prisma.categoria.findMany({
    include: {
      fabricante: true
    }
  });


  // Retorna os dados como JSON para quem fez a requisição GET nessa rota
  return NextResponse.json(produtos);
}
