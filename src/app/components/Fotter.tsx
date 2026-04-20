import { Box, Button, Typography } from "@mui/material"
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import CallIcon from '@mui/icons-material/Call';
import MapIcon from '@mui/icons-material/Map';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function MyFooter() {
    return (

        <Box id="footer" display="flex" flexDirection={{ xs: 'column', md: 'row' }} alignItems='center' justifyContent="space-between" px={6} py={4} bgcolor="#f5f5f5">
            <Box
                sx={{
                    width: 400,
                    height: 200,
                    backgroundImage: "url('/assets/footer-logo.png')",
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    backgroundSize: 'contain',
                    mb: { xs: 4, md: 0 },
                }}
            >
            <Typography
            sx={{
                
            }}
            >Não colocamos um piso, nós realizamos um sonho!</Typography>
            </Box>
            <Box>
                <Typography variant="h6" gutterBottom>
                    Contatos
                </Typography>
                <Box display="flex" alignItems="center" gap={1}>
                    <WhatsAppIcon color="success" />
                    <Typography>11 94837-6679</Typography>
                </Box>
                <Box display="flex" alignItems="center" gap={1}>
                    <CallIcon color="primary" />
                    <Typography>11 94837-6679</Typography>
                </Box>
            </Box>

            <Box>
                <Typography variant="h6" gutterBottom>
                    Localização
                </Typography>
                <Box display="flex" alignItems="center" gap={1}>
                    <LocationOnIcon color="error" />
                    <Typography>
                        R. Padre Senepa, 64 - Vila Monumento, São Paulo - SP, 04264-100
                    </Typography>
                </Box>
                <Button startIcon={<MapIcon />} sx={{ mt: 1 }}>
                    Ver no mapa
                </Button>
            </Box>
        </Box>
    )
}