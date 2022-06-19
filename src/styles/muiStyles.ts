import { createTheme } from '@mui/material/styles'
import {customColors} from "./customColors";

export const theme = createTheme({
  palette: {
    error: { main: '#E74924' },
    info: { main: '#0089CD' },
    primary:  customColors.unahurGreen,
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

