import { createTheme, PaletteColorOptions } from '@mui/material/styles'
import { devices } from '@src/util/breakpoints';
import { unahurPalette } from "./unahurPalette"

interface unahurPaletteOptions {
  unahurBlack: PaletteColorOptions,
  unahurBlue: PaletteColorOptions,
  unahurCyan: PaletteColorOptions,
  unahurGreen: PaletteColorOptions,
  unahurGreenAlt: PaletteColorOptions,
  unahurGrey: PaletteColorOptions,
  unahurOrange: PaletteColorOptions,
  unahurRed: PaletteColorOptions,
  unahurRedAlt: PaletteColorOptions,
  unahurSoftGrey: PaletteColorOptions,
  unahurSoftWhite: PaletteColorOptions,
  unahurWhite: PaletteColorOptions,
}

interface ColorOverrides {
  unahurBlack: true,
  unahurBlue: true,
  unahurCyan: true,
  unahurGreen: true,
  unahurGreenAlt: true,
  unahurGrey: true,
  unahurOrange: true,
  unahurRed: true,
  unahurRedAlt: true,
  unahurSoftGrey: true,
  unahurSoftWhite: true,
  unahurWhite: true,
}

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xs: false;
    sm: true;
    md: false;
    lg: false;
    xl: false;
    mobile: true;
    tablet: true;
    laptop: true;
    desktop: true;
  }
}

declare module '@mui/material/styles' {
  interface Palette extends unahurPaletteOptions {}
  interface PaletteOptions extends unahurPaletteOptions {}
}

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides extends ColorOverrides {}
}

declare module '@mui/material/Chip' {
  interface ChipPropsColorOverrides extends ColorOverrides {}
}

declare module '@mui/material/IconButton' {
  interface IconButtonPropsColorOverrides extends ColorOverrides {}
}

export const theme = createTheme({
  palette: {
    ...unahurPalette,
    primary: unahurPalette.unahurGreen,
    secondary: unahurPalette.unahurCyan,
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
  breakpoints:{
    values: {
      sm: 425,
      mobile: 425,
      tablet: 768,
      laptop: 1024,
      desktop: 1200,
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '10px',
          fontSize: '0.875rem',
          fontWeight: 400,
          minHeight: '16px',
          minWidth: '48px',
          padding: '16px 32px',
          textTransform: 'none',
          margin: '8px',
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: '10px',
          minWidth: '320px',
          minHeight: '48px',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: '12px',
          //padding: '4px',
        },
      },
    }
  },
});

