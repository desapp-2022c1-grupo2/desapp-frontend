import React from 'react'
import { paths } from '@router'
import { Tab, TabsContainer } from './styles'

export const AdminNavigation = () => {
  return (
    <TabsContainer >
      <Tab to={paths.admin.jtps}>JTPs</Tab>
      <Tab to={paths.admin.students}>Estudiantes</Tab>
      <Tab to={paths.admin.assignments}>Trabajos Practicos</Tab>
      <Tab to={paths.admin.account}>Mi cuenta</Tab>
    </TabsContainer>
  )
}
