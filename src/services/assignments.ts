import axios from "@util/axios"
import { IAssignment } from "@src/models_copy"
import {
  assignmentAdapter,
  assignmentResponseAdapter,
  IAssignmentResponse,
} from "@adapters"

export const getAllAssignments = async (): Promise<IAssignment[]> => {
    try {
      const response = await axios.get('/assignment')
      const assignmentList: IAssignmentResponse[] = await Promise.resolve(response.data)
      return assignmentList.map(assignment => assignmentAdapter(assignment))
    } catch (err) {
      console.error(err)
      return []
    }
  }
  
  export const getAssignment = async (id: number): Promise<IAssignment | undefined> => {
    try {
      const response = await axios.get(`/assignment/${id}`)
      const assignment: IAssignmentResponse = await Promise.resolve(response.data)
      return assignmentAdapter(assignment)
    } catch (err) {
      console.error(err)
    }
  }
  
  export const createAssignment = async (newAssignment: IAssignment) => {
    try {
      const response = await axios.post(
        '/assignment',
        assignmentResponseAdapter(newAssignment),
      )
      return Promise.resolve(response.data)
    } catch (err) {
      console.error(err)
    }
  }
  
  export const updateAssignment = async (assignment: IAssignment) => {
    try {
      const response = await axios.patch(
        `/assignment/${assignment.id}`,
        assignmentResponseAdapter(assignment),
      )
      return Promise.resolve(response.data)
    } catch (err) {
      console.error(err)
    }
  }
  
  export const deleteAssignment = async (id: number) => {
    try {
      const response = await axios.delete(`/assignment/${id}`)
      return Promise.resolve(response.data)
    } catch (err) {
      console.error(err)
    }
  }