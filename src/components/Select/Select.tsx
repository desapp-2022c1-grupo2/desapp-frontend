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

export const Select = ({ items, placeholder, ...props } : SelectProps) => {
  const [value, setValue] = useState(-1);

  const handleChange = (event: SelectChangeEvent<unknown>) => {
    setValue(event.target.value as number);
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
        { items.map(({ name, value }) => <MenuItem key={value} value={value}>{name}</MenuItem>) }
      </MuiSelect>
    </SelectContainer>
  )
}