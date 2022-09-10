import React from 'react'
import {
  AdminAccountPage,
  AdminAssignmentsPage,
  AdminUsersPage,
  LoginPage,
} from '@pages'
import { AdminStudentsTable } from "@pages/Admin/pages/Students";


export const paths = {
  login: '/login',
  admin: {
    home: '/admin',
    jtps: '/admin/users',
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
      element: <AdminUsersPage />,
    },
    jtps: {
      path: paths.admin.jtps,
      exact: true,
      element: <AdminUsersPage />,
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
      element: <AdminStudentsTable />,
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
