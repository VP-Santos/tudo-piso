import { prisma } from "@/lib/prisma";
import NavBar from "../components/NavBar";
import { Box, Paper, Typography, Stack, Divider, Container } from "@mui/material";
import AreaCard from "../components/Cards";
import Link from "next/link";


export default async function CategoryPage({ params }: {
  params: { category: string };
}) {
  const { category: categorySlug } = await params;

  const categoryData = await prisma.categories.findFirst({
    where: { name: categorySlug },
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
    return (<div></div>);
  }

  const capitalize = (str: string) =>
    str.charAt(0).toUpperCase() + str.slice(1);

  return (
    <>
      <NavBar />
      <Container maxWidth='xl'>
          <Paper
            elevation={2}
            sx={{
              mt: 6,
              mb: 6,
              p: { xs: 3, md: 5 },
              borderRadius: 3,
              textAlign: "center",
              background: "linear-gradient(to right, #ffffff, #f9f9f9)",
            }}
          >
            <Typography
              variant="h6"
              fontWeight={600}
              sx={{ mb: 2 }}
            >
              {capitalize(categoryData.name)}
            </Typography>

            <Typography
              variant="body1"
              color="text.secondary"
              sx={{
                maxWidth: 750,
                mx: "auto",
                lineHeight: 1.7,
              }}
            >
              {categoryData?.description ||
                "Texto aqui"}
            </Typography>
          </Paper>


          {categoryData?.category_manufacturer.map((item) => (
            <Paper
              key={item.id}
              elevation={3}
              sx={{
                mb: 6,
                p: 4,
                borderRadius: 3,
                background: "linear-gradient(to bottom, #ffffff, #fafafa)",
              }}
            >
              <Stack
                direction="row"
                spacing={3}
                alignItems="center"
                justifyContent="center"
                sx={{ mb: 3 }}
              >
                <Box
                  component="img"
                  src={item.manufacturers.image_path}
                  alt={item.manufacturers.name}
                  sx={{
                    height: 90,
                    width: "auto",
                    objectFit: "contain",
                    filter: "drop-shadow(0px 2px 6px rgba(0,0,0,0.1))",
                  }}
                />
              </Stack>

              <Box
                sx={{
                  textAlign: "center",
                  mb: 4,
                  px: 2,
                }}
              >
                <Typography variant="h6" fontWeight={600}>
                  {item.manufacturers?.name}
                </Typography>

                <Typography variant="body2" color="text.secondary">
                  Origem: {item.manufacturers?.origin}
                </Typography>

                <Typography
                  variant="body2"
                  sx={{ mt: 1, maxWidth: 700, mx: "auto" }}
                  color="text.secondary"
                >
                  {item.manufacturers?.description}
                </Typography>
              </Box>

              <Divider sx={{ mb: 3 }} />


              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: {
                    xs: "repeat(1, 1fr)",
                    sm: "repeat(2, 1fr)",
                    md: "repeat(3, 1fr)",
                  },
                  gap: 3,
                  justifyItems: "center",
                }}
              >
                {item.product_lines.map((line) => {
                  const slug = line.name?.replace(/\s+/g, "-").toLowerCase();

                  return (
                    <Link
                      key={line.id}
                      href={`/${categorySlug}/${slug}`}
                      style={{ textDecoration: "none", width: "100%" }}
                    >
                      <Box
                        sx={{
                          transition: "0.2s",
                          "&:hover": {
                            transform: "translateY(-4px)",
                          },
                        }}
                      >
                        <AreaCard
                          width="100%"
                          height={140}
                          name={line.name}
                          image={line.image_path}
                        />
                      </Box>
                    </Link>
                  );
                })}
              </Box>
            </Paper>
          ))}
      </Container>
    </>
  );
}