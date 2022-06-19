import React from 'react';
import {
  AdminPage,
  LoginPage,
} from "../pages";

export const paths = {
  login: '/login',
  admin: {
    home: '/admin',
    usersList: '/admin/users',
    assignmentsList: '/admin/assignments',
    account: '/admin/account',
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
      element: <AdminPage/>,
    },
    assignmentsList: {
      path: paths.admin.assignmentsList,
      exact: true,
      // element: <Admin.AssignmentsPage/>,
    },
    usersList: {
      path: paths.admin.usersList,
      exact: true,
      // element: <Admin.UsersPage />,
    },
  }
};