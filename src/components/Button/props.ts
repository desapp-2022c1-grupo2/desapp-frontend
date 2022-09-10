import { ButtonProps as MuiButtonProps } from "@mui/material"

export interface ButtonProps extends MuiButtonProps {
  id?: string,
  text?: string,
}
