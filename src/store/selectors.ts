import { useSelector } from "react-redux"
import { RootState } from "@store"
import {
  IAdmin,
  IAssignment,
  ICourse,
  IJtp,
  IStudent,
  IUser
} from "@models"

export const selectAssignments = () => useSelector<RootState, IAssignment[]>(state => state.assignments.all)
export const selectCourses = () => useSelector<RootState, ICourse[]>(state => state.courses.all)
export const selectJtps = () => useSelector<RootState, IJtp[]>(state => state.user.jtps)
export const selectJtpById = (id: number | string) => useSelector<RootState, IJtp[]>(state => state.user.jtps).find(x => x.id == id)
export const selectStudents = () => useSelector<RootState, IStudent[]>(state => state.user.students)
export const selectAdmins = () => useSelector<RootState, IAdmin[]>(state => state.user.admins)
export const selectIsAuthenticated = () => useSelector<RootState, boolean | undefined >((state) => state.auth.isAuthenticated)
export const selectToken = () => useSelector<RootState, string | undefined >((state) => state.auth.token)
export const selectLogedUser = () => useSelector<RootState, IUser | undefined >((state) => state.auth.user)