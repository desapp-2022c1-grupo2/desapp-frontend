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
  if (variant==='email') return <EmailInput {...props}/>
  if (variant==='search') return <SearchInput {...props}/>
  if (variant==='password') return <PasswordInput {...props}/>
  return <OutlinedInput {...props}/>
}
