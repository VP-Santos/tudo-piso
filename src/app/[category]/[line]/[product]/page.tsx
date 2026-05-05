import CardImageClient from "@/app/components/Client/CardImageClient";
import WhatsAppButton from "@/app/components/Client/WhatsappButton";
import Footer from "@/app/components/Server/Fotter";
import Image from "@/app/components/Server/Image";
import NavBar from "@/app/components/Server/NavBar";
import NotFound from "@/app/not-found";
import { prisma } from "@/lib/prisma";
import { 
  productMainPaper,
  paperInformation,
  typoTitle,
  typoDescription,
  sectionHighlightHeader 
} from "@/styles/components/PaperStyles";
import { Container, Typography, Box, Paper, Grid, Divider } from "@mui/material";

export default async function ProductPage({
  params,
}: {
  params: { product: string };
}) {
  const { product: productSlug } = await params;

  const productFind = await prisma.products.findFirst({
    where: { slug: productSlug }, 
    include: {
      product_lines: true,
      installations_performed: {
        include: { images_istallations: true }
      }
    }
  });

  if (!productFind) return <NotFound/>;

  return (
    <Box component="main">
      <NavBar />
      <Container maxWidth="xl">
        <Paper sx={productMainPaper}>

          <Grid container spacing={6}>
            <Grid size={{ xs: 12, sm: 6 }}>
              <Image
                path={`/${productFind.image_path}`}
                name={productFind.name}
              />
            </Grid>

            <Grid size={{ xs: 12, sm: 6 }} alignContent={'center'}>
              <Box>
                <Typography variant="h4" sx={typoTitle}>
                  {productFind.name}
                </Typography>

                <Typography sx={{ ...typoDescription, mt: 1, mb: 3 }}>
                  Código da linha: {productFind.code}
                </Typography>

                <Divider sx={{ mb: 3 }} />

                <Typography variant="subtitle1" fontWeight={700} gutterBottom>
                  Detalhes da Linha
                </Typography>
                
                <Typography variant="body2">
                  Linha: {productFind.product_lines?.name}
                </Typography>
                
                <Typography variant="body2" sx={{ mb: 4 }}>
                  Dimensões: {productFind.product_lines?.width}cm x {productFind.product_lines?.length}m
                </Typography>
              </Box>
              <Box display={'flex'} justifyContent={'center'}>
              <WhatsAppButton
                message={`Olá! Vi no site o piso ${productFind.name} (Código: ${productFind.code}) da linha ${productFind.product_lines?.name} e gostaria de um orçamento.`}
                />
                </Box>
            </Grid>
          </Grid>

          {productFind.installations_performed?.length > 0 && (
            <Box sx={{ mt: 6 }}>
              <Typography variant="h5" sx={sectionHighlightHeader}>
                Fotos de Instalações Reais
              </Typography>

              <Grid container spacing={3} p={1}>
                {productFind.installations_performed.map((inst) => (
                  <Grid key={inst.id} size={{ xs: 12, sm: 6, md: 4 }}>
                    <CardImageClient
                      image_path={`/${inst.image_path}`}
                      collectImage={inst.images_istallations}
                    />
                  </Grid>
                ))}
              </Grid>
            </Box>
          )}
        </Paper>
      </Container>
      <Footer />
    </Box>
  );
}