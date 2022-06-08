import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { ThemeProvider } from '@mui/material/styles'
import { theme } from './styles/muiStyles'
import './styles/styles.css'

import { LoginPage } from './pages'
import {LoginContainer, LoginLayout} from "./pages/Login/styles";
import {CustomTable} from "./components/Table/CustomTable"

createRoot(document.getElementById('root')!)
  .render(
    <StrictMode>
      <ThemeProvider theme={theme}>
        <LoginLayout>
            <LoginPage/>
            {/*<CustomTable label={"Trabajos practicos"}/>*/}
        </LoginLayout>
      </ThemeProvider>
    </StrictMode>
  )
