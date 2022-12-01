import React from 'react'
import { TabProps } from './props'
import { TabContainer } from './styles'
import { Tooltip } from '@mui/material'
import { selectSidebar, toggleSidebar } from '@store'
import { useDispatch } from 'react-redux'
import { useWindowSize } from '@src/hooks'

export const Tab = ({ icon, label, tooltip, ...props }: TabProps) => {
  const isSidebarOpen: boolean = selectSidebar()
  const dispatch = useDispatch()
  const { width } = useWindowSize()
  
  const closeSidebar = () => {
    if(width < 1024) dispatch(toggleSidebar())
  }

  return (
    <Tooltip arrow title={isSidebarOpen ? '' : tooltip || ''} placement='right'>
      <TabContainer onClick={closeSidebar} {...props}>
        {icon}
        { isSidebarOpen ? label : <></> }
      </TabContainer>
    </Tooltip>
  )
}