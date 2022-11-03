import React from 'react'
import { Button as MuiButton } from '@mui/material'
import { ButtonProps } from './props'
import styled from 'styled-components'
import { devices } from '@src/util/breakpoints'

const StyledButton = styled(MuiButton)<ButtonProps>`
  width: 100%;

  ${devices.tablet} {
    width: fit-content !important;
  }
`


export const Button = ({ 
  text,
  ...props
}: ButtonProps ) => {
  return (
    <StyledButton {...props} >
      { props.children || text }
    </StyledButton>
  )
}
