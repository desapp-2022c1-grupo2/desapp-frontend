import React from 'react'
import { isologo, logo } from '@assets'
import { selectSidebar } from '@store'
import { SidebarContainer } from './styles'
import { Navigation } from './Navigation'
import { ToggleSidebar } from './ToggleSidebar'
import { LogoutButton } from './LogoutButton'
import { CrossButton } from './Cross'

const Isologo = () => <img style={{ height: '32px', marginBottom: '40px'}} src={isologo} alt='unahur' />
const Logo = () => <img style={{ height: '32px', marginBottom: '40px'}} src={logo} alt='unahur' />

export const Sidebar = () => {
  const isSidebarOpen: boolean = selectSidebar()
  
  return (
    <SidebarContainer>
      <CrossButton />
      <ToggleSidebar />
      { isSidebarOpen ? <Isologo /> : <Logo /> }
      <Navigation />
      <LogoutButton />
    </SidebarContainer>
  )
}