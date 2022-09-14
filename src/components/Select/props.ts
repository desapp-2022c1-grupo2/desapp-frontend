import { SelectProps as MuiSelectProps} from '@mui/material/Select'

export interface SelectProps extends MuiSelectProps{
  label?: string,
  items: string[],
}
