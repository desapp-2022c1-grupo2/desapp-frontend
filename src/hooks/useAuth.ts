import { useDispatch } from 'react-redux'
import { getAssignments } from '@store/Assignments'
import { getCourses } from '@store/courses'
import { getAdmins, getJtps, getStudents } from '@store/users'
import { login, setCredentials } from '@store/auth'
import { selectToken } from '@store'

const setupData = () => {
  const dispatch = useDispatch()
  dispatch(getAssignments())
  dispatch(getCourses())
  dispatch(getAdmins())
  dispatch(getJtps())
  dispatch(getStudents())
}

const tryLoginFromLocalStorage = () => {
  const dispatch = useDispatch()
  const user = localStorage.getItem("user")
  const email = localStorage.getItem("email")
  const token = localStorage.getItem("token")
  
  if (email && token && user) {
    dispatch(setCredentials({email, token, user: JSON.parse(user)}))
    dispatch(login())
  }
}

export const useAuth = () => {
  const token = selectToken()

  if (token) { setupData() }
  else { tryLoginFromLocalStorage() }

  return !!token
}