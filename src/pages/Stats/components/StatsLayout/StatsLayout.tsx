import React from 'react'
import { Sidebar } from '../SideBar'
import { StatsContainer, StatsContent } from './styles'
import { statsLayoutProps } from './props'

export const StatsLayout = ({ content }: statsLayoutProps) => {
  return (
    <StatsContainer>
      <Sidebar />
      <StatsContent>{content}</StatsContent>
    </StatsContainer>
  )
}