import axios from "@util/axios"
import {
  IEvaluation,
  IEvaluationResponse,
  EvaluationAdapter
} from "@models"

export const fetchEvaluation = async (): Promise<IEvaluation[]> => {
  try {
    const response = await axios.get('/evaluation')
    const data =  await Promise.resolve<IEvaluationResponse[]>(response.data)
    return data
      .filter(x => x.assignment_submitted !== null)
      .map(x => new EvaluationAdapter(x).json)
  } catch (err) {
    console.error(err)
    return []
  }
}
