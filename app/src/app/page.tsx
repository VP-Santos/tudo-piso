'use client';

import { Box, Button, Container, Grid, Paper, Typography } from '@mui/material';
import Navbar from './components/Navbar';
import AreaCard from './components/Cards';
import MyFooter from './components/Fotter';
import Displaypiso from './components/Displaypiso';
import { useRouter } from 'next/navigation';

export default function Home() {
  return (
    <>
      <Navbar />

      <Container>
        <Box display="flex" flexDirection={{ xs: 'column', md: 'row' }} my={4} alignItems="center" justifyContent="center">
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
                O piso laminado é um tipo de piso que proporciona maior conforto térmico qualquer que seja a estação, deixando o ambiente mais aconchegante.
              </Typography>
              <Button variant="contained" color="primary">
                Descubra mais sobre nós!
              </Button>
            </Paper>
          </Box>

          <Displaypiso>
          </Displaypiso>
        </Box>

        <Box py={5}>
          <Grid container spacing={3} justifyContent="center">
            <Grid item xs={12} sm={6} md={4}>
              <AreaCard nome="laminado" image="assets/Categoria/laminado.png" />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <AreaCard nome="vinilico" image="assets/Categoria/vinilico.png" />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <AreaCard nome="rodape" image="assets/Categoria/rodape.png" />
            </Grid>
          </Grid>
        </Box>

        <Box my={5}>
          <Paper elevation={8} sx={{ padding: 4 }}>
            <Typography variant="h5" align="center" gutterBottom>
              Sobre a Yamamoto Pisos
            </Typography>
            <Typography variant="h6" align="center" gutterBottom>
              Alto padrão e excelência
            </Typography>
            <Typography variant="body1">
              Desde 2011 sem Reclame Aqui e Procon! <br />
              Somos uma empresa especializada em venda e instalação de pisos laminados. <br />
              Frota própria, eficiência e rapidez na entrega! <br />
              Fácil instalação, limpeza prática e rápida. <br />
              Temos uma equipe qualificada e experiente garantindo um piso perfeito. <br />
              Atendemos toda a região do ABC (Diadema, São Bernardo do Campo, Santo André e São Caetano), São Paulo e Grande São Paulo.
            </Typography>
          </Paper>
        </Box>
      </Container>

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
      <MyFooter></MyFooter>
    </>
  );
}
