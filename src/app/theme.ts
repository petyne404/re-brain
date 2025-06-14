import { createTheme, alpha, Shadows } from '@mui/material/styles';

declare module '@mui/material/Paper' {
  interface PaperPropsVariantOverrides {
    highlighted: true;
  }
}
declare module '@mui/material/styles' {
  interface PaletteColor {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
  }
}
const defaultTheme = createTheme();

const customShadows: Shadows = [...defaultTheme.shadows];

export const brand = {
  50: 'hsl(210, 100%, 95%)',
  100: 'hsl(210, 100%, 92%)',
  200: 'hsl(210, 100%, 80%)',
  300: 'hsl(210, 100%, 65%)',
  400: 'hsl(210, 98%, 48%)',
  500: 'hsl(210, 98%, 42%)',
  600: 'hsl(210, 98%, 55%)',
  700: 'hsl(210, 100%, 35%)',
  800: 'hsl(210, 100%, 16%)',
  900: 'hsl(210, 100%, 21%)',
};

export const gray = {
  50: 'hsl(0, 0%, 98%)',
  100: 'hsl(0, 0%, 96%)',
  200: 'hsl(0, 0%, 90%)',
  300: 'hsl(0, 0%, 83%)',
  400: 'hsl(0, 0%, 64%)',
  500: 'hsl(0, 0%, 45%)',
  600: 'hsl(0, 0%, 32%)',
  700: 'hsl(0, 0%, 25%)',
  800: 'hsl(225, 7%, 11%)',
  900: 'hsl(0, 0%, 9%)',
};

export const green = {
  50: 'hsl(120, 80%, 98%)',
  100: 'hsl(120, 75%, 94%)',
  200: 'hsl(120, 75%, 87%)',
  300: 'hsl(120, 61%, 77%)',
  400: 'hsl(120, 44%, 53%)',
  500: 'hsl(120, 59%, 30%)',
  600: 'hsl(120, 70%, 25%)',
  700: 'hsl(120, 75%, 16%)',
  800: 'hsl(120, 84%, 10%)',
  900: 'hsl(120, 87%, 6%)',
};

export const orange = {
  50: 'hsl(45, 100%, 97%)',
  100: 'hsl(45, 92%, 90%)',
  200: 'hsl(45, 94%, 80%)',
  300: 'hsl(45, 90%, 65%)',
  400: 'hsl(45, 90%, 40%)',
  500: 'hsl(45, 90%, 35%)',
  600: 'hsl(45, 91%, 25%)',
  700: 'hsl(45, 94%, 20%)',
  800: 'hsl(45, 95%, 16%)',
  900: 'hsl(45, 93%, 12%)',
};

export const red = {
  50: 'hsl(0, 100%, 97%)',
  100: 'hsl(0, 92%, 90%)',
  200: 'hsl(0, 94%, 80%)',
  300: 'hsl(0, 90%, 65%)',
  400: 'hsl(0, 90%, 40%)',
  500: 'hsl(0, 90%, 30%)',
  600: 'hsl(0, 91%, 25%)',
  700: 'hsl(0, 94%, 18%)',
  800: 'hsl(0, 95%, 12%)',
  900: 'hsl(0, 93%, 6%)',
};

export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      light: gray[300],
      main: gray[600],
      dark: gray[900],
      contrastText: gray[100],
    },
    info: {
      light: gray[300],
      main: gray[400],
      dark: gray[600],
      contrastText: gray[50],
    },
    warning: {
      light: gray[300],
      main: gray[400],
      dark: gray[600],
    },
    error: {
      light: gray[300],
      main: gray[400],
      dark: gray[600],
    },
    success: {
      light: gray[300],
      main: gray[400],
      dark: gray[600],
    },
    grey: {
      ...gray,
    },
    divider: alpha(gray[700], 0.6),
    background: {
      default: gray[900],
      paper: 'hsl(0, 0%, 7%)',
    },
    text: {
      primary: 'hsl(0, 0%, 100%)',
      secondary: gray[400],
    },
    action: {
      hover: gray[400],
      selected: alpha(gray[200], 0.3),
    },
  },
  typography: {
    fontFamily: [
      '"JetBrains Mono"',
      'monospace',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    h1: {
      fontSize: defaultTheme.typography.pxToRem(48),
      fontWeight: 700,
      lineHeight: 1.1,
      letterSpacing: '-0.02em',
    },
    h2: {
      fontSize: defaultTheme.typography.pxToRem(36),
      fontWeight: 700,
      lineHeight: 1.2,
      letterSpacing: '-0.01em',
    },
    h3: {
      fontSize: defaultTheme.typography.pxToRem(30),
      fontWeight: 600,
      lineHeight: 1.3,
    },
    h4: {
      fontSize: defaultTheme.typography.pxToRem(24),
      fontWeight: 600,
      lineHeight: 1.4,
    },
    h5: {
      fontSize: defaultTheme.typography.pxToRem(20),
      fontWeight: 600,
      lineHeight: 1.5,
    },
    h6: {
      fontSize: defaultTheme.typography.pxToRem(18),
      fontWeight: 600,
      lineHeight: 1.5,
    },
    subtitle1: {
      fontSize: defaultTheme.typography.pxToRem(18),
      fontWeight: 500,
      lineHeight: 1.5,
    },
    subtitle2: {
      fontSize: defaultTheme.typography.pxToRem(14),
      fontWeight: 500,
      lineHeight: 1.5,
    },
    body1: {
      fontSize: defaultTheme.typography.pxToRem(16),
      lineHeight: 1.6,
    },
    body2: {
      fontSize: defaultTheme.typography.pxToRem(14),
      lineHeight: 1.6,
    },
    caption: {
      fontSize: defaultTheme.typography.pxToRem(12),
      lineHeight: 1.5,
    },
  },
  shape: {
    borderRadius: 8,
  },
  shadows: customShadows,
}); 