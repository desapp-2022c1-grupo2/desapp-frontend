import React, {useState} from "react"
import {
  AppBar,
  Toolbar,
  Typography,
  Stack,
  Menu,
  MenuItem
} from "@mui/material";
import styled from "styled-components";
import {ProfileButton} from "../ProfileButton/ProfileButton";
import {CustomAppBarProps} from "./props";

const StyledToolbar = styled(Toolbar)`
background-color: white;
justify-content: space-between;
`;

export const MuiNavBar = ({pages, icon, avatarSrc, name, ...props} : CustomAppBarProps) => {

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
            <StyledToolbar>
              {icon}
                <Stack direction='row' spacing={3} color='white'>
                  <ProfileButton hooks={{handleClick: handleClick, open: open}}
                                 avatarSrc={avatarSrc}
                                 name={name}/>
                </Stack>
                <Menu
                    id='resources-menu'
                    open={open}
                    anchorEl={anchorEl}
                    MenuListProps={{
                        'aria-labelledby': 'resources-button',
                    }}
                    onClose={handleClose}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                    }}
                    transformOrigin={{
                        vertical:'top',
                        horizontal:'right'
                    }}
                >
                  {pages.map((page) => (
                    <MenuItem key={page}>
                      <Typography textAlign="center">{page}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
            </StyledToolbar>
        </AppBar>
    )
}