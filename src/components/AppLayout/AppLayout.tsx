import React from 'react'
import { Sidebar } from './SideBar'
import { Header } from './Header'
import {
  LayoutContainer,
  PageContent
} from './styles'
import { appLayoutProps } from './props'

export const AppLayout = ({ children, title}: appLayoutProps) => {
  return (
    <LayoutContainer>
      <Sidebar />
      <PageContent>
        <Header title={title} large/>
        <div style={{height: '100px'}}></div>
        {children}
      </PageContent>
    </LayoutContainer>
  )
}