import axios from "@util/axios"
import {
  IAssignment,
  AssignmentAdapter,
  IAssignmentResponse,
} from "@models"

export const fetchAllAssignments = async (): Promise<IAssignment[]> => {
    try {
      const response = await axios.get('/assignment')
      const assignmentList: IAssignmentResponse[] = await Promise.resolve(response.data)
      return assignmentList.map(assignment => (new AssignmentAdapter(assignment)).json)
    } catch (err) {
      console.error(err)
      return []
    }
}
