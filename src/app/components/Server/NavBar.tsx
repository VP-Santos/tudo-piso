import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from 'next/link';
import { prisma } from '@/lib/prisma';

const navButtonStyle = {
  color: '#eaeaea',
  textTransform: 'none',
  fontWeight: 500,
  fontSize: 14.5,
  px: 2,
  borderRadius: 2,
  transition: 'all 0.25s ease',
  '&:hover': {
    backgroundColor: 'rgba(255,255,255,0.08)',
    color: '#fff',
  },
};

export default async function NavBar() {
  const categories = await prisma.categories.findMany({
    orderBy: { id: 'asc' }
  });

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        background: 'rgba(20,20,20,0.75)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(255,255,255,0.08)',
      }}
    >
      <Toolbar
        sx={{
          maxWidth: '1200px',
          width: '100%',
          mx: 'auto',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontWeight: 700,
            letterSpacing: 1,
            color: '#fff',
          }}
        >
          Tudo Piso
        </Typography>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
          <Link href="/" style={{ textDecoration: 'none' }}>
            <Button sx={navButtonStyle}>Início</Button>
          </Link>

          {categories.map((category) => (
            <Link key={category.id} href={`/${category.slug}`} style={{ textDecoration: 'none' }}>
              <Button sx={navButtonStyle}>
                {category.name}
              </Button>
            </Link>
          ))}

          <Link href="/quem-somos" style={{ textDecoration: 'none' }}>
            <Button
              variant="contained"
              sx={{
                ml: 1,
                textTransform: 'none',
                fontWeight: 600,
                borderRadius: 999,
                px: 2.5,
                background: 'linear-gradient(135deg, #6d6d6d, #2b2b2b)',
                boxShadow: '0 4px 14px rgba(0,0,0,0.3)',
                '&:hover': {
                  background: 'linear-gradient(135deg, #7a7a7a, #000)',
                },
              }}
            >
              Quem somos
            </Button>
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
}