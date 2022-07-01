import React from 'react'
import styled from 'styled-components'
import { Input } from '../Input'
import { FieldProps } from './props'
import TextField, {TextFieldProps} from "@mui/material/TextField/TextField";

const FieldLabel = styled.label`
  display: block;
  text-align: left;
  width: 100%;
`

export const FieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 8px;
`

export const Field = ({ label, ...props}: TextFieldProps) => {
  return (
    <FieldContainer className={props.className}>
      <TextField label={label} {...props}></TextField>
    </FieldContainer>
  )
}