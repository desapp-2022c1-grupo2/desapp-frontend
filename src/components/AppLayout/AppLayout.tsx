import React from 'react'
import { Sidebar } from './SideBar'
import { Header } from './Header'
import {
  LayoutContainer,
  PageContent
} from './styles'
import { appLayoutProps } from './props'
import { LogoutModal } from './LogoutModal'

export const AppLayout = ({ children, title}: appLayoutProps) => {
  return (
    <LayoutContainer>
      <LogoutModal />
      <Sidebar />
      <PageContent>
        <Header title={title}/>
        <div style={{ margin: '40px'}}></div>
        {children}
      </PageContent>
    </LayoutContainer>
  )
}