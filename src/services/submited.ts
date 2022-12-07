import axios from "@util/axios"
import {
  ISubmitted,
  ISubmittedResponse,
  SubmittedAdapter,
} from "@models"

export const getSubmittedAssignments = async (): Promise<ISubmitted[]> => {
  try {
    const response = await axios.get('/assignment_submitted')
    const data =  await Promise.resolve<ISubmittedResponse[]>(response.data)
    return data.map(x => new SubmittedAdapter(x).json)
  } catch (err) {
    console.error(err)
    return []
  }
}
