import { Box, Container, Paper, Typography } from '@mui/material'
import Navbar from '../components/Server/NavBar'
import Fotter from '../components/Server/Fotter'

export default function QuemSomos() {
    return (
        <>
            <Navbar />

            <Container maxWidth="xl">
                <Box sx={{ py: 6 }}>
                    <Paper
                        elevation={6}
                        sx={{
                            p: { xs: 2, md: 4 },
                            borderRadius: 3
                        }}
                    >
                        <Typography
                            variant="h4"
                            fontWeight="bold"
                            gutterBottom
                        >
                            Quem Somos
                        </Typography>

                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: { xs: 'column', md: 'row' },
                                gap: 3,
                                mt: 3
                            }}
                        >
                            <Box
                                sx={{
                                    flex: 1,
                                    height: 250,
                                    bgcolor: 'grey.300',
                                    borderRadius: 2,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}
                            >
                                <Typography>Imagem / Conteúdo</Typography>
                            </Box>

                            <Box
                                sx={{
                                    flex: 1,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center'
                                }}
                            >
                                <Typography variant="h6" gutterBottom>
                                    Nossa História
                                </Typography>
                                <Typography color="text.secondary">
                                    Aqui você pode escrever um texto institucional
                                    explicando a história da empresa, missão,
                                    valores e propósito.
                                </Typography>
                            </Box>
                        </Box>

                        <Box sx={{ mt: 5 }}>
                            <Box
                                sx={{
                                    MaxWidth: 'auto',
                                    minHeight: 200,
                                    bgcolor: 'grey.300',
                                    borderRadius: 2,
                                    p: 3,
                                    display: 'flex',
                                    alignItems: 'center'
                                }}
                            >
                                <Typography color="text.secondary">
                                    Esse espaço pode ser usado para destacar
                                    diferenciais da empresa, visão ou algum
                                    conteúdo institucional relevante.
                                </Typography>
                            </Box>
                        </Box>
                    </Paper>
                </Box>
            </Container>

            <Fotter />
        </>
    )
}