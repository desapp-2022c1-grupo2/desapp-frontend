import React from 'react'
import { OutlinedInput } from './styles'
import { InputProps } from './props'

import {
  EmailOutlined,
  LockOutlined,
  SearchOutlined,
} from '../Icon'

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