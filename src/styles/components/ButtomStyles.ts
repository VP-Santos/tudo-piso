import { Theme } from "@/styles/Theme"

export const buttom = {
  marginTop: 3,
  width: '100%',
  borderRadius: 999,
  backgroundColor: Theme.colors.primary,
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
}
export const buttomWhatsapp = {
  ...buttom,
  width: { xs: '100%', md: '50%' }
}

const buttomDisplayStyle = {
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  backgroundColor: 'rgba(0, 0, 0, 0.2)',
  backdropFilter: 'blur(4px)',
  color: '#fff',
  '&:hover': {
    backgroundColor: 'rgba(36, 36, 36, 0.4)',
  },
}
export const buttomDisplayLeft = {
  ...buttomDisplayStyle,
  left: 16,
}
export const buttomDisplayRight = {
  ...buttomDisplayStyle,
  right: 16,
}

