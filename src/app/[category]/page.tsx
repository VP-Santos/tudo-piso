import { prisma } from "@/lib/prisma";
import { Box, capitalize, Container, Paper, Typography } from "@mui/material";
import Navbar from "../components/Navbar";
import AreaCard from "../components/Cards";
import Link from "next/link";

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

  // if (!categoryData) {
  //   return (
  //     <>
  //       <Navbar />
  //       <Typography textAlign="center" mt={5}>
  //         Categoria não encontrada
  //       </Typography>
  //     </>
  //   );
  // }

  const capitalize = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  return (
    <>

      <Navbar />

      <Container>
        <Typography variant="h4" textAlign="center" mt={3}>
          {capitalize(categoryData.name)}
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
                // const slug = item.name;

                <Link href={`/${categorySlug}/${line.name?.replace(' ', '-')}`}>
                  <AreaCard
                    key={line.id}
                    id={line.id}
                    width={200}
                    height={100}
                    nome={line.name}
                    image="/assets/category/laminado.png"
                  />
                </Link>
              ))}
            </Box>
          </Box>
        ))}

      </Container>
    </>
  );
}