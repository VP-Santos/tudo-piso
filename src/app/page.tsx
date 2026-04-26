import { Box, Button, Container, Paper, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import Link from 'next/link';

import AreaCard from './components/Server/Cards';
import Displaypiso from './components/Client/Displaypiso';
import { prisma } from '@/lib/prisma';
import NavBar from './components/Server/NavBar';
import Footer from './components/Server/Fotter';

export default async function Home() {
  const categories = await prisma.categories.findMany({ orderBy: { id: 'asc' } });

  return (
    <Box component="main" sx={{
      xs: {
        alignItems: 'center'
      }
    }}>
      <NavBar />
      <Container maxWidth='xl'>

        <Grid container spacing={4} sx={{ width: '100%', alignItems: 'stretch' }} p={3}>

          <Grid size={{ xs: 12, md: 6 }} >
            <Displaypiso />
          </Grid>

          <Grid size={{ xs: 12, md: 6 }} sx={{ display: 'flex' }}>
            <Paper
              elevation={4}
              sx={{
                flex: 1,
                background: 'linear-gradient(135deg, #f5f5f5, #e0e0e0)',
                color: '#1f1f1f',
                p: 4,
                borderRadius: 4,
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 700,
                  fontSize: 26,
                  mb: 1.5,
                  letterSpacing: '0.5px',
                }}
              >
                Conheça Nosso Trabalho
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  mb: 2,
                  color: '#555',
                  fontSize: 15.5,
                  lineHeight: 1.6,
                }}
              >
                Levamos elegância, precisão e acabamento impecável para cada ambiente.
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  mb: 3,
                  color: '#555',
                  fontSize: 15.5,
                  lineHeight: 1.6,
                  fontStyle: 'italic',
                }}
              >
                Mais do que instalar pisos, realizamos projetos que transformam espaços.
              </Typography>

              <Link href="/quem-somos" style={{ textDecoration: 'none' }}>
                <Button
                  variant="contained"
                  size="medium"
                  sx={{
                    width: '100%',
                    borderRadius: 999,
                    backgroundColor: '#272727',
                    textTransform: 'none',
                    fontWeight: 600,
                    fontSize: 15,
                    py: 1.2,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      backgroundColor: '#000',
                      transform: 'translateY(-2px)',
                      boxShadow: '0 6px 16px rgba(0,0,0,0.2)',
                    },
                  }}
                >
                  Saiba mais sobre nós
                </Button>
              </Link>
            </Paper>
          </Grid>

        </Grid>

        <Grid container spacing={2} sx={{ width: '100%' }} p={3}>
          {categories.map((item) => {
            const slug = item.slug.toLowerCase().replace(/\s+/g, '-');

            return (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={item.id} alignItems={'center'}>
                <AreaCard
                  name={item.name}
                  image={item.image}
                  link={`/${slug}`}
                />
              </Grid>
            );
          })}
        </Grid>
        <Box mb={2} p={3}>
          <Paper elevation={8} sx={{ p: 5, textAlign: 'center', borderRadius: 5 }}>
            <Typography variant="h5" fontWeight={700} gutterBottom>
              Sobre a Tudo Piso
            </Typography>

            <Typography variant="h6" color="text.secondary" gutterBottom>
              Excelência em qualidade, confiança e acabamento
            </Typography>

            <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
              Atuando no mercado desde 2011, a Tudo Piso construiu uma trajetória sólida,
              pautada pela transparência e pela satisfação dos clientes, sem registros em órgãos como Reclame Aqui e Procon.
              <br /><br />
              Somos especialistas em pisos laminados, oferecendo soluções completas com alto padrão de acabamento.
              Contamos com frota própria para garantir agilidade nas entregas e uma equipe altamente qualificada
              para executar cada projeto com precisão e cuidado.
              <br /><br />
              Atendemos toda a região do ABC e São Paulo, levando qualidade e confiança a cada cliente.
            </Typography>
          </Paper>
        </Box>
      </Container>
      <Footer />
    </Box>
  );
}