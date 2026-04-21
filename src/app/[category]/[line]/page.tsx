import AreaCard from '@/app/components/Cards';
import Navbar from '@/app/components/Navbar'
import { prisma } from '@/lib/prisma'
import { Box, Container, Typography } from '@mui/material'

export default async function LinePage({ params }: {
    params: Promise<{ line: string }> // No Next.js 15+, params é uma Promise
}) {

    const { line: categoryLine } = await params;
    const formattedName = categoryLine.replace('-', ' ');

    const lineData = await prisma.product_lines.findFirst({
        where: {
            name: {
                equals: formattedName,
                mode: 'insensitive' // Opcional: ignora maiúsculas/minúsculas
            }
        },
        include: {
            products: true
        }
    });

    const products = lineData?.products || [];

    console.log(lineData);

    return (
        <>
                <Typography variant="h4" gutterBottom>
                    {formattedName.toUpperCase()}
                </Typography>
                <Box sx={{ display: 'flex', gap: 5 }}>

                    {
                        products.map((product) => (
                            <AreaCard name={product.name}
                                image={"/assets/category/laminado.png"}
                                width={200}
                                height={200}
                            />
                        ))
                    }
                </Box>
        </>
    )
}