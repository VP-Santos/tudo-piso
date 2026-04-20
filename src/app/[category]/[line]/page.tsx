import Navbar from '@/app/components/Navbar'
import { prisma } from '@/lib/prisma'
import { Container } from '@mui/material'

export default async function LinePage({ params }: {
    params: ({ line: string })
}) {

    const categoryLine = (await params).line

    const Line = await prisma.product_lines.findFirst(
        {
            where: {
                name: categoryLine.replace('-', ' ')
            },
            include: {
                products: true
            }
        })

    console.log(Line);


    return (
        <>
            <Navbar />
            <Container>
                {categoryLine}
            </Container>
        </>
    )
}