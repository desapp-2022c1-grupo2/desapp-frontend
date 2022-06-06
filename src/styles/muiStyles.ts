import { createTheme } from '@mui/material/styles'

export const theme = createTheme({
  palette: {
    error: { main: '#E74924' },
    info: { main: '#0089CD' },
    primary: { main: '#06A3C9' },
    secondary: { main: '#00A79F' },
    success: { main: '#56A42C' },
    warning: { main: '#F08100' },

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
    MuiAppBar: {
      styleOverrides:{
        root: {
          borderRadius: '8px',
          minHeight: '48px',
          maxHeight: '320px',
          backgroundColor: '#00A79F',
          position: "inherit"
        }
      }
    }
  },
});

