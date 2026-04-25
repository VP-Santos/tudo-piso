import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from 'next/link';
import { prisma } from '@/lib/prisma';

const buttonStyle = {
  color: 'white',
  textTransform: 'none',
  fontWeight: 500,
};

export default async function NavBar() {
  const categories = await prisma.categories.findMany({
    orderBy: { id: 'asc' }
  });

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ bgcolor: '#535353' }}>
        <Toolbar sx={{ gap: 1 }}>
          
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            News
          </Typography>

          <Link href="/">
            <Button sx={buttonStyle}>Início</Button>
          </Link>

          {categories.map((category) => (
            <Link key={category.id} href={`/${category.slug}`}>
              <Button sx={buttonStyle}>
                {category.name}
              </Button>
            </Link>
          ))}

          <Link href="/quem-somos">
            <Button sx={buttonStyle}>
              Quem somos
            </Button>
          </Link>

        </Toolbar>
      </AppBar>
    </Box>
  );
}