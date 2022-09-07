import { ICourse } from '../models/ICourse'

export interface ICourseResponse {
  id?: number,
  name?: string,
  parentCourseId?: number,
  year?: number,
  isPreviousCourse?: number,
  createdAt?: string,
  updatedAt?: string,
}

export const courseAdapter = (course: ICourseResponse): ICourse => ({
  id: course.id,
  name: course.name,
  parentCourseId: course.parentCourseId,
  year: course.year,
  isPreviousCourse: course.isPreviousCourse,
  createdAt: course.createdAt?.slice(0, 10),
  updatedAt: course.updatedAt?.slice(0, 10),
})

export const courseResponseAdapter = (course: ICourse): ICourseResponse => ({
  id: course.id,
  name: course.name,
  parentCourseId: course.parentCourseId,
  year: course.year,
  isPreviousCourse: course.isPreviousCourse,
  createdAt: course.createdAt,
  updatedAt: (new Date()).toUTCString(),
})
