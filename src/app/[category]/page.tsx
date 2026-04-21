import { prisma } from "@/lib/prisma";
import { Container } from "@mui/material";
import Navbar from "../components/Navbar";
import CategoryView from "../components/CategoyView";
import MyFooter from "../components/Fotter";

export default async function CategoryPage({ params }: {
  params: { category: string };
}) {
  const { category: categorySlug } = await params;

  const categoryData = await prisma.categories.findFirst({
    where: {
      name: categorySlug
    },
    include: {
      category_manufacturer: {
        include: {
          manufacturers: true,
          product_lines: true,
        },
      },
    },
  });

  return (
    <>
        <CategoryView categoryData={categoryData} url_path={categorySlug}/>

    </>
  );
}