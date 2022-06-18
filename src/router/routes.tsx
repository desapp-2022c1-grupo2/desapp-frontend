import React from 'react';
import {
  LoginPage,
} from "../pages";
import {CustomTabs} from "../components/Tab";
import {AssignmentTable, UserTable} from "../components/Table";
import {AdminPage} from "../pages/Admin";

export const paths = {
  login: '/login',
  admin: {
    home: '/admin/',
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
      element: <AdminPage element={<UserTable/>}/>,
      label: "Remover esta tab"
    },
    usersList: {
      path: paths.admin.usersList,
      exact: false,
      element: <AdminPage element={<UserTable/>}/>,
      label: "Usuarios"
    },
    assignmentsList: {
      path: paths.admin.assignmentsList,
      exact: true,
      element: <AdminPage element={<AssignmentTable/>}/>,
      label: "Trabajos Practicos"
    },
    account: {
      path: paths.admin.account,
      exact: true,
      //TODO: Implement mi cuenta page
      element: <AdminPage element={<p>Mi Cuenta Page</p>}/>,
      label: "Mi cuenta"
    },
  }
};