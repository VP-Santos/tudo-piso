'use client'

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useRouter } from 'next/navigation';


export default function ButtonAppBar() {

  const router = useRouter();

  const handleClick = (path: string) => {
    router.push(path);
  };

  return (
    <Box sx={{ flexGrow: 1 }} padding={2}>
      <AppBar position="static" style={{ backgroundColor: '#3b3b3bff', padding: 8}} elevation={6}>
        <Toolbar>  
          <Box
            style={{
              width: 200,
              height: 70,
              backgroundImage: "url('/assets/logo-navbar.png')",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "contain"
            }}
          ></Box>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Button color="inherit">Faça seu orçamento</Button>
          </Typography>

          <Button color="inherit" onClick={() => handleClick('/')}>Inicio</Button>
          {/* <Button color="inherit" onClick={() => handleClick('/quem-somos')}>Quem somos</Button> */}
          <Button color="inherit" onClick={() => handleClick('/laminado')}>Pisos Laminados</Button>
          <Button color="inherit" onClick={() => handleClick('/vinilico')}>Pisos Vinílicos</Button>
          <Button color="inherit" onClick={() => handleClick('/acabamento')}>Acabamento</Button>
          <Button color="inherit" onClick={() => handleClick('/contato')}>Contatos</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}