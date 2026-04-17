import { PrismaClient } from '@prisma/client';

// Aqui estamos usando a variável global do Node para armazenar a instância do PrismaClient
const globalForPrisma = globalThis as unknown as { prisma: PrismaClient | undefined };

// Se já existir uma instância no ambiente de desenvolvimento, reutilizamos ela, senão criamos uma nova
export const prisma = globalForPrisma.prisma ?? new PrismaClient();

// Em dev, garantimos que a instância fique salva no global para evitar múltiplas conexões ao banco
if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;
