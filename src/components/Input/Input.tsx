import React from 'react'
import { OutlinedInput } from './styles'
import { InputProps } from './props'
import {
  EmailOutlined,
  LockOutlined,
  SearchOutlined,
} from '@components/Icon'

const SearchInput = ({ hideIcon, ...props } : InputProps) => (
  <OutlinedInput
    startAdornment={!hideIcon && <SearchOutlined />}
    type='text'
    {...props}
  />
)

const EmailInput = ({ hideIcon, ...props } : InputProps) => (
  <OutlinedInput
    startAdornment={!hideIcon && <EmailOutlined />}
    type='email'
    {...props}
  />
)

const PasswordInput = ({ hideIcon, ...props } : InputProps) => (
  <OutlinedInput
    startAdornment={!hideIcon && <LockOutlined />}
    type='password'
    {...props}
  />
)

export const Input = ({ variant, ...props }: InputProps) => {
  if (variant==='email') return <EmailInput color='unahurCyan' {...props}/>
  if (variant==='search') return <SearchInput color='unahurCyan' {...props}/>
  if (variant==='password') return <PasswordInput color='unahurCyan' {...props}/>
  return <OutlinedInput color='unahurCyan' {...props}/>
}