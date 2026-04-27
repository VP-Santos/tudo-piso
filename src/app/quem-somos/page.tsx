import { Box, Container, Grid, Paper, Typography } from '@mui/material'
import Navbar from '../components/Server/NavBar'
import Fotter from '../components/Server/Fotter'
import Image from '../components/Server/Image'

export default function QuemSomos() {
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
                            <Typography color="text.secondary">
                                Aqui você pode escrever um texto institucional
                                explicando a história da empresa, missão,
                                valores e propósito.
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
                        <Grid size={{xs:6, sm:4, md:3}}>
                            <Image
                                path={'/assets/piso.jpg'}
                                name={'foto'}
                            />
                        </Grid>
                        <Grid size={{xs:6, sm:4, md:3}}>
                            <Image
                                path={'/assets/piso.jpg'}
                                name={'foto'}
                            />
                        </Grid>
                        <Grid size={{xs:6, sm:4, md:3}}>
                            <Image
                                path={'/assets/piso.jpg'}
                                name={'foto'}
                            />
                        </Grid>
                        <Grid size={{xs:6, sm:4, md:3}}>
                            <Image
                                path={'/assets/piso.jpg'}
                                name={'foto'}
                            />
                        </Grid>
                        <Grid size={{xs:6, sm:4, md:3}}>
                            <Image
                                path={'/assets/piso.jpg'}
                                name={'foto'}
                            />
                        </Grid>
                        <Grid size={{xs:6, sm:4, md:3}}>
                            <Image
                                path={'/assets/piso.jpg'}
                                name={'foto'}
                            />
                        </Grid>
                    </Grid>
                </Paper>
            </Container>

            <Fotter />
        </Box>
    )
}