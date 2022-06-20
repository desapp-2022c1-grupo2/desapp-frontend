import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route, Link,
} from 'react-router-dom'

import {routes} from './routes'
import {CustomTabs} from "../components/Tab";

export const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route {...routes.login}/>
      <Route {...routes.admin.home}/>
      <Route {...routes.admin.usersList}/>
      <Route {...routes.admin.assignmentsList}/>
      <Route {...routes.admin.account}/>
    </Routes>
  </BrowserRouter>
);