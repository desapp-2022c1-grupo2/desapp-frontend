import React, {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'

import {ThemeProvider} from '@mui/material/styles'
import {theme} from './styles/muiStyles'
import './styles/styles.css'

import {HomePage, LoginPage} from "./pages";


createRoot(document.getElementById('root')!)
    .render(
        <StrictMode>
            <ThemeProvider theme={theme}>
               <LoginPage />
            </ThemeProvider>
        </StrictMode>
    )
