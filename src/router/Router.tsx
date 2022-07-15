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
      <Route {...routes.admin.home}/>
      <Route {...routes.admin.account.home}/>

      {/*Users*/}
      <Route {...routes.admin.users.home}/>
      <Route {...routes.admin.users.create}/>

      {/*Assignments*/}
      <Route {...routes.admin.assignments.home}/>

    </Routes>
  </BrowserRouter>
)