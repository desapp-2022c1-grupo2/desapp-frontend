import React from 'react';
import {
  AdminPage,
  LoginPage,
} from "../pages";
import {AssignmentTable, UserTable} from "../components/Table";
import {CreateUserPage} from "../pages/Admin/User/Create";

export const paths = {
  login: '/login',
  admin: {
    home: '/admin',
    users: {
      home: '/admin/users',
      create: '/admin/users/create',
    },
    assignments: {
      home: '/admin/assignments',
    },
    account: {
      home: '/admin/account'
    }
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
      element: <AdminPage content={<UserTable/>}/>,
    },
    users: {
      home: {
        path: paths.admin.users.home,
        exact: false,
        element: <AdminPage content={<UserTable/>}/>,
        label: "Usuarios",
      },
      create: {
        path: paths.admin.users.create,
        exact: true,
        element: <AdminPage content={<CreateUserPage/>}/>,
        label: "Crear usuario"
      }
    },
    assignments: {
      home: {
        path: paths.admin.assignments.home,
        exact: true,
        element: <AdminPage content={<AssignmentTable/>}/>,
        label: "Trabajos Practicos"
      },
      create: {
        // path: paths.admin.assignments.create,
        // exact: true,
        // element: <AdminPage content={<></>}/>,
        // label: "Crear TP"
      }
    },
    account: {
      home: {
        path: paths.admin.account.home,
        exact: true,
        //TODO: Implement mi cuenta page
        element: <AdminPage content={<p>Mi Cuenta Page</p>}/>,
        label: "Mi cuenta"
      }
    },
  }
};