import { prisma } from "@/lib/prisma";
import { Box, Paper, Typography } from "@mui/material";
import Navbar from "../components/Navbar";
import AreaCard from "../components/Cards";

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category: categorySlug } = await params;

  const categoryName = categorySlug;

  const categoryData = await prisma.categories.findFirst({
    where: {
      name: {
        equals: categoryName,
        mode: "insensitive",
      },
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

  if (!categoryData) {
    return (
      <>
        <Navbar />
        <Typography textAlign="center" mt={5}>
          Categoria não encontrada
        </Typography>
      </>
    );
  }

  return (
    <>
      <Navbar />

      <Typography variant="h4" textAlign="center" mt={3}>
        {categoryData.name}
      </Typography>

      {categoryData.category_manufacturer.map((item) => (
        <Box key={item.id}>
          <Paper sx={{ margin: 4, padding: 3 }}>
            fabricante: {item.manufacturers?.name} <br />
            origem: {item.manufacturers?.origin} <br />
            descrição: {item.manufacturers?.description}
          </Paper>

          <Box sx={{ display: "flex", justifyContent: "center", gap: 4 }}>
            {item.product_lines.map((line) => (
              <AreaCard
                key={line.id}
                id={line.id}
                width={200}
                height={100}
                nome={line.name}
                image="/assets/category/laminado.png"
              />
            ))}
          </Box>
        </Box>
      ))}
    </>
  );
}