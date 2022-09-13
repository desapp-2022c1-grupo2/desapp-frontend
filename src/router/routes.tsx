import React from 'react'
import {
  AdminAccountPage,
  AdminAssignmentsPage,
  AdminStudentsPage,
  AdminJtpsPage,
  LoginPage,
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
};

export const routes = {
  login: {
    path: paths.login,
    exact: true,
    element: <LoginPage/>,
  },
  admin: {
    home: {
      path: paths.admin.home,
      exact: true,
      element: <AdminJtpsPage />,
    },
    jtps: {
      path: paths.admin.jtps,
      exact: true,
      element: <AdminJtpsPage />,
      label: "JTPs",
    },
    assignments: {
      path: paths.admin.assignments,
      exact: true,
      element: <AdminAssignmentsPage />,
      label: "Trabajos Practicos"
    },
    students: {
      path: paths.admin.students,
      exact: true,
      element: <AdminStudentsPage />,
      label: "Estudiantes"
    },
    account: {
      path: paths.admin.account,
      exact: true,
      element: <AdminAccountPage />,
      label: "Mi cuenta"
    },
  }
}
