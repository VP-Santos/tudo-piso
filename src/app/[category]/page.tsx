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
import {
  categoryMainPaper,
  manufacturerHeader,
  typoTitle,
  typoDescription
} from "@/styles/components/PaperStyles";
import NotFound from "@/app/not-found";

type Props = {
  params: { category: string };
};

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
  
  
  if (!category) return <NotFound/>;

  return (
    <Box component={'main'}>
      <NavBar />
      <Container maxWidth="xl">

        <Paper sx={categoryMainPaper}>
          <Typography variant="h4" component="h1" sx={{ ...typoTitle, mb: 3 }}>
            {category.name}
          </Typography>

          <Box sx={{ ...typoDescription, mb: 4 }}>
            <ReactMarkdown>{category.description}</ReactMarkdown>
          </Box>

          {category.category_manufacturer.map((item) => (
            <Stack key={item.id} sx={{ mb: 6 }}>

              <Box sx={manufacturerHeader}>
                <Box
                  component="img"
                  src={item.manufacturers.image_path}
                  alt={`Logo ${item.manufacturers.name}`}
                  sx={{
                    width: 80,
                    height: 80,
                    objectFit: 'contain',
                    borderRadius: '4px'
                  }}
                />
                <Box>
                  <Typography variant="subtitle1" fontWeight={700}>
                    {item.manufacturers.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.manufacturers.origin}
                  </Typography>
                </Box>
              </Box>

              <Grid container spacing={4} p={1}>
                {item.product_lines.map((line) => (
                  <Grid key={line.id} size={{ xs: 12, sm: 6, md: 3 }}>
                    <AreaCard
                      name={line.name}
                      image={line.image_path}
                      link={`/${categorySlug}/${line.slug}`}
                    />
                  </Grid>
                ))}
              </Grid>

            </Stack>
          ))}
        </Paper>
      </Container>
    </Box>
  );
}