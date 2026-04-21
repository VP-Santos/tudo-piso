

import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

interface Props {
  name: string;
  image: string;
  width?: number;
  height?: number;
}

export default function AreaCard({ name, image, width = 350, height = 260, 
}: Props) {
  return (
    <Card sx={{ width: width }}>
      <CardActionArea 
      >
        <CardMedia
          component="img"
          height={height}
          image={image}
          alt={image}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div" align="center">
            {name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}