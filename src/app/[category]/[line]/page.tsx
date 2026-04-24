import AreaCard from '@/app/components/Server/Cards';
import NavBar from '@/app/components/Server/NavBar';
import { prisma } from '@/lib/prisma';
import { Box, Container, Typography } from '@mui/material';
import Link from 'next/link';

export default async function LinePage({ params }: { params: { category: string, line: string } }) {
    const { line: categoryLine } = await params;
    const { category: category } = await params;

    const formattedName = categoryLine.replace('-', ' ');

    const lineData = await prisma.product_lines.findFirst({
        where: {
            name: formattedName,
        },
        include: {
            products: true,
        },
    });

    const products = lineData?.products ?? [];

    return (
        <>

            <NavBar />
            <Container maxWidth="lg" sx={{ py: 4 }}>
                <Typography
                    variant="h4"
                    gutterBottom
                    sx={{ fontWeight: 600, textTransform: 'uppercase' }}
                >
                    {formattedName}
                </Typography>

                {products.length === 0 ? (
                    <Typography variant="body1" color="text.secondary">
                        Nenhum produto encontrado para esta linha.
                    </Typography>
                ) : (
                    <Box
                        sx={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: 3,
                            mt: 2,
                        }}
                    >
                        {products.map((product) => (
                            <Link key={product.id} href={`/${category}/${categoryLine}/${product.name.replaceAll(' ', '-')}`}>
                                <AreaCard
                                    key={product.id}
                                    name={product.name}
                                    image="/assets/category/laminado.png"
                                    width={200}
                                    height={200}
                                />
                            </Link>
                        ))}
                    </Box>
                )}
            </Container>
        </>
    );
}