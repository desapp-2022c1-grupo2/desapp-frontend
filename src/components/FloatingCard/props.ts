export interface floatingCardStyles {
  color?: string,
  height?: string,
  width?: string,
}

export interface floatingCardProps extends floatingCardStyles {
  title?: string,
  tooltip?: React.ReactNode,
  children?: React.ReactNode,
}