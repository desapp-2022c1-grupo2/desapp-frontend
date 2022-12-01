import axios from "@util/axios"
import {
  ICourse,
  ICourseResponse,
  CourseAdapter,
  Course
} from "@models"

export const getAllCourses = async (): Promise<ICourse[]> => {
  try {
    const response = await axios.get('/course')
    const courseList: ICourseResponse[] = await Promise.resolve(response.data)
    return courseList.map(course => new CourseAdapter(course).json)
  } catch (err) {
    console.error(err)
    return []
  }
}

export const getCourse = async (id: number): Promise<ICourse | undefined> => {
  try {
    const response = await axios.get(`/course/${id}`)
    const course: ICourseResponse = await Promise.resolve(response.data)
    return new CourseAdapter(course).json
  } catch (err) {
    console.error(err)
  }
}

export const createCourse = async (newCourse: ICourse) => {
  try {
    const response = await axios.post(
      '/course',
      new Course(newCourse).makeRequest(),
    )
    return Promise.resolve(response.data)
  } catch (err) {
    console.error(err)
  }
}

export const updateCourse = async (course: ICourse) => {
  try {
    const response = await axios.patch(
      `/course/${course.id}`,
      new Course(course).makeRequest(),
    )
    return Promise.resolve(response.data)
  } catch (err) {
    console.error(err)
  }
}

export const deleteCourse = async (id: number) => {
  try {
    const response = await axios.delete(`/course/${id}`)
    return Promise.resolve(response.data)
  } catch (err) {
    console.error(err)
  }
}
