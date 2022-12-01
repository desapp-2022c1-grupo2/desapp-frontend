import axios from "@util/axios"
import {
  IStudent,
  IStudentResponse,
  Student,
  StudentAdapter,
} from "@models"

export const getAllStudents = async (): Promise<IStudent[]> => {
  try {
      const response = await axios.get('/student')
      const studentList: IStudentResponse[] = await Promise.resolve(response.data)
      return studentList.map(student => new StudentAdapter(student).json)
  } catch (err) {
      console.error(err)
      return []
  }
}

export const fetchAllStudents = async (): Promise<IStudent[]> => {
  try {
      const response = await axios.get('/student')
      const studentList: IStudentResponse[] = await Promise.resolve(response.data)
      return studentList.map(student => new StudentAdapter(student).json)
  } catch (err) {
      console.error(err)
      return []
  }
}

export const postStudent = async (newStudent: IStudent) => {
  try {
    const student: Student = new Student(newStudent) 
    const response = await axios.post('/student', { ...(student.makeRequest()), password: student.dni || '12345678'})
    return Promise.resolve(response.data)
  } catch (err) {
    console.error(err)
  }
}

export const patchStudent = async (newStudent: IStudent) => {
  try {
    const student: Student = new Student(newStudent)
    const response = await axios.patch(`/student/${student.id}`, student.makeRequest())
    return Promise.resolve(response.data)
  } catch (err) {
    console.error(err)
  }
}

export const deleteStudent = async (id: number) => {
  try {
    const response = await axios.delete(`/student/${id}`)
    return Promise.resolve(response.data)
  } catch (err) {
    console.error(err)
  }
}
