import React from 'react';
import {
  LoginPage,
} from "../pages";
import {AdminPage} from "../pages";

export const paths = {
  login: '/login',
  admin: {
    home: '/Admin',
    usersList: '/Admin/users',
    assignmentsList: '/Admin/assignments',
  },
};

export const routes = {
  login: {
    path: paths.login,
    exact: true,
    element: <LoginPage />,
  },
  admin: {
    home: {
      path: paths.admin.home,
      exact: true,
      element: <></>,
    },
    usersList: {
      path: paths.admin.usersList,
      exact: true,
      element: <></>,
    },
    assignmentsList: {
      path: paths.admin.assignmentsList,
      exact: true,
      element: <></>,
    },
  }
};