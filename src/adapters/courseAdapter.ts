import {
  ICourse,
  ICourseResponse
} from '@models'
import { fixString } from '@util'


export const courseAdapter = (course: ICourseResponse): ICourse => ({
  id: course.id,
  name: fixString(course.name || ''),
  parent: course.parentCourse,
  year: course.year,
  isPreviousCourse: course.isPreviousCourse !== 0,
})

export const courseResponseAdapter = (course: ICourse): ICourseResponse => ({
  id: course.id,
  name: course.name,
  parentCourse: course.parent,
  year: course?.year,
  isPreviousCourse: course.isPreviousCourse ? 1 : 0,
})
