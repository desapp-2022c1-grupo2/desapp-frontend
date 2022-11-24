import React from 'react'
import { Input } from '@components'
import { FieldProps } from './props'
import {
  FieldContainer,
  FieldLabel,
} from './styles' 

export const Field = ({ label, ...props}: FieldProps) => {
  return (
    <FieldContainer style={{ width: props.fullWidth ? '100%' : '' }}>
      <FieldLabel htmlFor={props.id || ''}>{label}</FieldLabel>
      <Input {...props}/>
    </FieldContainer>
  )
}