import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from 'next/link';
import { prisma } from '@/lib/prisma';

export default async function ButtonAppBar() {
  const categoryMap = await prisma.categories.findMany();

  return (
    <Box sx={{ flexGrow: 1 }} padding={2}>
      <AppBar
        position="static"
        style={{ backgroundColor: '#3b3b3bff', padding: 8 }}
        elevation={6}
      >
        <Toolbar>

          <Box
            style={{
              width: 200,
              height: 70,
              backgroundImage: "url('/assets/logo-navbar.png')",
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              backgroundSize: 'contain',
            }}
          />

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Button color="inherit">
              Faça seu orçamento
            </Button>
          </Typography>

          <Link href="/" style={{ color: 'white', marginRight: 12, textDecoration: 'none' }}>
            Inicio
          </Link>

          {categoryMap?.map((category) => (
            <Link
              key={category.id}
              href={`${category.name}`}
              style={{ color: 'white', marginRight: 12, textDecoration: 'none' }}
            >
              {category.name}
            </Link>
          ))}

          <Link href="/fabricantes" style={{ color: 'white', marginRight: 12, textDecoration: 'none' }}>
            Fabricantes
          </Link>

          <Link href="/quem-somos" style={{ color: 'white', marginRight: 12, textDecoration: 'none' }}
          >
            quem somos
          </Link>

          <Link href="/contato" style={{ color: 'white', marginRight: 12, textDecoration: 'none' }}
          >
            Contato
          </Link>

        </Toolbar>
      </AppBar>
    </Box>
  );
}