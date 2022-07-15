import React from 'react'
import {
  AdminAccountPage,
  AdminAssignmentsPage,
  AdminUsersPage,
  CreateUserPage,
  LoginPage,
} from '../pages'

export const paths = {
  login: '/login',
  admin: {
    home: '/admin',
    users: {
      home: '/admin/users',
      create: '/admin/users/create',
    },
    assignments: {
      home: '/admin/assignments',
    },
    account: {
      home: '/admin/account'
    }
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
      home: {
        path: paths.admin.users.home,
        exact: false,
        element: <AdminUsersPage />,
        label: "Usuarios",
      },
      create: {
        path: paths.admin.users.create,
        exact: true,
        element: <CreateUserPage />,
        label: "Crear usuario"
      }
    },
    assignments: {
      home: {
        path: paths.admin.assignments.home,
        exact: true,
        element: <AdminAssignmentsPage />,
        label: "Trabajos Practicos"
      },
    },
    account: {
      home: {
        path: paths.admin.account.home,
        exact: true,
        //TODO: Implement mi cuenta page
        element: <AdminAccountPage />,
        label: "Mi cuenta"
      }
    },
  }
};