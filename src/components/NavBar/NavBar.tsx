import * as React from 'react';
import AppBar, { AppBarProps } from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export const NavBar = ({...props }: AppBarProps ) => {
    return (
        <Box sx={{ flexGrow: 1 }}>
        <AppBar className={ props.className }>
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Diseño Industrial
                </Typography>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Usuarios
                </Typography>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Trabajos Practicos
                </Typography>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Mi cuenta
                </Typography>
                <Button color="inherit">Login</Button>
            </Toolbar>
        </AppBar>
    </Box>
);
}