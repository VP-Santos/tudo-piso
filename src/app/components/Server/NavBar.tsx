import { prisma } from '@/lib/prisma';
import NavBarClient from '../Client/NavBarClient';

export default async function NavBar() {
  const categories = await prisma.categories.findMany({
    orderBy: { id: 'asc' }
  });
  
  return <NavBarClient categories={categories} />;
}