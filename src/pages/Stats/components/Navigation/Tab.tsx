import React from 'react'
import { TabProps, param } from './props'
import { TabContainer } from './styles'

export const Tab = ({ icon, label, slim, ...props }: TabProps) => {
  return (
    <TabContainer {...props}>
      {icon}
      { slim ? label : '' }
    </TabContainer>
  )
}