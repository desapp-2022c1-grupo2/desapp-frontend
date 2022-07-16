import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { routes } from '@router'
import {
  Tab,
  TabsContainer,
} from './styles'

export const AdminNavigation = () => {
  const [value, setValue] = useState(0)

  const handleChange = (
    event: React.SyntheticEvent,
    newValue: number,
  ) => { setValue(newValue) }

  return (
    <TabsContainer
      value={value}
      onChange={handleChange}
      color="success"
      aria-label="secondary tabs example"
    >
      <Tab component={Link} to={routes.admin.users.home.path} label='Usuarios'/>
      <Tab component={Link} to={routes.admin.assignments.home.path} label='Trabajos Practicos'/>
      <Tab component={Link} to={routes.admin.account.home.path} label='Mi cuenta' disabled/>
    </TabsContainer>
  )
}