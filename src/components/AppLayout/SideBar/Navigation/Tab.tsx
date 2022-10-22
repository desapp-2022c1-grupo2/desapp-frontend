import React from 'react'
import { TabProps } from './props'
import { TabContainer } from './styles'
import { Tooltip } from '@mui/material'

export const Tab = ({ icon, label, slim, tooltip,...props }: TabProps) => {
  return (
    <Tooltip arrow title={!slim ? tooltip || '' : ''} placement='right'>
      <TabContainer {...props}>
        {icon}
        { slim ? label : '' }
      </TabContainer>
    </Tooltip>
  )
}