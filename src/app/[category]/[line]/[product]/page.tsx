import NavBar from "@/app/components/Server/NavBar";
import Navbar from "@/app/components/Server/NavBar";
import { prisma } from "@/lib/prisma";
import { Container, Typography, Box } from "@mui/material";

export default async function ProductPage({
    params,
}: {
    params: { product: string };
}) {
    const { product: productSlug } = await params;

    const formattedName = productSlug.replaceAll('-', ' ');

    const productFind = await prisma.products.findFirst({
        where: {
            name: formattedName
        }, include: {
            product_lines: true

        }
    })

    return (
        <>
            <NavBar />
            <Container maxWidth="xl">
                <Box
                    sx={{
                        mt: 5,
                        mb: 5,
                        p: 4,
                        borderRadius: 3,
                        bgcolor: "#f9f9f9",
                    }}
                >
                    <Typography variant="body1">
                        {productFind && (
                            <Box
                                sx={{
                                    mt: 5,
                                    p: 4,
                                    borderRadius: 3,
                                    bgcolor: "#f9f9f9",
                                    maxWidth: 900,
                                    mx: "auto",
                                }}
                            >
                                <Box
                                    sx={{
                                        display: "flex",
                                        gap: 4,
                                        flexDirection: { xs: "column", md: "row" },
                                        alignItems: { xs: "center", md: "flex-start" },
                                    }}
                                >
                                    <Box
                                        component="img"
                                        src={`/${productFind.image_path}`}
                                        alt={productFind.name}
                                        sx={{
                                            width: { xs: "100%", md: 300 },
                                            height: 300,
                                            objectFit: "cover",
                                            borderRadius: 2,
                                            boxShadow: 2,
                                        }}
                                    />

                                    <Box sx={{ flex: 1 }}>
                                        <Typography variant="h4" fontWeight={700} gutterBottom>
                                            {productFind.name}
                                        </Typography>

                                        <Typography variant="body2" color="text.secondary" gutterBottom>
                                            Código: {productFind.code}
                                        </Typography>

                                        <Typography variant="body1" sx={{ mt: 2 }}>
                                            {productFind.product_lines?.description}
                                        </Typography>

                                        <Box sx={{ mt: 3 }}>
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
                                    </Box>
                                </Box>
                            </Box>
                        )}
                    </Typography>
                </Box>
            </Container>
        </>
    );
}