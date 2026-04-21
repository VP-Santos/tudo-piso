import { Box, Button, Paper, Typography, Container } from '@mui/material';
import Grid from '@mui/material/Grid';
import AreaCard from './components/Cards';
import Displaypiso from './components/Displaypiso';
import { prisma } from '@/lib/prisma';
import Link from 'next/link';
import { categories } from '@prisma/client';


export default async function Home() {
  const categoryMap : categories[] = await prisma.categories.findMany();

  return (
    <>
        <Box
          display="flex"
          flexDirection={{ xs: 'column', md: 'row' }}
          my={4}
          alignItems="center"
          justifyContent="center"
        >
          <Box flex={1}>
            <Paper
              elevation={6}
              sx={{
                backgroundColor: 'rgba(194, 193, 193, 0.5)',
                color: '#272727',
                padding: 4,
                borderRadius: 2,
                textAlign: 'center',
                height: 240,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              <Typography variant="h4" gutterBottom>
                Conheça os nossos pisos!
              </Typography>

              <Typography paragraph>
                O piso laminado é um tipo de piso que proporciona maior conforto térmico em qualquer estação.
              </Typography>

              <Button variant="contained">
                Descubra mais sobre nós!
              </Button>
            </Paper>
          </Box>

          <Displaypiso />
        </Box>

        <Box py={5}>
          <Grid container spacing={3} justifyContent="center">
            {categoryMap.map((item) => {
              const slug = item.name;

              return (
                <Grid key={item.id}>
                  <Link
                    href={`/${slug}`}
                    style={{ textDecoration: 'none', display: 'block' }}
                  >
                    <AreaCard
                      name={item.name}
                      image={item.image}
                    />
                  </Link>
                </Grid>
              );
            })}
          </Grid>
        </Box>

        <Box my={5}>
          <Paper elevation={8} sx={{ padding: 4 }}>
            <Typography variant="h5" align="center" gutterBottom>
              Sobre a Tudo Piso
            </Typography>

            <Typography variant="h6" align="center" gutterBottom>
              Alto padrão e excelência
            </Typography>

            <Typography variant="body1">
              Desde 2011 sem Reclame Aqui e Procon! <br />
              Somos especialistas em pisos laminados. <br />
              Frota própria, entrega rápida e equipe qualificada. <br />
              Atendemos toda a região do ABC e São Paulo.
            </Typography>
          </Paper>
        </Box>

      <Box>
        <Paper
          elevation={6}
          sx={{
            width: '100%',
            height: 200,
            backgroundImage: "url('/assets/piso.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      </Box>

    </>
  );
};