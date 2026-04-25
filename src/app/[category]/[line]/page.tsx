import AreaCard from '@/app/components/Server/Cards';
import NavBar from '@/app/components/Server/NavBar';
import { prisma } from '@/lib/prisma';
import { Box, Container, Divider, Paper, Typography } from '@mui/material';
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
        <>
            <NavBar />

            <Container maxWidth="xl" sx={{ p: 4 }}>
                <Paper elevation={8} sx={{
                    borderRadius: 10,
                    p: 5
                }}>
                    <Box display={'flex'} justifyContent={'center'}>
                    <Typography
                        variant="h4"
                        sx={{
                            fontWeight: 600,
                            textTransform: 'uppercase',
                        }}
                        >
                        {lineData.name}
                    </Typography>
                        </Box>
                    <Box>
                        <Typography>
                            descrição:
                        </Typography>
                        <Typography>
                            largura: {lineData.width}
                        </Typography>
                        <Typography>
                            comprimento: {lineData.length}
                        </Typography>
                    </Box>

                    <Divider />

                    <Box>
                        {
                            <Box
                                sx={{
                                    display: 'grid',
                                    gridTemplateColumns: {
                                        xs: 'repeat(2, 1fr)',
                                        sm: 'repeat(3, 1fr)',
                                        md: 'repeat(4, 1fr)',
                                    },
                                    gap: 3,
                                    mt: 2,
                                }}
                            >
                                {products.map((product) => (
                                    <Link
                                        key={product.id}
                                        href={`/${category}/${line}/${product.slug}`}
                                        style={{ textDecoration: 'none' }}
                                    >
                                        <AreaCard
                                            name={product.name}
                                            image="/assets/category/laminado.png"
                                            width={200}
                                            height={200}
                                        />
                                    </Link>
                                ))}
                            </Box>
                        }
                    </Box>
                </Paper>
            </Container>
        </>
    );
}