import React from 'react';
import {
  AdminPage,
  LoginPage,
} from "../pages";
import {CustomTabs} from "../components/Tab";
import {AssignmentTable, UserTable} from "../components/Table";

export const paths = {
  login: '/login',
  admin: {
    home: '/admin',
    usersList: '/admin/users',
    assignmentsList: '/admin/assignments',
    account: '/admin/account'
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
      element: <AdminPage content={<UserTable/>}/>,
      label: "Remover esta tab"
    },
    usersList: {
      path: paths.admin.usersList,
      exact: false,
      element: <AdminPage content={<UserTable/>}/>,
      label: "Usuarios"
    },
    assignmentsList: {
      path: paths.admin.assignmentsList,
      exact: true,
      element: <AdminPage content={<AssignmentTable/>}/>,
      label: "Trabajos Practicos"
    },
    account: {
      path: paths.admin.account,
      exact: true,
      //TODO: Implement mi cuenta page
      element: <AdminPage content={<p>Mi Cuenta Page</p>}/>,
      label: "Mi cuenta"
    },
  }
};