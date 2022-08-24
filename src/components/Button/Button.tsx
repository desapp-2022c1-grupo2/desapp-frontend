import React from 'react'
import { Button as MuiButton } from '@mui/material'
import { ButtonProps } from './props'

export const Button = ({ 
  text,
  ...props
}: ButtonProps ) => {
  return (
    <MuiButton {...props} >
      { props.children || text }
    </MuiButton>
  )
}
