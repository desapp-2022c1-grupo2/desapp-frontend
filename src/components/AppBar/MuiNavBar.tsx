import React from "react"
import {AppBar, Toolbar, IconButton, Typography} from "@mui/material";
import {AvatarMenu} from "./AvatarMenu";

export const MuiNavBar = () => {
    return(
        <AppBar position='static'>
            <Toolbar >
                <IconButton
                    size='large'
                    color='inherit'
                    aria-label='logo'
                >
                    <AvatarMenu  name={'Diseño Industrial'}/>
                </IconButton>
                <Typography variant='h6' component='div'>
                    DISEÑO INDUSTRIAL
                </Typography>
            </Toolbar>
        
        </AppBar>
    )
}