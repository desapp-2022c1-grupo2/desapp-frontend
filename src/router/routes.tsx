import React from 'react'
import {
  AdminAccountPage,
  AdminAssignmentsPage,
  AdminUsersPage,
  LoginPage,
} from '../pages'

export const paths = {
  login: '/login',
  admin: {
    home: '/admin',
    users: '/admin/users',
    assignments: '/admin/assignments',
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
      element: <AdminUsersPage />,
    },
    users: {
      path: paths.admin.users,
      exact: false,
      element: <AdminUsersPage />,
      label: "Usuarios",
    },
    assignments: {
      path: paths.admin.assignments,
      exact: true,
      element: <AdminAssignmentsPage />,
      label: "Trabajos Practicos"
    },
    account: {
      path: paths.admin.account,
      exact: true,
      //TODO: Implement mi cuenta page
      element: <AdminAccountPage />,
      label: "Mi cuenta"
    },
  }
}