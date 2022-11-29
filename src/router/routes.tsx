import React from 'react'
import {
  AssignmentsPage,
  AccountPage,
  EvaluationsPage,
  StatsPage,
  AdminsPage,
  StudentsPage,
  JtpsPage,
  LoginPage,
  OverviewPage,
} from '@pages'
import {PasswordResetPage} from "@pages/PasswordReset";

export const paths = {
  account: '/account',
  overview: '/overview',
  login: '/login',
  passwordReset: '/:role/validateReset/:resetId',
  assignments: {
    list: '/assignments/list',
    stats: '/assignments/stats',
    evaluations: '/assignments/evaluations',
  },
  users: {
    admins: '/users/admins',
    jtps: '/users/jtp',
    students: '/users/students',
  },
}

export const routes = {
  account: { path: paths.account, element: <AccountPage /> },
  home: { path: '/', element: <OverviewPage /> },
  overview: { path: paths.overview, element: <OverviewPage /> },
  login: { path: paths.login, element: <LoginPage/> },
  passwordReset: { path: paths.passwordReset, element: <PasswordResetPage/>, },
  assignments: {
    list: { path: paths.assignments.list, element: <AssignmentsPage /> },
    stats: { path: paths.assignments.stats, element: <StatsPage /> },
    evaluations: { path: paths.assignments.evaluations, element: <EvaluationsPage /> },
  },
  users: {
    admins: { path: paths.users.admins, element: <AdminsPage /> },
    jtps: { path: paths.users.jtps, element: <JtpsPage /> },
    students: { path: paths.users.students, element: <StudentsPage /> },
  },
}
