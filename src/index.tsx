import React, { StrictMode } from 'react'
import { Provider as StoreProvider } from 'react-redux'
import { createRoot } from 'react-dom/client'
import { Router } from '@router'
import { store } from '@store'
import { theme, ThemeProvider } from './styles'

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
