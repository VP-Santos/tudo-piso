import { Box, Container, Grid, Paper, Typography } from '@mui/material'
import Navbar from '../components/Server/NavBar'
import Fotter from '../components/Server/Fotter'
import Image from '../components/Server/Image'
import { prisma } from '@/lib/prisma'

export default async function QuemSomos() {

    const installations = await prisma.installations_performed.findMany()

    return (
        <Box>
            <Navbar />

            <Container maxWidth="xl">
                <Paper elevation={3} sx={{ marginTop: 6, borderRadius: 2 }}>
                    <Typography
                        p={3}
                        variant="h4"
                        fontWeight="bold"
                        textAlign={'center'}
                    >
                        Quem Somos
                    </Typography>

                    <Grid container spacing={3} p={3} mt={3} mb={3}>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <Image
                                path={'/assets/piso.jpg'}
                                name={'foto'}
                            />
                        </Grid>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <Typography variant="h6" >
                                Nossa História
                            </Typography>
                            <Typography color="text.secondary" p={1}>
                                Um projeto que valoriza o ambiente e reflete
                                o cuidado que temos com cada cliente.
                            </Typography>

                            <Typography color="text.secondary" p={1}>
                                A Tudo Pisos nasceu com o propósito de reunir os melhores instaladores,
                                oferecendo aos nossos clientes muito mais do que um serviço:
                                uma experiência de satisfação, sofisticação e confiança.
                            </Typography>

                            <Typography color="text.secondary" p={1}>
                                Nosso compromisso é transformar o sonho de um piso novo em realidade,
                                sempre com máxima qualidade e atenção aos detalhes. Para nós,
                                cada instalação é única.
                            </Typography>
                        </Grid>
                    </Grid>
                    <Typography variant='h5'
                        textAlign={'center'}
                        fontWeight={600}
                        bgcolor={'#cfcfcf'}
                        m={3}
                        p={3}
                        boxShadow={8}
                        borderRadius={2}>
                        Serviços que realizamos!
                    </Typography>

                    <Grid container spacing={3} p={3} mt={3} mb={3}>
                        {installations.map((installation) => {
                            return (
                                <Grid key={installation.id} size={{ xs: 6, sm: 4, md: 3 }}>
                                    <Image
                                        path={installation.image_path}
                                        name={'image_' + installation.id}
                                    />
                                </Grid>
                            )
                        })}
                    </Grid>
                </Paper>
            </Container>

            <Fotter />
        </Box>
    )
}