'use client'

import { Box, Paper, IconButton } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

interface Props {
  images : string[]
}

export default function DisplayImagesClient({images} : Props) {

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
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <Box
      sx={{
        position: 'relative',
        borderRadius: 3,
        overflow: 'hidden',
        width: "100%"
      }}
    >
      <Paper
        elevation={6}
        sx={{
          width: '100%',
          height: 300,
          backgroundImage: `url(${images[current]})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transition: 'background-image 0.5s ease-in-out',
          borderRadius: 3,
        }}
      />

      <IconButton
        onClick={prevSlide}
        sx={{
          position: 'absolute',
          top: '50%',
          left: 12,
          transform: 'translateY(-50%)',
          backgroundColor: 'rgba(0,0,0,0.4)',
          color: '#fff',
          '&:hover': {
            backgroundColor: 'rgba(0,0,0,0.7)',
          },
        }}
      >
        <ArrowBackIcon />
      </IconButton>

      <IconButton
        onClick={nextSlide}
        sx={{
          position: 'absolute',
          top: '50%',
          right: 12,
          transform: 'translateY(-50%)',
          backgroundColor: 'rgba(0,0,0,0.4)',
          color: '#fff',
          '&:hover': {
            backgroundColor: 'rgba(0,0,0,0.7)',
          },
        }}
      >
        <ArrowForwardIcon />
      </IconButton>

      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          py: 1,
          backgroundColor: 'rgba(0,0,0,0.6)',
          color: '#fff',
          fontSize: 14,
        }}
      >
        {
          images.map((_, index) => {
            return (
              <Box
                key={index}
                onClick={() => setCurrent(index)}
                sx={{
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  mx: 0.5,
                  cursor: 'pointer',
                  backgroundColor:
                    index === current ? 'white' : 'rgba(255,255,255,0.4)',
                  transition: '0.3s',
                }}
              />
            );
          })
        }
      </Box>
    </Box>
  );
}