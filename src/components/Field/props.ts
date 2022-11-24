import { InputProps } from "@components"
import { ChipProps } from "@mui/material"

export interface FieldProps extends InputProps {
  label?: string,
}

export interface ReadOnlyFieldProps extends ChipProps{
  text?: string,
  fullwidth?: boolean,
}