import React from 'react'
import { Settings } from '@mui/icons-material'
import { HeaderContainer, HeaderTitle } from './styles'
import { headerProps } from './props'
import { UserButton } from './UserButton'
import { selectSidebar } from '@src/store'

export const Header = ({ title }: headerProps) => {
  const sidebarOpen = selectSidebar()

  return (
    <HeaderContainer slim={sidebarOpen}>
      <HeaderTitle>{title}</HeaderTitle>
      <div style={{ alignItems: 'center', display: 'flex', gap: '8px'}}>
        <Settings />
        <UserButton />
      </div>
    </HeaderContainer>
  )
}