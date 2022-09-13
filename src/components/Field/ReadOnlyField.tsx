import React from 'react'
import { ReadOnlyFieldProps } from './props'
import {
  ReadOnlyFieldContainer,
  ReadOnlyFieldContent,
  ReadOnlyFieldLabel,
} from './styles'

export const ReadOnlyField = ({ text, label, icon}: ReadOnlyFieldProps) => {
  return (
    <ReadOnlyFieldContainer>
      <ReadOnlyFieldLabel>{label}</ReadOnlyFieldLabel>
      <ReadOnlyFieldContent>
        {icon}
        {text}
      </ReadOnlyFieldContent>
    </ReadOnlyFieldContainer>
  )
}