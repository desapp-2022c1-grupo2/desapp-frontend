import React from 'react'
import {
  AdminAccountPage,
  AdminAssignmentsPage,
  AdminStudentsPage,
  AdminJtpsPage,
  LoginPage,
  StatsDashboard,
  StatsAssignments,
} from '@pages'

export const paths = {
  login: '/login',
  admin: {
    home: '/admin',
    jtps: '/admin/jtps',
    assignments: '/admin/assignments',
    students: '/admin/students',
    account: '/admin/account'
  },
  stats: {
    dashboard: '/stats/dashboard',
    assignments: '/stats/assignments',
  }
};

export const routes = {
  stats: {
    dashboard : {
      path: paths.stats.dashboard,
      element: <StatsDashboard />,
    },
    assignments: {
      path: paths.stats.assignments,
      element: <StatsAssignments />,

    }
  },
  login: {
    path: paths.login,
    element: <LoginPage/>,
  },
  admin: {
    home: {
      path: paths.admin.home,
      element: <AdminJtpsPage />,
    },
    jtps: {
      path: paths.admin.jtps,
      element: <AdminJtpsPage />,
      label: "JTPs",
    },
    assignments: {
      path: paths.admin.assignments,
      element: <AdminAssignmentsPage />,
      label: "Trabajos Practicos"
    },
    students: {
      path: paths.admin.students,
      element: <AdminStudentsPage />,
      label: "Estudiantes"
    },
    account: {
      path: paths.admin.account,
      element: <AdminAccountPage />,
      label: "Mi cuenta"
    },
  }
}
