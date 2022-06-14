import React from 'react';
import {
  LoginPage,
} from "../pages";
import {MuiNavBar} from "../components/AppBar/MuiNavBar";

export const paths = {
  login: '/login',
  admin: {
    home: '/admin',
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
    home: {
      path: paths.admin.home,
      exact: true,
      element: <MuiNavBar/>,
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