'use client'

import { Box, Paper, IconButton } from "@mui/material";
import { useEffect, useState } from "react";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { buttomDisplayLeft, buttomDisplayRight } from "@/styles/components/ButtomStyles";
import { Theme } from "@/styles/Theme";

interface Props {
  images: string[]
}

export default function DisplayImagesClient({ images }: Props) {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    if (images.length <= 1) return;
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <Box
      sx={{
        border: `3px solid ${Theme.colors.background.paper}`,
        borderRadius: Theme.radius.md,
        position: 'relative',
        overflow: 'hidden',
        width: "100%",
        height: "100%",
        minHeight: { xs: 300, md: 400 },
        display: 'flex',
        boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
      }}
    >
      <Paper
        elevation={0}
        sx={{
          width: '100%',
          height: '100%',
          backgroundImage: `url(${images[current]})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transition: 'background-image 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
          borderRadius: 0,
        }}
      />


      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(to bottom, transparent 80%, rgba(0,0,0,0.2))',
          pointerEvents: 'none',
        }}
      />

      {images.length > 1 && (
        <>
          <IconButton
            onClick={prevSlide}
            sx={buttomDisplayLeft}
          >
            <ArrowBackIcon />
          </IconButton>

          <IconButton
            onClick={nextSlide}
            sx={buttomDisplayRight}
          >
            <ArrowForwardIcon />
          </IconButton>
        </>
      )}

    </Box>
  );
}