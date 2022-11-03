import { useDispatch } from 'react-redux'
import {
  getAdmins,
  getAssignments,
  getCourses,
  getJtps,
  getStudents,
  getSubmitted,
  login,
  selectToken,
  setToken,
  setUser,
} from '@store'

const updateStore = () => {
  const dispatch = useDispatch()

  dispatch(getAssignments())
  dispatch(getCourses())
  dispatch(getAdmins())
  dispatch(getJtps())
  dispatch(getStudents())
  dispatch(getSubmitted())
}

const tryLoginFromLocalStorage = () => {
  const dispatch = useDispatch()
  const user = localStorage.getItem("user")
  const token = localStorage.getItem("token")
  
  if (token && user) {
    dispatch(setUser(JSON.parse(user)))
    dispatch(setToken(token))
    dispatch(login())
  }
}

export const useAuth = () => {
  const token = selectToken()

  if (token) { updateStore() }
  else { tryLoginFromLocalStorage() }

  return !!token
}