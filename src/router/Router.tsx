import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'

import { routes } from './routes'

export const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route {...routes.login}/>
      <Route {...routes.admin.account}/>
      <Route {...routes.admin.usersList}/>
      <Route {...routes.admin.assignmentsList}/>
    </Routes>
  </BrowserRouter>
);