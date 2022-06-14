import React from "react"
import {AppBar, Toolbar, IconButton, Typography, Stack, Button} from "@mui/material";
import {AvatarMenu} from "./AvatarMenu";
import {MuiMenu} from "./MuiMenu";

export const MuiNavBar = () => {
    return(
        <AppBar position='static'>
            <Toolbar >
                <IconButton
                    size='large'
                    color='inherit'
                    aria-label='logo'
                >
                    <AvatarMenu />
                </IconButton>
                <Typography
                    color='white'
                    variant='h6'
                    component='div'
                    sx={{ flexGrow: 1 }}
                >
                    DISEÑO INDUSTRIAL
                </Typography>
                <Stack direction='row' spacing={ 2 } color='white'>
                    <Button color='inherit'>Usuarios</Button>
                    <Button color='inherit'>Trabajos Practicos</Button>
                    <Button color='inherit'>Mi Cuenta</Button>
                
                </Stack>
                <MuiMenu></MuiMenu>
            </Toolbar>
        </AppBar>
    )
}