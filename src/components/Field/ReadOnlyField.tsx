import React from 'react'
import { Chip } from '@mui/material'
import { ReadOnlyFieldProps } from './props'


export const ReadOnlyField = ({ fullwidth, text, label, ...rest }: ReadOnlyFieldProps) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', width: fullwidth ? '100%' : 'fit-content' }}>
      { label && <label>{label}</label> }
      <Chip label={text} {...rest} />
    </div>
  )
}