import CardImageClient from "@/app/components/Client/CardImageClient";
import WhatsAppButton from "@/app/components/Client/WhatsappButton";
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
      product_lines: true,
      installations_performed: {
        include: {
          images_istallations: true
        }
      }
    }
  })

  console.log(productFind);
  

  if (!productFind) return <></>;

  return (
    <Box>
      <NavBar />
      <Container maxWidth="xl">
        <Paper elevation={8} style={{ borderRadius: 25 }}>
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
              <WhatsAppButton width={'100%'}
                message={`Olá, através do seu site quero agendar meu orçamento             
Gostei do piso:
${productFind.name}     
Código: ${productFind.code}                                
Linha: ${productFind.product_lines.name}`} />
            </Grid>
          </Grid>

          {productFind.installations_performed?.length > 0 && (
            <Box>
              <Typography
                variant="h5"
                textAlign={'center'}
                fontWeight={600}
                bgcolor={'#cfcfcf'}
                m={3}
                p={3}
                boxShadow={3}
                borderRadius={2}
              >
                Fotos de instalações
              </Typography>

              <Grid container spacing={3} p={3} mb={6}>
                {productFind.installations_performed.map((installation) => (
                  <Grid key={installation.id} size={{ xs: 12, sm: 6, md: 4 }}>
                    <CardImageClient image_path={`/${installation.image_path}`} />
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