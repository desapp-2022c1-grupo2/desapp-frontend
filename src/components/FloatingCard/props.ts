import { BoxProps } from '@mui/material'

export interface floatingCardStyles {
  color?: string,
  height?: string,
  width?: string,
}

export interface floatingCardProps extends BoxProps {
  title?: string,
  tooltip?: React.ReactNode,
  children?: React.ReactNode,
}