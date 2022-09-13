import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { paths } from '@router'
import { Tab, TabsContainer } from './styles'

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
      color='unahurGreen'
    >
      <Tab component={Link} to={paths.admin.jtps} label='JTPs'/>
      <Tab component={Link} to={paths.admin.students} label='Estudiantes'/>
      <Tab component={Link} to={paths.admin.assignments} label='Trabajos Practicos'/>
      <Tab component={Link} to={paths.admin.account} label='Mi cuenta'/>
    </TabsContainer>
  )
}
