import { prisma } from "@/lib/prisma";
import NavBar from "../components/Server/NavBar";
import {
  Box,
  Paper,
  Typography,
  Stack,
  Container,
} from "@mui/material";
import AreaCard from "../components/Server/Cards";
import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";

type Props = {
  params: { category: string };
};

const slugify = (value: string) =>
  value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") 
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-");

export default async function CategoryPage({ params }: Props) {
  const { category: categorySlug } = await params;

  const category = await prisma.categories.findFirst({
    where: {
      slug: categorySlug
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

  if (!category) return <></>;

  return (
    <>
      <NavBar />

      <Container maxWidth="xl">
        <Paper
          elevation={1}
          sx={{
            mt: 6,
            mb: 6,
            px: { xs: 2, md: 4 },
            py: 4,
            borderRadius: 3,
            backgroundColor: "#f5f5f5",
          }}
        >
          <Typography
            variant="h4"
            component="h1"
            fontWeight={700}
            gutterBottom
          >
            {category.name}
          </Typography>

          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ maxWidth: '100%' }}
          >
            <ReactMarkdown>
              {category.description}
            </ReactMarkdown>
          </Typography>

          <Box mt={5}>
            {category.category_manufacturer.map((item) => (
              <Paper
                key={item.id}
                elevation={0}
                sx={{
                  p: 3,
                  mb: 4,
                  borderRadius: 3,
                  border: "1px solid #eee",
                }}
              >
                <Stack
                  direction="row"
                  spacing={3}
                  alignItems="center"
                  sx={{ mb: 3 }}
                >
                  <Box
                    component="img"
                    src={item.manufacturers.image_path}
                    alt={`Logo ${item.manufacturers.name}`}
                    loading="lazy"
                    sx={{
                      height: 70,
                      objectFit: "contain",
                    }}
                  />

                  <Box>
                    <Typography variant="h6" fontWeight={600}>
                      {item.manufacturers.name}
                    </Typography>

                    <Typography
                      variant="body2"
                      color="text.secondary"
                    >
                      {item.manufacturers.origin}
                    </Typography>
                  </Box>
                </Stack>

                <Box
                  sx={{
                    display: "grid",
                    gridTemplateColumns: {
                      xs: "1fr",
                      sm: "repeat(2, 1fr)",
                      md: "repeat(3, 1fr)",
                      lg: "repeat(4, 1fr)",
                    },
                    gap: 2,
                  }}
                >
                  {item.product_lines.map((line) => {
                    const slug = slugify(line.slug);

                    return (
                      <Link
                        key={line.id}
                        href={`/${categorySlug}/${slug}`}
                        style={{ textDecoration: "none" }}
                      >
                        <Box
                          sx={{
                            height: "100%",
                            transition: "all .2s ease",
                            "&:hover": {
                              transform: "translateY(-6px)",
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
          </Box>
        </Paper>
      </Container>
    </>
  );
}