import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { useRouter } from 'next/navigation';

interface props {
  nome: string,
  image: string,
  maxWidth?: number,
  height?: number,
}

export default function AreaCard({ nome, image, maxWidth = 380, height = 260 }: props) {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/${nome}`);
  };
  return (
    <Card sx={{ maxWidth: maxWidth }}>
      <CardActionArea onClick={handleClick}>
        <CardMedia
          component="img"
          height={height}
          image={image}
          alt="laminado"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" align='center'>
            {nome}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
