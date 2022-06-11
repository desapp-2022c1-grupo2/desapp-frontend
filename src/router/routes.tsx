import React from 'react';
import {
  LoginPage,
} from "../pages";
import {CustomTabs} from "../components/Tab";

export const paths = {
  login: '/login',
  admin: {
    home: '/admin',
    users: '/admin/users',
    assignments: '/admin/assignments',
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
      element: <CustomTabs/>,
    },
    users: {
      path: paths.admin.users,
      exact: true,
      element: <></>,
    },
    assignments: {
      path: paths.admin.assignments,
      exact: true,
      element: <></>,
    },
  }
};