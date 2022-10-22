import React from 'react'
import { isologo, logo } from '@assets'
import { SidebarProps } from './props'
import { SidebarContainer } from './styles'
import { Navigation } from './Navigation'
import { LogoutButton } from './LogoutButton'
import { ToggleSidebar } from './ToggleSidebar'
import { selectSidebar } from '@src/store'

const Isologo = () => <img style={{ height: '32px', marginBottom: '40px'}} src={isologo} alt='unahur' />
const Logo = () => <img style={{ height: '32px', marginBottom: '40px'}} src={logo} alt='unahur' />

export const Sidebar = (props: SidebarProps) => {
  const open: boolean = selectSidebar()
  
  return (
    <SidebarContainer slim={open}>
      <ToggleSidebar />
      { open ? <Isologo /> : <Logo /> }
      <Navigation />
      <LogoutButton />
    </SidebarContainer>
  )
}