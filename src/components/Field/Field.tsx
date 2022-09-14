import React from 'react'
import { Input } from '@components'
import { FieldProps } from './props'
import {
  FieldContainer,
  FieldLabel,
} from './styles' 

export const Field = ({ label, ...props}: FieldProps) => {
  return (
    <FieldContainer className={props.className}>
      <FieldLabel htmlFor={props.id || ''}>{label}</FieldLabel>
      <Input className='' {...props}/>
    </FieldContainer>
  )
}