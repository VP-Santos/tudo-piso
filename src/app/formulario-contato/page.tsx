
import { Box, Button, Container, Grid, Paper } from "@mui/material";
import NavBar from "../components/Server/NavBar";

export default function FormularioPage() {

    return (
        <Box component={'main'}>
            <NavBar/>

            <Container maxWidth='xl'>
                <Paper elevation={5}>
                    <Grid container>
                        <Grid size={{xs: 12, md: 6}}>

                        </Grid>
                    </Grid>

                </Paper>
            </Container>
        </Box>

    )
}