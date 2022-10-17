import React from 'react'
import { Settings } from '@mui/icons-material'
import { HeaderContainer } from './styles'
import { headerProps } from './props'
import { UserButton } from './UserButton'

export const Header = ({
  title,
  large,
}: headerProps) => {
  return (
    <HeaderContainer lg={large}>
      <h1>{title}</h1>
      <div style={{ alignItems: 'center', display: 'flex', gap: '8px'}}>
        <Settings />
        <UserButton />
      </div>
    </HeaderContainer>
  )
}