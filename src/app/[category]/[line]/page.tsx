import AreaCard from '@/app/components/Server/Cards';
import Footer from '@/app/components/Server/Fotter';
import NavBar from '@/app/components/Server/NavBar';
import { prisma } from '@/lib/prisma';
import { Box, Container, Divider, Grid, Paper, Typography } from '@mui/material';
import Link from 'next/link';

type PageProps = {
    params: {
        category: string;
        line: string;
    };
};

export default async function LinePage({ params }: PageProps) {
    const { category, line } = params;

    const lineData = await prisma.product_lines.findFirst({
        where: {
            slug: line,
        },
        include: {
            products: true,
        },
    });

    if (!lineData) {
        return (
            <>
                <NavBar />
                <Container maxWidth="lg" sx={{ py: 4 }}>
                    <Typography variant="h6" color="text.secondary">
                        Linha não encontrada.
                    </Typography>
                </Container>
            </>
        );
    }

    const products = lineData.products;

    return (
        <Box>
            <NavBar />

            <Container maxWidth="xl" sx={{ p: 4 }}>
                <Paper elevation={8} sx={{
                    borderRadius: 10,
                    p: 3
                }}>
                    <Box
                        display="flex"
                        flexDirection="column"
                        gap={2}
                    >
                        <Typography
                            textAlign={'center'}
                            variant="h6"
                            sx={{
                                fontWeight: 700,
                                textTransform: 'uppercase',
                                letterSpacing: 1,
                            }}
                        >
                            {lineData.name}
                        </Typography>

                        <Box
                            display="flex"
                            flexDirection="column"
                            gap={0.5}
                        >
                            <Typography variant="body2" color="text.secondary">
                                <strong>Descrição:</strong> {lineData.description}
                            </Typography>

                            <Typography variant="body2">
                                <strong>Largura:</strong> {lineData.width} cm
                            </Typography>

                            <Typography variant="body2">
                                <strong>Comprimento:</strong> {lineData.length} cm
                            </Typography>
                        </Box>
                    </Box>
                    <Box>


                        <Grid container spacing={3} p={2}>
                            {
                                products.map((product) => {
                                    return (
                                        <Grid key={product.id} size={{ xs: 6, sm: 4, md: 3 }}>

                                            <AreaCard
                                                name={product.name}
                                                image={'/assets/piso2.jpg'}
                                                link={`/${category}/${line}/${product.slug}`} />
                                        </Grid>
                                    );
                                })
                            }
                        </Grid>
                    </Box>
                </Paper>
            </Container>
            <Footer />
        </Box>
    );
}