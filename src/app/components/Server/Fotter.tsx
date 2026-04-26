import { Typography } from '@mui/material';
import Box from '@mui/material/Box';

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: '#fff',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        px: 6,
        py: 4,
        borderTop: '1px solid #e0e0e0',
      }}
    >
      <Box
        sx={{
          width: '40%',
          height: 120,
          backgroundImage: "url('/assets/footer-logo.png')",
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'left center',
        }}
      />

      <Box
        sx={{
          width: '60%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
          textAlign: 'right',
        }}
      >
        <Typography variant="subtitle1" fontWeight={600} gutterBottom>
          Contato
        </Typography>

        <Typography variant="body2" color="text.secondary">
          Atendimento via telefone e WhatsApp
        </Typography>

        <Typography variant="body1" fontWeight={500}>
          (11) 94837-6679
        </Typography>

        <Typography variant="body1" fontWeight={500}>
          (11) 94837-6679
        </Typography>
      </Box>
    </Box>
  );
}