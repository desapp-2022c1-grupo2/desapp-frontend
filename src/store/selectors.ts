import { useSelector } from "react-redux"
import { RootState } from "@store"
import {
  IAdmin,
  IAssignment,
  ICourse,
  IEvaluation,
  IJtp,
  IStudent,
  ISubmitted,
  IUser
} from "@models"

export const selectAssignments = () => useSelector<RootState, IAssignment[]>(state => state.assignments.all)
export const selectCourses = () => useSelector<RootState, ICourse[]>(state => state.courses.all)
export const selectCourseById = (id: number | string) => useSelector<RootState, ICourse[]>(state => state.courses.all).find(x => x.id == id)
export const selectJtps = () => useSelector<RootState, IJtp[]>(state => state.user.jtps)
export const selectJtpById = (id: number | string) => useSelector<RootState, IJtp[]>(state => state.user.jtps).find(x => x.id == id)
export const selectStudents = () => useSelector<RootState, IStudent[]>(state => state.user.students)
export const selectAdmins = () => useSelector<RootState, IAdmin[]>(state => state.user.admins)
export const selectIsAuthenticated = () => useSelector<RootState, boolean | undefined >((state) => state.auth.isAuthenticated)
export const selectToken = () => useSelector<RootState, string | undefined >((state) => state.auth.token)
export const selectAuthenticatedUser = () => useSelector<RootState, IUser | undefined >((state) => state.auth.user)
export const selectSidebar = () => useSelector<RootState, boolean >((state) => state.misc.sidebar)
export const selectRole = () => useSelector<RootState, string>((state) => state.auth.user?.role || '')

export const selectUpdateJtpModal = () => useSelector<RootState, boolean >((state) => state.modals.jtp.update)
export const selectUpdateAdminModal = () => useSelector<RootState, boolean >((state) => state.modals.admin.update)
export const selectUpdateStudentModal = () => useSelector<RootState, boolean >((state) => state.modals.student.update)
export const selectLogoutModal = () => useSelector<RootState, boolean >((state) => state.modals.logout)

export const selectDeleteJtpModal = () => useSelector<RootState, boolean >((state) => state.modals.jtp.delete)
export const selectDeleteAdminModal = () => useSelector<RootState, boolean >((state) => state.modals.admin.delete)
export const selectDeleteStudentModal = () => useSelector<RootState, boolean >((state) => state.modals.student.delete)


export const getJtpSelected = () => useSelector<RootState, IJtp | undefined>((state) => state.modals.jtp.selected)
export const getAdminSelected = () => useSelector<RootState, IAdmin | undefined>((state) => state.modals.admin.selected)
export const getStudentSelected = () => useSelector<RootState, IStudent | undefined>((state) => state.modals.student.selected)

export const selectSubmitted = () => useSelector<RootState, ISubmitted[]>((state) => state.assignments.submited)
export const selectEvaluationsd = () => useSelector<RootState, IEvaluation[]>((state) => state.assignments.evaluations)

export const selectPasswordResetJtpModal = () => useSelector<RootState, boolean >((state) => state.modals.jtp.passwordReset)
