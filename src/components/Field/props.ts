import { InputProps } from "@components/Input"

export interface FieldProps extends InputProps {
  label?: string,
}

export interface ReadOnlyFieldProps {
  icon?: React.ReactNode,
  label?: string,
  text?: string,
}