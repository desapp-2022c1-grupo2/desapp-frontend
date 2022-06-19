import React from 'react'
import styled from 'styled-components'
import MuiInput from '@mui/material/OutlinedInput'
import { InputProps } from './props'

import {
  EmailOutlined,
  LockOutlined,
  SearchOutlined,
} from '../Icon'

const OutlinedInput = styled(MuiInput)`
  gap: 8px;
  background-color: #F1F1F1;
  minHeight: '52px';
  minWidth: '192px';
  padding: '8px 16px';
`

const SearchInput = ({ hideIcon = false, ...props } : InputProps) => (
  <OutlinedInput
    startAdornment={!hideIcon && <SearchOutlined />}
    type='search'
    {...props}
  />
)

const EmailInput = ({ hideIcon = false, ...props } : InputProps) => (
  <OutlinedInput
    startAdornment={!hideIcon && <EmailOutlined />}
    type='email'
    {...props}
  />
)

const PasswordInput = ({ hideIcon = false, ...props } : InputProps) => (
  <OutlinedInput
    startAdornment={!hideIcon && <LockOutlined />}
    type='password'
    {...props}
  />
)


export const Input = ({ variant, ...props }: InputProps) => {
  if (variant==='email') return <EmailInput {...props}/>
  if (variant==='search') return <SearchInput {...props}/>
  if (variant==='password') return <PasswordInput {...props}/>
  return <OutlinedInput {...props}/>
}