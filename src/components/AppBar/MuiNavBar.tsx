import React, {useState} from "react"
import {AppBar, Toolbar, IconButton, Typography, Stack, Button, Menu, MenuItem} from "@mui/material";
import {AvatarMenu} from "./AvatarMenu";


export const MuiNavBar = () => {
    
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
    const open = Boolean(anchorEl)
    
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget)
    }
    
    const handleClose = () => {
        setAnchorEl(null)
    }
    
    return (
        <AppBar position='static'>
            <Toolbar>
                <IconButton
                    size='large'
                    color='inherit'
                    aria-label='logo'
                >
                    <AvatarMenu/>
                </IconButton>
                <Typography
                    color='white'
                    variant='h6'
                    component='div'
                    sx={{flexGrow: 1}}
                >
                    DISEÑO INDUSTRIAL
                </Typography>
                <Stack direction='row' spacing={3} color='white'>
                    <Button color='inherit'>Usuarios</Button>
                    <Button color='inherit'>Trabajos Practicos</Button>
                    <Button color='inherit'>Mi Cuenta</Button>
                    <Button
                        color='inherit'
                        id='resources-button'
                        onClick={handleClick}
                        aria-controls={open ? 'resources-menu' : undefined}
                        aria-haspopup='true'
                        aria-expanded={open ? 'true' : undefined}
                    >
                        Menu
                    </Button>
                </Stack>
                <Menu
                    id='resources-menu'
                    open={open}
                    anchorEl={anchorEl}
                    MenuListProps={{
                        'aria-labelledby': 'resources-button',
                    }}
                    onClose={handleClose}
                >
                    <MenuItem onClick={handleClose}> Items 1</MenuItem>
                    <MenuItem onClick={handleClose}> Items 2</MenuItem>
                </Menu>
            </Toolbar>
        </AppBar>
    )
}