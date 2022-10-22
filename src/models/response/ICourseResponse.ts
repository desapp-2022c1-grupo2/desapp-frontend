import { ICourse } from "@models"

export interface ICourseResponse {
    id: number,
    isPreviousCourse: number,
    name: string,
    parentCourse: ICourse,
    year: number,
  }