import React from 'react';
import {
  LoginPage,
} from "../pages";
import {CustomTable, TrabajoPractico} from "../components/Table";
import {AssignmentTable, UserTable} from "../components/Table";

export const paths = {
  login: '/login',
  admin: {
    home: '/admin',
    usersList: '/admin/users',
    assignmentsList: '/admin/assignments',
  },
};

function getUserRows() {
  return [];
}

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
      element: <></>,
    },
    usersList: {
      path: paths.admin.usersList,
      exact: true,
      element: <UserTable/>,
    },
    assignmentsList: {
      path: paths.admin.assignmentsList,
      exact: true,
      element: <AssignmentTable/>,
    },
  },
  table: {}
};