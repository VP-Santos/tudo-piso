import { prisma } from "@/lib/prisma";
import NavBar from "../components/Server/NavBar";
import {
  Box,
  Paper,
  Typography,
  Stack,
  Container,
  Grid,
} from "@mui/material";
import AreaCard from "../components/Server/CardImage";
import ReactMarkdown from "react-markdown";

type Props = {
  params: { category: string };
};

// TODO apagar função de replace
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
    <Box component={'main'} sx={{
      xs: {
        alignItems: 'center'
      }
    }}>
      <NavBar />

      <Container maxWidth="xl" >
        {/*TODO COLOCAR ESTILOS EM ARQUIVOS A PARTE*/}
        <Paper
          elevation={8}
          sx={{
            mt: 6,
            mb: 6,
            px: 4,
            py: 4,
            borderRadius: 10,
            backgroundColor: "#f5f5f5",
          }}
        >
          <Typography
            variant="h4"
            component="h1"
            fontWeight={700}
            textAlign={'center'}
            gutterBottom
          >
            {category.name}
          </Typography>

          <Box sx={{ color: "text.secondary" }}>
            <ReactMarkdown>
              {category.description}
            </ReactMarkdown>
          </Box>

          {category.category_manufacturer.map((item) => {

            return (
              <Stack key={item.id}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    p: 2,
                    borderRadius: 2,
                    bgcolor: "#cfcfcf",
                    boxShadow: 5,
                  }}
                >
                  <Box
                    component="img"
                    src={item.manufacturers.image_path}
                    alt={`Logo ${item.manufacturers.name}`}
                    loading="lazy"
                    sx={{
                      height: 60,
                      width: 60,
                      objectFit: "contain",
                      borderRadius: 1,
                      bgcolor: "#fff",
                      p: 1,
                    }}
                  />

                  <Box>
                    <Typography variant="subtitle1" fontWeight={600}>
                      {item.manufacturers.name}
                    </Typography>

                    <Typography variant="body2" color="text.secondary">
                      {item.manufacturers.origin}
                    </Typography>
                  </Box>
                </Box>

                <Grid container spacing={4} p={3}>
                  {
                    item.product_lines.map((line) => {

                      const slug = slugify(line.slug);

                      return (
                        <Grid key={line.id} size={{ xs: 12, sm: 6, md: 3 }}>
                          <AreaCard
                            name={line.name}
                            image={line.image_path}
                            link={`/${categorySlug}/${slug}`}
                            height={140}
                          />
                        </Grid>
                      );
                    })
                  }
                </Grid>
              </Stack>
            );
          })
          }
        </Paper>
      </Container>
    </Box>
  );
}