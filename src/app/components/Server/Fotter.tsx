import { Typography } from '@mui/material';
import Box from '@mui/material/Box';


export default async function Footer() {

  return (
    <>
      <Box bgcolor={'white'} display={'flex'} justifyContent={'space-between'} height={200}>
        <Box width={'50%'}
          sx={{ 
            backgroundImage: "url('/assets/footer-logo.png')",
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
          }}
        ></Box>
        <Box
          width={'50%'}
          display="flex"
          justifyContent="center"
          flexDirection={'column'}
          alignItems="center"
        >
          <Typography>Contatos</Typography>
          <Typography>(11) 94837--6679</Typography>
          <Typography>(11) 94837--6679</Typography>
        </Box>

      </Box>
    </>
  );
}
