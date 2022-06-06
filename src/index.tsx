import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { ThemeProvider } from '@mui/material/styles'
import { theme } from './styles/muiStyles'
import './styles/styles.css'

import { LoginPage } from './pages'
import {NavBar} from "./components/NavBar";


createRoot(document.getElementById('root')!)
  .render(
    <StrictMode>
      <ThemeProvider theme={theme}>
          <LoginPage />
      </ThemeProvider>
    </StrictMode>
  )
