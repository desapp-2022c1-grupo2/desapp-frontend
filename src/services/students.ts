import axios from "@util/axios"
import { IStudentResponse, studentAdapter } from "@adapters"
import { IStudent } from "@src/models_copy"

export const getAllStudents = async (): Promise<IStudent[]> => {
  try {
      const response = await axios.get('/student')
      const studentList: IStudentResponse[] = await Promise.resolve(response.data)
      return studentList.map(student => studentAdapter(student))
  } catch (err) {
      console.error(err)
      return []
  }
}
