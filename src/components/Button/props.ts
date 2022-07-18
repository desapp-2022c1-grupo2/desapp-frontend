import { ButtonProps as MuiButtonProps } from "@mui/material"

export interface ButtonProps extends MuiButtonProps {
	textColor?: string,
	text?: string,
}