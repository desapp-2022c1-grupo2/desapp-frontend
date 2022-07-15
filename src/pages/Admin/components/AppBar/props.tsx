import {AppBarProps} from "@mui/material";

export interface CustomAppBarProps extends AppBarProps{
  pages: string[];
  icon: JSX.Element;
  avatarSrc: string,
  name: string,
}