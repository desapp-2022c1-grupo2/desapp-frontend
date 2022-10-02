import { useDispatch, useSelector } from 'react-redux'
import { getAssignments } from '@store/Assignments'
import { getCourses } from '@store/courses'
import { getJtps, getStudents } from '@store/users'
import { login, setCredentials } from '@store/auth'
import { selectToken } from '@store'

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
  const token = localStorage.getItem("token")
  if (email && token) {
    dispatch(setCredentials({email, token}))
    dispatch(login())
  }
}

export const useAuth = () => {
  const token = selectToken()

  if (token) { setupData() }
  else { tryLoginFromLocalStorage() }

  return !!token
}