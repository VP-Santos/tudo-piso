export const Theme = {
  colors: {
    primary: '#272727',
    primaryHover: '#000000',

    secondary: '#e0e0e0',
    secondaryLight: '#f5f5f5',

    background: {
      default: '#f5f5f5',
      paper: '#ffffff',
    },

    text: {
      primary: '#1f1f1f',
      secondary: '#555555',
      muted: '#888888',
      inverse: '#ffffff',
    },

    border: '#eeeeee',
  },

  typography: {
    fontFamily: `'Inter', 'Roboto', 'Helvetica', 'Arial', sans-serif`,

    h1: {
      fontSize: 40,
      fontWeight: 700,
    },
    h2: {
      fontSize: 32,
      fontWeight: 700,
    },
    h3: {
      fontSize: 28,
      fontWeight: 600,
    },
    h4: {
      fontSize: 24,
      fontWeight: 600,
    },
    h5: {
      fontSize: 20,
      fontWeight: 600,
    },
    h6: {
      fontSize: 18,
      fontWeight: 600,
    },

    body: {
      fontSize: 16,
      lineHeight: 1.6,
    },
    small: {
      fontSize: 14,
      lineHeight: 1.5,
    },
  },

  spacing: (multiplier: number) => `${multiplier * 8}px`,

  radius: {
    sm: '6px',
    md: '12px',
    lg: '16px',
    pill: '999px',
  },

  shadow: {
    sm: '0px 2px 6px rgba(0,0,0,0.05)',
    md: '0px 4px 12px rgba(0,0,0,0.08)',
    lg: '0px 8px 24px rgba(0,0,0,0.12)',
    xl: '0px 12px 32px rgba(0,0,0,0.16)',
  },

  transition: {
    default: 'all 0.3s ease',
    fast: 'all 0.2s ease',
  },

  zIndex: {
    navbar: 1000,
    modal: 1300,
    tooltip: 1500,
  },
};