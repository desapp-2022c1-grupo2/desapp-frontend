import React from 'react';
import {
  Admin,
  LoginPage,
} from "../pages";

export const paths = {
  login: '/login',
  admin: {
    account: '/admin/account',
    usersList: '/admin/users',
    assignmentsList: '/admin/assignments',
  },
};

export const routes = {
  login: {
    path: paths.login,
    exact: true,
    element: <LoginPage />,
  },
  admin: {
    account: {
      path: paths.admin.account,
      exact: true,
      element: <Admin.AccountPage />,
    },
    assignmentsList: {
      path: paths.admin.assignmentsList,
      exact: true,
      element: <Admin.AssignmentsPage/>,
    },
    usersList: {
      path: paths.admin.usersList,
      exact: true,
      element: <Admin.UsersPage />,
    },
  }
};