import React from 'react'
import { useSelector } from 'react-redux'
import {
  BrowserRouter,
  Navigate,
  Routes,
  Route,
} from 'react-router-dom'
import { Iauth } from 'store/auth' 
import { RootState } from 'store' 

import { routes } from './routes'

export const Router = () => {
  const { isLogged } = useSelector<RootState, Iauth>((state) => state.auth)
  
  const AdminRoutes = (
    <Routes>
      <Route {...routes.admin.home} />
      <Route {...routes.admin.account} />
      <Route {...routes.admin.assignments} />
      <Route {...routes.admin.users} />
      <Route path='*' element={<Navigate to='/admin' />} />
    </Routes>
  )

  const LogoutRoutes = (
    <Routes>
      <Route {...routes.login}/>
      <Route path='*' element={<Navigate to='/login' />} />
    </Routes>
  )

  return (
  <BrowserRouter>
    { isLogged ? AdminRoutes : LogoutRoutes }
  </BrowserRouter>
  )
}
