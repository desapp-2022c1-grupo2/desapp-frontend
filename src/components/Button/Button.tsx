import React from 'react'
import { Button as MuiButton } from '@mui/material'
import { ButtonProps } from './props'

export const Button = ({ 
  text,
  textColor,
  ...props
}: ButtonProps ) => {
  return (
    <MuiButton {...props} sx={{ color: textColor }}>
      { props.children ? props.children : text }
    </MuiButton>
  )
}
