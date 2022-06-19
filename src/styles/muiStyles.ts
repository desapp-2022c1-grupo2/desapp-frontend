import { createTheme } from '@mui/material/styles'

export const theme = createTheme({
  palette: {
    error: { main: '#E74924' },
    info: { main: '#0089CD' },
    primary: { main: '#06A3C9' },
    secondary: { main: '#00A79F' },
    success: { main: '#56A42C' },
    warning: { main: '#F08100' },
    wireframeBlack: {main: '#575756'},
    wireframeWhite: {main: '#FAFAFA'},
    wireframeStrongGrey: {main: '#CECECE'},
    wireframeSoftGrey: {main: '#F1F1F1'},
    fullWhite: {main: '#FFFFFF'},
    unahurGreen: {main: '#56A42C'},
    unahurCyan: {main: '#06A3C9'},
    unahurRed: {main: '#E74924'},
    unahurBlue: {main: '#0089CD'},
    unahurRedAlt: {main: '#EA4F51'},
    unahurOrange: {main: '#F08100'},
    unahurGreenAlt: {main: '#00A79F'},
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
    MuiAppBar:{
      styleOverrides: {
        root: {
            backgroundColor: 'secondary',
        }
      }
    }
  },
});

