import { useDispatch, useSelector } from 'react-redux'
import { getAssignments } from '@store/Assignments'
import { getCourses } from '@store/courses'
import { getJtps, getStudents } from '@store/users'
import { IAuth } from '@models'
import { requestLogin } from '@store/auth'
import { RootState } from '@store'

const setupData = () => {
  const dispatch = useDispatch()
  dispatch(getAssignments())
  dispatch(getCourses())
  dispatch(getJtps())
  dispatch(getStudents())
}

const tryLoginFromLocalStorage = () => {
  const dispatch = useDispatch()
  const email = localStorage.getItem("email")
  const password = localStorage.getItem("password")
  if (email && password) dispatch(requestLogin({ email, password }))
}

export const useAuth = () => {
  const { isLogged } = useSelector<RootState, IAuth>((state) => state.auth)

  if (isLogged) { setupData() }
  else { tryLoginFromLocalStorage() }

  return isLogged
}