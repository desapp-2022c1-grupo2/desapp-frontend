import {ButtonProps} from "@mui/material";


export interface ProfileButtonProps extends ButtonProps{
  name: string;
  avatarSrc: string;
  hooks: {
    handleClick: any;
    open: boolean;
  }
}