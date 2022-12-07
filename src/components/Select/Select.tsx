import React, { useState } from 'react'
import {
  MenuItem,
  SelectChangeEvent,
} from '@mui/material'
import {
  MuiSelect,
  SelectContainer,
  SelectLabel,
} from './styles'
import { Input } from '@components/Input'
import { SelectProps } from './props'

export const Select = ({ placeholder, ...props } : SelectProps) => {
  const [value, setValue] = useState(-1);
  const items = props.items || []
  
  const handleChange = (event: SelectChangeEvent<unknown>) => {
    const value = event.target.value as number
    value === -2 ? setValue(-1) : setValue(value)
  }

  return (
    <SelectContainer>
      <SelectLabel htmlFor={props.id || ''}>{props.label}</SelectLabel>
      <MuiSelect
        displayEmpty
        input={<Input />}
        onChange={handleChange}
        value={value}
        {...props}
      >
        <MenuItem disabled value={-1}><em>{placeholder}</em></MenuItem>
        <MenuItem value={-2}><em>Ningúno</em></MenuItem>
        { items.map(({ name, value }) => <MenuItem key={value} value={value}>{name}</MenuItem>) }
      </MuiSelect>
    </SelectContainer>
  )
}
