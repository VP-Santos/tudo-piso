import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Categories } from '@/types/interfaces';
import { prisma } from '@/lib/prisma';
import Link from 'next/link';

export default async function NavBar() {
  const categories: Categories[] = await prisma.categories.findMany();
  return (
    <Box sx={{ flexGrow: 1}}>
      <AppBar position="static" sx={{backgroundColor: '#535353' }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Link href={'/'}>
            <Button >Inicio</Button>
          </Link>

          {
            categories.map((category) => {
              return (
                <Link key={category.id} href={`/${category.name}`}>
                  <Button >{category.name}</Button>
                </Link>
              )
            })
          }
          <Link href={'/quem-somos'}>
            <Button >Quem somos</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
