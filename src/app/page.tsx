import { Box, Button, Container, Grid, Paper, Typography } from '@mui/material';
import Link from 'next/link';

import AreaCard from './components/Server/CardImage';
import { prisma } from '@/lib/prisma';
import NavBar from './components/Server/NavBar';
import Footer from './components/Server/Fotter';
import WhatsAppButton from './components/Client/WhatsappButton';
import DisplayImages from './components/Server/DisplayImages';
import { Theme } from '@/styles/Theme';
import { buttom } from '@/styles/components/ButtomStyles';

export default async function Home() {
  const categories = await prisma.categories.findMany({
    orderBy: { id: 'asc' },
  });

  return (
    <Box>
      <NavBar />

      <Container maxWidth="xl" sx={{ py: 4 }}>
        <Grid container spacing={4} sx={{ mb: 6 }} alignItems="stretch">

          <Grid
            size={{ xs: 12, md: 6 }}
            sx={{
              border: `3px solid ${Theme.colors.background.paper}`,
              borderRadius: Theme.radius.md,
            }}
          >
            <DisplayImages />
          </Grid>

          <Grid size={{ xs: 12, md: 6 }} sx={{ display: 'flex' }}>
            <Paper
              elevation={4}
              sx={{
                flex: 1,
                backgroundColor: Theme.colors.background.paper,
                color: Theme.colors.text.primary,
                p: 3,
                borderRadius: Theme.radius.lg,
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                boxShadow: Theme.shadow.lg,
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 700,
                  fontSize: { xs: 22, md: 26 },
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
                  color: Theme.colors.text.secondary,
                  fontSize: 15.5,
                  lineHeight: 1.6,
                }}
              >
                Levamos elegância, precisão e acabamento impecável para cada ambiente.
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  mb: 4,
                  color: Theme.colors.text.secondary,
                  fontSize: 15.5,
                  lineHeight: 1.6,
                  fontStyle: 'italic',
                }}
              >
                "Mais do que instalar pisos, realizamos projetos que transformam espaços."
              </Typography>

              <Link
                href="/quem-somos"
                style={{
                  textDecoration: 'none',
                  width: '100%',
                  maxWidth: '300px',
                }}
              >
                <Button
                  variant="contained"
                  sx={buttom}
                >
                  Saiba mais sobre nós
                </Button>
              </Link>
            </Paper>
          </Grid>
        </Grid>

        <Grid
          container
          spacing={3}
          sx={{
            width: '100%',
            mb: 6,
            justifyContent: 'center',
          }}
        >
          <Grid
            container
            spacing={4}
            alignItems="stretch"
            sx={{ px: { xs: 2, md: 0 } }}
          >
            {categories.map((item) => {
              const slug = item.slug.toLowerCase().replace(/\s+/g, '-');

              return (
                <Grid
                  size={{ xs: 12, sm: 6, md: 4 }}
                  key={item.id}
                  sx={{ display: 'flex' }}
                >
                  <AreaCard
                    name={item.name}
                    image={item.image}
                    link={`/${slug}`}
                  />
                </Grid>
              );
            })}
          </Grid>
        </Grid>

        <Box sx={{ mb: 4 }}>
          <Paper
            elevation={0}
            sx={{
              p: { xs: 3, md: 8 },
              textAlign: 'center',
              borderRadius: Theme.radius.lg,
              border: `1px solid ${Theme.colors.border}`,
              bgcolor: Theme.colors.background.paper,
            }}
          >
            <Typography variant="h5" fontWeight={700} gutterBottom>
              Sobre a Tudo Piso
            </Typography>

            <Typography
              variant="h6"
              sx={{
                mb: 4,
                fontSize: { xs: 16, md: 18 },
                color: Theme.colors.text.secondary,
              }}
            >
              Excelência em qualidade, confiança e acabamento
            </Typography>

            <Typography
              variant="body1"
              sx={{
                lineHeight: 1.8,
                maxWidth: '800px',
                margin: '0 auto',
                textAlign: 'justify',
                mb: 4,
                color: Theme.colors.text.primary,
              }}
            >
              Atuando no mercado desde 2011, a Tudo Piso construiu uma trajetória sólida,
              pautada pela transparência e pela satisfação dos clientes, sem registros em órgãos como Reclame Aqui e Procon.
              <br /><br />
              Somos especialistas em pisos laminados, oferecendo soluções completas com alto padrão de acabamento.
              Contamos com frota própria para garantir agilidade nas entregas e uma equipe altamente qualificada
              para executar cada projeto com precisão e cuidado.
              <br /><br />
              Atendemos toda a região do ABC e São Paulo, levando qualidade e confiança a cada cliente.
            </Typography>

            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <WhatsAppButton />
            </Box>
          </Paper>
        </Box>
      </Container>

      <Footer />
    </Box>
  );
}