import React from 'react'
import { Input } from '../Input'
import { FieldProps } from './props'
import {
  FieldContainer,
  FieldLabel,
} from './styled' 

export const Field = ({ label, ...props}: FieldProps) => {
  return (
    <FieldContainer className={props.className}>
      <FieldLabel htmlFor={props.id || ''}>{label}</FieldLabel>
      <Input className='' {...props}/>
    </FieldContainer>
  )
}