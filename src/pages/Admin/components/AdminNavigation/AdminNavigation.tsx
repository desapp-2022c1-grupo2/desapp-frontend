import React from 'react'
import { paths } from '@router'
import { Tab, TabsContainer } from './styles'

interface param { isActive: boolean }

export const AdminNavigation = () => {
  const handleActive = (x: param) => x.isActive ? 'active' : ''

  return (
    <TabsContainer >
      <Tab className={handleActive} to={paths.admin.jtps}>JTPs</Tab>
      <Tab className={handleActive} to={paths.admin.students}>Estudiantes</Tab>
      <Tab className={handleActive} to={paths.admin.assignments}>Trabajos Practicos</Tab>
      <Tab className={handleActive} to={paths.admin.account}>Mi cuenta</Tab>
    </TabsContainer>
  )
}
