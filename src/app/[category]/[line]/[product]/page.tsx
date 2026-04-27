import Footer from "@/app/components/Server/Fotter";
import Image from "@/app/components/Server/Image";
import NavBar from "@/app/components/Server/NavBar";
import { prisma } from "@/lib/prisma";
import { Container, Typography, Box, Paper, Grid, Divider } from "@mui/material";

export default async function ProductPage({
    params,
}: {
    params: { product: string };
}) {
    const { product: productSlug } = await params;


    const productFind = await prisma.products.findFirst({
        where: {
            slug: productSlug
        }, include: {
            product_lines: true

        }
    })

    if (!productFind) return <></>;

    return (
        <Box>
            <NavBar />
            <Container maxWidth="xl">
                <Paper elevation={8} style={{ borderRadius: 20 }}>
                    <Grid container p={3} spacing={6} mt={4} mb={5}>
                        <Grid size={{ xs: 12, sm: 6 }}>
                            <Image
                                path={`/${productFind.image_path}`}
                                name={productFind.name}
                            />
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6 }} sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between'
                        }}>
                            <Typography variant="h4" fontWeight={700} textAlign={'center'}>
                                {productFind.name}
                            </Typography>
                            <Box>
                                <Typography variant="body1" color="text.secondary" gutterBottom>
                                    Código: {productFind.code}
                                </Typography>

                                <Typography variant="subtitle1" fontWeight={600}>
                                    Linha do produto
                                </Typography>

                                <Typography variant="body2">
                                    {productFind.product_lines?.name}
                                </Typography>

                                <Typography variant="body2" color="text.secondary">
                                    Dimensões: {productFind.product_lines?.width}cm x{" "}
                                    {productFind.product_lines?.length}m
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                    <Typography variant="h5"
                        textAlign={'center'}
                        fontWeight={600}
                        bgcolor={'#cfcfcf'}
                        m={3}
                        p={3}
                        boxShadow={3}
                        borderRadius={2}
                    >Fotos de intalações
                    </Typography>
                    <Grid container spacing={3} p={3} mb={6}>
                        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                            <Image
                                path={`/${productFind.image_path}`}
                                name={productFind.name}
                            />
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                            <Image
                                path={`/${productFind.image_path}`}
                                name={productFind.name}
                            />
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                            <Image
                                path={`/${productFind.image_path}`}
                                name={productFind.name}
                            />
                        </Grid>
                    </Grid>
                </Paper>

            </Container>
            <Footer />
        </Box>
    );
}