import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  BrowserRouter,
  Navigate,
  Routes,
  Route,
} from 'react-router-dom'
import { IAuth } from '@models'
import { requestLogin } from '@store/auth'
import { RootState } from '@store' 
import { routes } from './routes'

import { getAssignments } from '@store/Assignments'
import { getCourses } from '@store/courses'
import { getJtps, getStudents } from '@store/users'


export const Router = () => {
  const { isLogged } = useSelector<RootState, IAuth>((state) => state.auth)
  const dispatch = useDispatch()

  React.useEffect(
    () => {
      if(!isLogged) {
        const localEmail = localStorage.getItem("email")
        const localPass = localStorage.getItem("password")
        if (localEmail && localPass) dispatch(requestLogin({ email: localEmail, password: localPass }))
      } else {
        dispatch(getAssignments())
        dispatch(getCourses())
        dispatch(getJtps())
        dispatch(getStudents())
      }
    },
    [isLogged]
  )

  const AdminRoutes = (
    <Routes>
      <Route {...routes.admin.home} />
      <Route {...routes.admin.account} />
      <Route {...routes.admin.assignments} />
      <Route {...routes.admin.students} />
      <Route {...routes.admin.jtps} />
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
