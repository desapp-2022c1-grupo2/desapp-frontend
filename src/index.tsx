import React, { StrictMode } from 'react'
import { Provider as StoreProvider } from 'react-redux'
import { createRoot } from 'react-dom/client'

import { ThemeProvider } from '@mui/material/styles'
import { Router } from './router'
import { store } from './store'
import { theme } from './styles/muiStyles'
import './styles/styles.css'


createRoot(document.getElementById('root')!)
  .render(
    <StrictMode>
      <ThemeProvider theme={theme}>
      <StoreProvider store={store}>
          <Router/>
      </StoreProvider>
      </ThemeProvider>
    </StrictMode>
  )
