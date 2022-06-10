import React from 'react'
import styled from 'styled-components'
import { Input } from '../Input'
import { FieldProps } from './props'

const FieldLabel = styled.label`
  display: block;
  text-align: left;
  width: 100%;
`

const FieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 8px;
`

export const Field = ({ label, ...props}: FieldProps) => {
  return (
    <FieldContainer className={props.className}>
      <FieldLabel htmlFor={props.id || ''}>{label}</FieldLabel>
      <Input className='' {...props}/>
    </FieldContainer>
  )
}