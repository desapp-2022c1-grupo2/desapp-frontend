import React from 'react'
import {
  DashboardOutlined,
  AssessmentOutlined,
  AssignmentTurnedInOutlined,
  ListAltOutlined,
  BadgeOutlined,
  CoPresentOutlined,
  SchoolOutlined,
} from '@components'
import { paths } from '@router'
import { SubMenu } from './SubMenu'
import { NavigationContainer } from './styles'
import { Tab } from './Tab'

export const Navigation = () => {
  return (
    <NavigationContainer>
      <Tab
        tooltip='Vista General'
        icon={<DashboardOutlined />}
        to={paths.overview}
        label='Vista General'
      />

      <SubMenu
        label='Trabajos Prácticos'
        tabs={[
          {
            tooltip: 'Lista de TPs',
            icon: <ListAltOutlined />,
            to: paths.assignments.list,
            label: 'Lista de TPs',
          //}, {
          //  icon: <AssessmentOutlined />,
          //  to: paths.assignments.stats,
          //  label: 'Estadísticas',
          //  tooltip: 'Estadísticas',
          }, {
            icon: <AssignmentTurnedInOutlined />,
            to: paths.assignments.evaluations,
            label: 'Entregas',
            tooltip: 'Entregas',
          }
        ]}
      />

      <SubMenu
        label='Usuarios'
        tabs={[
          {
            icon: <CoPresentOutlined />,
            to: paths.users.jtps,
            label: 'Jefes de TPs',
            tooltip: 'Jefes de TPs',
          }, {
            icon: <SchoolOutlined />,
            to: paths.users.students,
            label: 'Estudiantes',
            tooltip: 'Estudiantes',
          }, {
            icon: <BadgeOutlined />,
            to: paths.users.admins,
            label: 'Administradores',
            tooltip: 'Administradores',
          }
        ]}
      />
    </NavigationContainer>
  )
}