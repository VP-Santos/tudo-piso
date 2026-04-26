import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import Box from "@mui/material/Box";
import Link from "next/link";

interface Props {
  name: string;
  image: string;
  width?: number | string;
  height?: number;
  link: string;
}

export default function AreaCard({
  name,
  image,
  width = '100%',
  height = 220,
  link
}: Props) {
  return (
    <Link href={link} style={{textDecoration: 'none'}}>
      <Card
        elevation={3}
        sx={{
          width,
          borderRadius: 3,
          overflow: "hidden",
          transition: "0.25s ease",
          "&:hover": {
            transform: "translateY(-6px)",
            boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
          },
        }}
      >
        <CardActionArea>
          <Box sx={{ position: "relative" }}>
            <CardMedia
              component="img"
              height={height}
              image={image}
              alt={name}
              sx={{
                objectFit: "cover",
                transition: "0.3s ease",
                "&:hover": {
                  transform: "scale(1.03)",
                },
              }}
            />

            {/* Overlay leve para dar contraste */}
            <Box
              sx={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.35), transparent 60%)",
              }}
            />
          </Box>

          <CardContent
            sx={{
              textAlign: "center",
              py: 2,
            }}
          >
            <Typography
              variant="subtitle1"
              fontWeight={600}
              sx={{
                lineHeight: 1.2,
              }}
            >
              {name}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
}