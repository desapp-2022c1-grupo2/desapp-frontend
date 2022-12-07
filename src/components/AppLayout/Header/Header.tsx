import React from 'react'
import { Settings } from '@mui/icons-material'
import { HeaderContainer, HeaderTitle } from './styles'
import { headerProps } from './props'
import { UserButton } from './UserButton'
import { selectSidebar } from '@src/store'
import { Burger } from './Burger'

export const Header = ({ title }: headerProps) => {
  const isSidebarOpen = selectSidebar()

  return (
    <HeaderContainer isSidebarOpen={isSidebarOpen}>
      <Burger />
      <HeaderTitle>{title}</HeaderTitle>
      <div style={{ alignItems: 'center', display: 'flex', gap: '8px'}}>
        <UserButton />
      </div>
    </HeaderContainer>
  )
}