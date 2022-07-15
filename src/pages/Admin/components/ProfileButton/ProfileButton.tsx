import { KeyboardArrowDown } from "@mui/icons-material";
import {Avatar, Button, Typography} from "@mui/material";
import React from "react";
import {ProfileButtonProps} from "./props";

export const ProfileButton = ({hooks, name, avatarSrc, ...props}: ProfileButtonProps) => {
  const {handleClick, open} = hooks;

  return (<Button
    color='inherit'
    id='resources-button'
    onClick={handleClick}
    aria-controls={open ? 'resources-menu' : undefined}
    aria-haspopup='true'
    aria-expanded={open ? 'true' : undefined}
    endIcon={<KeyboardArrowDown></KeyboardArrowDown>}
  >
    <Avatar src={avatarSrc}/>
    <Typography sx={{margin: '8px'}}>{name}</Typography>
  </Button>);
}