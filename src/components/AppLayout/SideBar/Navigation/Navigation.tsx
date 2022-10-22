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
import { selectSidebar } from '@src/store'

export const Navigation = () => {
  const slim: boolean = selectSidebar()

  return (
    <NavigationContainer>
      <Tab
        slim={slim}
        tooltip='Vista General'
        icon={<DashboardOutlined />}
        to={paths.overview} // /overview
        label='Vista General'
      />

      <SubMenu
        label='Trabajos Prácticos'
        open={slim}
        tabs={[
          {
            slim,
            tooltip: 'Lista de TPs',
            icon: <ListAltOutlined />,
            to: paths.assignments.list,
            label: 'Lista de TPs',
          }, {
            slim,
            icon: <AssessmentOutlined />,
            to: paths.assignments.stats,
            label: 'Estadísticas',
            tooltip: 'Estadísticas',
          }, {
            slim,
            icon: <AssignmentTurnedInOutlined />,
            to: paths.assignments.evaluations,
            label: 'Entregas',
            tooltip: 'Entregas',
          }
        ]}
      />

      <SubMenu
        label='Usuarios'
        open={slim}
        tabs={[
          {
            slim,
            icon: <CoPresentOutlined />,
            to: paths.users.jtps,
            label: 'Jefes de TPs',
            tooltip: 'Jefes de TPs',
          }, {
            slim,
            icon: <SchoolOutlined />,
            to: paths.users.students,
            label: 'Estudiantes',
            tooltip: 'Estudiantes',
          }, {
            slim,
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