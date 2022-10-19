import React, { useState } from 'react'
import { GoToBack, GoToFoward } from '@components/GoTo'
import { isologo, logo } from '@assets'
import { SidebarProps } from './props'
import { SidebarContainer } from './styles'
import { Navigation } from './Navigation'
import { LogoutButton } from './LogoutButton'
import { ToggleSidebar } from './ToggleSidebar'

const Isologo = () => <img style={{ height: '32px', marginBottom: '40px'}} src={isologo} alt='unahur' />
const Logo = () => <img style={{ height: '32px', marginBottom: '40px'}} src={logo} alt='unahur' />

export const Sidebar = (props: SidebarProps) => {
  const [open, setOpen] = useState(true)
  const toggleOpen = () => { setOpen(!open) }
  
  return (
    <SidebarContainer slim={open}>
      <ToggleSidebar onClick={toggleOpen} open={open}/>
      { open ? <Isologo /> : <Logo /> }
      <Navigation slim={open} />
      <LogoutButton open={open}/>
    </SidebarContainer>
  )
}