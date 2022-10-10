import React from 'react'
import {
  DashboardOutlined,
  AssignmentOutlined,
} from '@components'
import { Tab } from './Tab'
import { NavigationProps } from './props'
import { NavigationContainer } from './styles'
import { paths } from '@router'

export const Navigation = ({ slim }: NavigationProps) => {
  return (
    <NavigationContainer>
      <Tab
        slim={slim}
        icon={<DashboardOutlined />}
        to={paths.stats.dashboard}
        label='Dashboard'
        />
      <Tab
        slim={slim}
        icon={<AssignmentOutlined />}
        to={paths.stats.assignments}
        label='Trabajos Prácticos'
      />
    </NavigationContainer>
  )
}