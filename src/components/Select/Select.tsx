import React, { useState } from 'react';
import {
  MenuItem,
  SelectChangeEvent,
} from '@mui/material'
import { MuiSelect, SelectContainer, SelectLabel } from './styles'
import { Input } from '../Input'
import { SelectProps } from './props'

export const Select = ({ items, placeholder, ...props } : SelectProps) => {
  const [value, setValue] = useState('');

  const handleChange = (event: SelectChangeEvent<unknown>) => {
    setValue(event.target.value as string);
  }

  return (
    <SelectContainer>
      <SelectLabel htmlFor={props.id || ''}>{props.label}</SelectLabel>
      <MuiSelect
        defaultValue=''
        displayEmpty
        renderValue={(select) => (value === '')
          ? <span>{placeholder}</span>
          : items[select]
        }
        input={<Input />}
        onChange={handleChange}
        value={value}
        {...props}
      >
        <MenuItem disabled value=''><em>{placeholder}</em></MenuItem>
        { items.map((item, index) => <MenuItem key={index} value={`${index}`}>{item}</MenuItem>) }
      </MuiSelect>
    </SelectContainer>
  )
}