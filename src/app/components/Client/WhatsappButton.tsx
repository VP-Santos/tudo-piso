"use client";

import { Button } from "@mui/material";

interface Props {
  width?: string | number
  message?: string
}

export default function WhatsAppButton({ width = '50%', message = "Olá! Vim pelo site do vitor, quero agendar meu orçamento!." }: Props) {
  
  const handleClick = () => {
    const numero = process.env.NEXT_PUBLIC_PHONE_NUMBER;
    const baseUrl = process.env.NEXT_PUBLIC_API_WHATSAPP;

    const url = `${baseUrl}/send?phone=${numero}&text=${encodeURIComponent(message)}`;

    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <Button
      variant="contained"
      size="medium"
      sx={{
        marginTop: 3,
        width: width,
        borderRadius: 999,
        backgroundColor: '#272727',
        textTransform: 'none',
        fontWeight: 600,
        fontSize: 15,
        py: 1.2,
        transition: 'all 0.3s ease',
        '&:hover': {
          backgroundColor: '#000',
          transform: 'translateY(-2px)',
          boxShadow: '0 6px 16px rgba(0,0,0,0.2)',
        },
      }}
      onClick={handleClick}
    >
      Solicite sua visita técnica ainda hoje!
    </Button>
  );
}