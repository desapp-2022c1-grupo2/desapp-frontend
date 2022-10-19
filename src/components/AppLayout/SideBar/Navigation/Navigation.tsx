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
import { NavigationProps } from './props'
import { NavigationContainer } from './styles'
import { Tab } from './Tab'

export const Navigation = ({ slim }: NavigationProps) => {
  return (
    <NavigationContainer>
      <Tab
        slim={slim}
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
            icon: <ListAltOutlined />,
            to: paths.assignments.list,
            label: 'Lista de TPs',
          }, {
            slim,
            icon: <AssessmentOutlined />,
            to: paths.assignments.stats,
            label: 'Estadísticas',
          }, {
            slim,
            icon: <AssignmentTurnedInOutlined />,
            to: paths.assignments.evaluations,
            label: 'Entregas',
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
          }, {
            slim,
            icon: <SchoolOutlined />,
            to: paths.users.students,
            label: 'Estudiantes',
          }, {
            slim,
            icon: <BadgeOutlined />,
            to: paths.users.admins,
            label: 'Administradores',
          }
        ]}
      />
    </NavigationContainer>
  )
}