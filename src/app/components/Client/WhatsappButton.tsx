"use client";

import { buttomWhatsapp } from "@/styles/components/ButtomStyles";
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
      sx={buttomWhatsapp}
      onClick={handleClick}
    >
      Solicite sua visita!
    </Button>
  );
}