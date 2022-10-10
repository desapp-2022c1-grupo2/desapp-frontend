import React from 'react'
import { Sidebar } from '../SideBar'
import { StatsContainer, StatsContent } from './styles'

export const StatsLayout = () => {
  return (
    <StatsContainer>
        <Sidebar />
        <StatsContent />
    </StatsContainer>
  )
}