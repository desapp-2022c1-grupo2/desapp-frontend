import { useSelector } from "react-redux"
import { RootState } from "@store"
import { IAssignment, ICourse, IJtp, IStudent } from "@models"

export const selectAssignments = () => useSelector<RootState, IAssignment[]>(state => state.assignments.all)
export const selectCourses = () => useSelector<RootState, ICourse[]>(state => state.courses.all)
export const selectJtps = () => useSelector<RootState, IJtp[]>(state => state.user.jtps)
export const selectJtpById = (id: number | string) => useSelector<RootState, IJtp[]>(state => state.user.jtps).find(x => x.id == id)
export const selectStudents = () => useSelector<RootState, IStudent[]>(state => state.user.students)