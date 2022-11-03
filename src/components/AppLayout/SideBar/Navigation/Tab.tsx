import React from 'react'
import { TabProps } from './props'
import { TabContainer } from './styles'
import { IconButton, Tooltip, TableContainer as MuiTabContainer } from '@mui/material'
import { selectSidebar } from '@store'

export const Tab = ({ icon, label, tooltip, ...props }: TabProps) => {
  const isSidebarOpen: boolean = selectSidebar()
  
  return (
    <Tooltip arrow title={isSidebarOpen ? '' : tooltip || ''} placement='right'>
      <TabContainer isSidebarOpen={isSidebarOpen} {...props}>
        {icon}
        { isSidebarOpen ? label : <></> }
      </TabContainer>
    </Tooltip>
  )
}