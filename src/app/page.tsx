import { Box, Button, Paper, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import Link from 'next/link';

import AreaCard from './components/Cards';
import Displaypiso from './components/Displaypiso';
import { prisma } from '@/lib/prisma';
import { Categories } from '@/types/interfaces';
import NavBar from './components/NavBar';

export default async function Home() {
  const categories : Categories[] = await prisma.categories.findMany();

  
  return (
    <Box component="main">
      <NavBar/>
      <Box
        display="flex"
        flexDirection={{ xs: 'column', md: 'row' }}
        alignItems="center"
        justifyContent="center"
        gap={4}
        my={6}
      >
        <Box flex={1}>
          <Paper
            elevation={6}
            sx={{
              backgroundColor: 'rgba(194, 193, 193, 0.5)',
              color: '#272727',
              p: 4,
              borderRadius: 3,
              textAlign: 'center',
              height: 260,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <Typography variant="h4" fontWeight={600} gutterBottom>
              Conheça o nosso trabalho
            </Typography>

            <Typography variant="body1" sx={{ mb: 3 }}>
              Não colocamos um piso, nós realizamos um sonho!
            </Typography>

            <Button variant="contained" size="large">
            Quem somos!
            </Button>
          </Paper>
        </Box>
        <Displaypiso />

      </Box>

      <Box py={6}>
        <Grid container spacing={5} justifyContent="center">
          {categories.map((item) => {
            const slug = item.name.toLowerCase().replace(/\s+/g, '-');

            return (
              <Grid key={item.id}>
                <Link href={`/${slug}`} style={{ textDecoration: 'none' }}>
                  <AreaCard name={item.name} image={item.image} width={350} />
                </Link>
              </Grid>
            );
          })}
        </Grid>
      </Box>

      <Box my={8}>
        <Paper elevation={8} sx={{ p: 5, textAlign: 'center', margin: 4 }}>
          <Typography variant="h5" fontWeight={600} gutterBottom>
            Sobre a Tudo Piso
          </Typography>

          <Typography variant="h6" color="text.secondary" gutterBottom>
            Qualidade, confiança e alto padrão
          </Typography>

          <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
            Desde 2011 no mercado, sem registros no Reclame Aqui e Procon. <br />
            Especialistas em pisos laminados. <br />
            Frota própria, entrega ágil e equipe altamente qualificada. <br />
            Atendimento em toda a região do ABC e São Paulo.
          </Typography>
        </Paper>
      </Box>
    </Box>
  );
}