import React from 'react'
import { Chip } from '@mui/material'
import { ReadOnlyFieldProps } from './props'


export const ReadOnlyField = ({ text, label, ...rest }: ReadOnlyFieldProps) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      { label && <label>{label}</label> }
      <Chip label={text} {...rest} />
    </div>
  )
}