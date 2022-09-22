import { useAuth } from '@src/hooks/useAuth'
import React from 'react'
import {
  BrowserRouter,
  Navigate,
  Routes,
  Route,
} from 'react-router-dom'
import { routes } from './routes'

const LoginRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route {...routes.login}/>
      <Route path='/*' element={<Navigate to='/login' />} />
    </Routes>
  </BrowserRouter>
)

const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route {...routes.admin.home} />
      <Route {...routes.admin.account} />
      <Route {...routes.admin.assignments} />
      <Route {...routes.admin.students} />
      <Route {...routes.admin.jtps} />
      <Route path='/login' element={<Navigate to='/admin/jtps' />} />
    </Routes>
  </BrowserRouter>
)

export const Router = () => {
  const isLogged = useAuth()
  return isLogged ? <AppRoutes /> : <LoginRoutes />
}