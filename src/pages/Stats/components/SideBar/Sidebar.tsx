import React, { useState } from 'react'
import { GoToBack, GoToFoward } from '@components/GoTo'
import { isologo, logo } from '@assets'
import { SidebarProps } from './props'
import { SidebarContainer } from './styles'
import { Navigation } from '../Navigation'
import { ProfileStatus } from '../ProfileStatus'

const Isologo = () => <img style={{ height: '40px'}} src={isologo} alt='unahur' />
const Logo = () => <img style={{ height: '56px'}} src={logo} alt='unahur' />

export const Sidebar = (props: SidebarProps) => {
  const [slim, setSlim] = useState(false)
  const toggleSlim = () => { setSlim(!slim) }
  
  return (
    <SidebarContainer slim={slim}>
      { slim ? <GoToBack text='Contraer' onClick={toggleSlim}/> : <GoToFoward text='' onClick={toggleSlim}/> }
      <ProfileStatus onlyPic={!slim}/>
      <Navigation slim={slim} />
      { slim ? <Isologo /> : <Logo /> }
    </SidebarContainer>
  )
}