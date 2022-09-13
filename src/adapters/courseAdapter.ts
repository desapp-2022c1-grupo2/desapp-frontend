import { ICourse } from '@models'
import { fixString } from '@util'

export interface ICourseResponse {
  id?: number,
  name?: string,
  parentCourseId?: number,
  year?: number,
  isPreviousCourse?: number,
}

export const courseAdapter = (course: ICourseResponse): ICourse => ({
  id: course.id,
  name: fixString(course.name || ''),
  parentCourseId: course.parentCourseId,
  year: course.year,
  isPreviousCourse: course.isPreviousCourse,
})

export const courseResponseAdapter = (course: ICourse): ICourseResponse => ({
  id: course.id,
  name: course.name,
  parentCourseId: course.parentCourseId,
  year: course.year,
  isPreviousCourse: course.isPreviousCourse,
})
