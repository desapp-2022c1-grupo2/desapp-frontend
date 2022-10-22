import axios from "@util/axios"
import { ISubmitedAssignment } from "@src/models_copy"

export const getSubmitedAssignment = async (): Promise<ISubmitedAssignment[]> => {
  try {
    const response = await axios.get('/assignment_submitted')
    return Promise.resolve(response.data)
  } catch (err) {
    console.error(err)
    return []
  }
}
