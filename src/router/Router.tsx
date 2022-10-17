import React from 'react'
import {
  BrowserRouter,
  Navigate,
  Routes,
  Route,
} from 'react-router-dom'
import { useAuth } from '@src/hooks/useAuth'
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
      <Route path='/login' element={<Navigate to='/overview' />} />
      <Route {...routes.account} />
      <Route {...routes.overview} />
      <Route {...routes.login} />
      <Route {...routes.assignments.list} />
      <Route {...routes.assignments.stats} />
      <Route {...routes.assignments.evaluations} />
      <Route {...routes.users.admins} />
      <Route {...routes.users.jtps} />
      <Route {...routes.users.students} />
    </Routes>
  </BrowserRouter>
)

export const Router = () => {
  const isLogged = useAuth()
  return isLogged
    ? <AppRoutes />
    : <LoginRoutes />
}