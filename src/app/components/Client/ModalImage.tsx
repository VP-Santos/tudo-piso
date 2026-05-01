'use client'

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import DisplayImages from './DisplayImagesClient';
import DisplayImagesClient from './DisplayImagesClient';
import { Paper } from '@mui/material';

interface collectImage {
  id: bigint;
  installations_performed_id: bigint;
  image_path: string;
}
interface Props {
  open: boolean;
  setOpen: (open: boolean) => void;
  collectImage: collectImage[]
}

export default function ModalImage({ open, setOpen, collectImage }: Props) {
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const images = collectImage.map((img) => `${img.image_path}`);

  console.log(images[3]);

  //TODO refatorar para arquivos de theme
  return (
    <Box>
      <Button
        fullWidth
        onClick={handleOpen}
        variant="contained"
        size="medium"
        sx={{
          mt: { xs: 2, md: 3 },
          borderRadius: 999,
          backgroundColor: '#272727',
          textTransform: 'none',
          fontWeight: 600,
          fontSize: { xs: 14, md: 15 },
          py: { xs: 1, md: 1.2 },
          transition: 'all 0.3s ease',
          '&:hover': {
            backgroundColor: '#000',
            transform: 'translateY(-2px)',
            boxShadow: '0 6px 16px rgba(0,0,0,0.2)',
          },
        }}
      >
        Ver Imagem
      </Button>

      <Modal
        open={open}
        onClose={handleClose}
        disableScrollLock
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      ><Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: { xs: '80%', md: 800 },
          height: 400, // 👈 ESSENCIAL
          bgcolor: 'background.paper',
          borderRadius: 2,
          boxShadow: 24,
          p: { xs: 2, md: 4 },
        }}
      >
          <DisplayImagesClient images={images} />
        </Box>
      </Modal>
    </Box>
  );
}