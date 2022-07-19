import { createTheme, PaletteColorOptions } from '@mui/material/styles'
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

declare module '@mui/material/styles' {
  interface Palette extends unahurPaletteOptions {}
  interface PaletteOptions extends unahurPaletteOptions {}
}

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
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
}

export const theme = createTheme({
  palette: {
    ...unahurPalette,
    primary: unahurPalette.unahurGreen,
    secondary: unahurPalette.unahurCyan,
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '10px',
          fontSize: '1rem',
          fontWeight: 400,
          minHeight: '52px',
          minWidth: '192px',
          padding: '8px 16px',
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
      }
    },
  },
});

