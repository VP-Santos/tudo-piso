

import { Box, Container, Grid, Typography } from "@mui/material";
import Navbar from '../components/Navbar';
import AreaCard from "../components/Cards";
import MyFooter from "../components/Fotter";
import TitleProduct from "../components/TitleProduct";
import { prisma } from "@/lib/prisma";


export default async function Produto() {
    const categoria = await prisma.categoria.findMany({
        include: {
            fabricante: true
        }
    });


    return (
        <>
            {/* <Navbar></Navbar>
            <Container style={{ maxWidth: '100%' }}>
                {categoria.map((item, index) => (
                    <Box key={index} mb={2}>
                        <Typography variant="h6">{item.nome}</Typography>
                        <Typography variant="body2">Fabricante: {item.fabricante.nome}</Typography>
                    </Box>
                ))}
                <TitleProduct></TitleProduct> */}
                {/* <Box py={5}>
                    <Grid container spacing={3} justifyContent="center">
                        <Grid item xs={12} sm={6} md={4}>
                            <AreaCard nome="laminado" image="assets/Categoria/laminado.png" maxWidth={180} height={120} />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <AreaCard nome="vinilico" image="assets/Categoria/vinilico.png" maxWidth={180} height={120} />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <AreaCard nome="rodape" image="assets/Categoria/rodape.png" maxWidth={180} height={120} />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <AreaCard nome="rodape" image="assets/Categoria/rodape.png" maxWidth={180} height={120} />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <AreaCard nome="rodape" image="assets/Categoria/rodape.png" maxWidth={180} height={120} />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <AreaCard nome="rodape" image="assets/Categoria/rodape.png" maxWidth={180} height={120} />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <AreaCard nome="rodape" image="assets/Categoria/rodape.png" maxWidth={180} height={120} />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <AreaCard nome="rodape" image="assets/Categoria/rodape.png" maxWidth={180} height={120} />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <AreaCard nome="rodape" image="assets/Categoria/rodape.png" maxWidth={180} height={120} />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <AreaCard nome="rodape" image="assets/Categoria/rodape.png" maxWidth={180} height={120} />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <AreaCard nome="rodape" image="assets/Categoria/rodape.png" maxWidth={180} height={120} />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <AreaCard nome="rodape" image="assets/Categoria/rodape.png" maxWidth={180} height={120} />
                        </Grid>
                    </Grid>
                </Box> */}
            {/* </Container>
            <MyFooter></MyFooter> */}
        </>

    )

}