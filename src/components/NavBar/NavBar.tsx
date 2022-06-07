import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar, {ToolbarProps} from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {IconButton} from "@mui/material";
import { Menu } from "@mui/icons-material/";

type AppToolbarProps = Omit<ToolbarProps,"children">

export const NavBar = ({...props }: AppToolbarProps ): JSX.Element => {
    
    return (
        <Box sx={{ flexGrow: 1 }}>
        <AppBar className={props.className} >
            <Toolbar>
                <IconButton
                    color="inherit"
                    edge='start'
                >
                    <Menu />
                </IconButton>
                <Typography variant="h4" component="div" sx={{ flexGrow: 1, fontSize: '1.5rem' }}>
                    Diseño Industrial
                </Typography>
                
                <Button color="inherit">Login</Button>
            </Toolbar>
        </AppBar>
    </Box>
);
}