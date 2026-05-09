import AreaCard from '@/app/components/Server/CardImage';
import Footer from '@/app/components/Server/Fotter';
import NavBar from '@/app/components/Server/NavBar';
import { prisma } from '@/lib/prisma';
import { Box, Container, Grid, Paper, Typography, Stack } from '@mui/material';

// Importando seus novos estilos compactos
import {
  lineProductPaper,
  typoTitle,
  typoDescription,
  technicalSpecsBox
} from '@/styles/components/PaperStyles';
import NotFound from '@/app/not-found';

type PageProps = {
  params: {
    category: string;
    line: string;
  };
};

export default async function LinePage({ params }: PageProps) {
  const { category, line } = await params;

  const lineData = await prisma.product_lines.findFirst({
    where: { slug: line },
    include: { products: true },
  });


  if (!lineData) return <NotFound />;

  return (
    <Box>
      <NavBar />

      <Container maxWidth="xl" sx={{ py: 4 }}>
        <Paper sx={lineProductPaper}>

          {lineData.products.length > 0 ? (
            <>
              <Typography variant="h6" sx={typoTitle}>
                {lineData.name}
              </Typography>

              <Box sx={technicalSpecsBox}>
                <Typography sx={typoDescription}>
                  <strong>Descrição:</strong> {lineData.description}
                </Typography>

                <Stack direction="row" spacing={3} mt={1}>
                  <Typography variant="body2">
                    <strong>Largura:</strong> {lineData.width} cm
                  </Typography>

                  <Typography variant="body2">
                    <strong>Comprimento:</strong> {lineData.length} cm
                  </Typography>
                </Stack>
              </Box>

              <Grid container spacing={3}>
                {lineData.products.map((product) => (
                  <Grid key={product.id} size={{ xs: 12, sm: 4, md: 3 }}>
                    <AreaCard
                      name={product.name}
                      image={product.image_path}
                      link={`/${category}/${line}/${product.slug}`}
                    />
                  </Grid>
                ))}
              </Grid>
            </>
          ) : (
            <Box sx={{ py: 8, textAlign: 'center' }}>
              <Typography variant="h5" gutterBottom>
                Nenhum produto encontrado
              </Typography>

              <Typography variant="body1" color="text.secondary">
                Esta linha ainda não possui produtos cadastrados.
              </Typography>
            </Box>
          )}

        </Paper>
      </Container>

      <Footer />
    </Box>
  );
}