import axios from "@util/axios"
import {
  IAssignment,
  AssignmentAdapter,
  IAssignmentResponse,
} from "@models"

export const getAllAssignments = async (): Promise<IAssignment[]> => {
    try {
      const response = await axios.get('/assignment')
      const assignmentList: IAssignmentResponse[] = await Promise.resolve(response.data)
      return assignmentList.map(assignment => (new AssignmentAdapter(assignment)).json)
    } catch (err) {
      console.error(err)
      return []
    }
  }

  export const getAssignment = async (id: number): Promise<IAssignment | undefined> => {
    try {
      const response = await axios.get(`/assignment/${id}`)
      const assignment: IAssignmentResponse = await Promise.resolve(response.data)
      return (new AssignmentAdapter(assignment)).json
    } catch (err) {
      console.error(err)
    }
  }
