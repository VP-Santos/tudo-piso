'use client';

import { Box, Button, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';

export default function NotFoundContent() {
  const router = useRouter();

  return (
    <main
      style={{
        position: 'relative',
        height: '100dvh',
        width: '100vw',
        overflow: 'hidden',
      }}
    >
      <img
        src="/assets/not-found.png"
        alt="404"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      />

      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(0,0,0,0.4)',
        }}
      />

      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          textAlign: 'center',
          color: '#fff',
        }}
      ><Box
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="center"
        gap={2}
        mb={4}
      >
          <Typography
            variant="h1"
            fontWeight={600}
            sx={{ lineHeight: 1 }}
          >
            404
          </Typography>

          <Typography
            variant="body1"
            fontWeight={600}
            sx={{ opacity: 0.9 }}
          >
            Página não encontrada
          </Typography>
        </Box>

        <Button
          onClick={() => router.push('/')}
          variant="contained"
          sx={{
            borderRadius: 20,
            backgroundColor: '#000',
            transition: 'all 0.25s ease',

            '&:hover': {
              backgroundColor: '#333',
              transform: 'scale(1.05)',
              boxShadow: '20px 20px 20px 20px rgba(0,0,0,0.4)',
            },
          }}
        >
          Voltar para o início
        </Button>
      </div>
    </main >
  );
}