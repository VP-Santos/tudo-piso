import { Box, Container, Grid, Paper, Typography } from '@mui/material'
import Navbar from '../components/Server/NavBar'
import Fotter from '../components/Server/Fotter'
import Image from '../components/Server/Image'
import { prisma } from '@/lib/prisma'
import { 
    infoPagePaper, 
    sectionHighlightHeader, 
    typoTitle, 
    typoDescription 
} from '@/styles/components/PaperStyles'

export default async function QuemSomos() {
    const installations = await prisma.installations_performed.findMany()

    return (
        <Box component="main">
            <Navbar />

            <Container maxWidth="xl">
                <Paper sx={infoPagePaper}>
                    <Typography
                        variant="h4"
                        sx={{ ...typoTitle, mb: 4 }}
                    >
                        Quem Somos
                    </Typography>

                    <Grid container spacing={5} alignItems="center">
                        <Grid size={{ xs: 12, md: 6 }}>
                            <Image
                                path={'/assets/piso.jpg'}
                                name={'foto_institucional'}
                            />
                        </Grid>

                        <Grid size={{ xs: 12, md: 6 }}>
                            <Typography variant="h5" fontWeight={600} gutterBottom>
                                Nossa História
                            </Typography>

                            <Typography sx={{ ...typoDescription, mb: 2 }}>
                                Um projeto que valoriza o ambiente e reflete
                                o cuidado que temos com cada cliente.
                            </Typography>

                            <Typography sx={{ ...typoDescription, mb: 2 }}>
                                A Tudo Pisos nasceu com o propósito de reunir os melhores instaladores,
                                oferecendo aos nossos clientes muito mais do que um serviço:
                                uma experiência de satisfação, sofisticação e confiança.
                            </Typography>

                            <Typography sx={typoDescription}>
                                Nosso compromisso é transformar o sonho de um piso novo em realidade,
                                sempre com máxima qualidade e atenção aos detalhes.
                            </Typography>
                        </Grid>
                    </Grid>

                    <Typography variant="h5" sx={sectionHighlightHeader}>
                        Serviços que realizamos!
                    </Typography>

                    <Grid container spacing={2}>
                        {installations.map((installation) => (
                            <Grid key={installation.id} size={{ xs: 6, sm: 4, md: 3 }}>
                                <Box sx={{
                                    borderRadius: 2,
                                    overflow: 'hidden',
                                    boxShadow: 1,
                                    height: '100%',
                                    transition: 'transform 0.2s ease',
                                    '&:hover': { transform: 'scale(1.02)' }
                                }}>
                                    <Image
                                        path={installation.image_path}
                                        name={'image_' + installation.id}
                                    />
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Paper>
            </Container>

            <Fotter />
        </Box>
    );
}