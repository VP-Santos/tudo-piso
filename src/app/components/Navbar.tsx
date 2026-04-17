'use client'

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useRouter } from 'next/navigation';


export default function ButtonAppBar() {

  const router = useRouter();

  const handleClick = (path: string) => {
    router.push(path);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ backgroundColor: '#3b3b3bff' }} elevation={6}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Box
            style={{
              width: 200,
              height: 40,
              backgroundImage: "url('/assets/logo.png')",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "contain"
            }}
          ></Box>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Button color="inherit">Faça seu orçamento</Button>
          </Typography>

          <Button color="inherit" onClick={() => handleClick('/')}>Home</Button>
          <Button color="inherit" onClick={() => handleClick('/quem-somos')}>Quem somos</Button>
          <Button color="inherit" onClick={() => handleClick('/laminado')}>Pisos Laminados</Button>
          <Button color="inherit" onClick={() => handleClick('/vinilico')}>Pisos Vinílicos</Button>
          <Button color="inherit" onClick={() => handleClick('/rodape')}>Rodapé</Button>
          <Button color="inherit" onClick={() => handleClick('/contato')}>Contatos</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}