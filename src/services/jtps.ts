import axios from "@util/axios"
import {
  IJtp,
  IJtpResponse,
  JtpAdapter,
  Jtp,
} from "@models"

export const fetchAllJtps = async (): Promise<IJtp[]> => {
  try {
    const response = await axios.get('/jtp')
    const data: IJtpResponse[] = await Promise.resolve<IJtpResponse[]>(response.data)
    return data.map(x => (new JtpAdapter(x)).json)
  } catch (err) {
    console.error(err)
    return []
  }
}

export const fetchJtp = async (id: number): Promise<IJtp | undefined> => {
  try {
    const response = await axios.get(`/jtp/${id}`)
    const jtp: IJtpResponse = await Promise.resolve(response.data)
    return new JtpAdapter(jtp).json
  } catch (err) {
    console.error(err)
  }
}

export const postJtp = async (newJtp: IJtp) => {
  try {
    const jtp: Jtp = new Jtp(newJtp) 
    const response = await axios.post('/jtp', { ...(jtp.makeRequest()), pasword: 'unahurjtp' })
    return Promise.resolve(response.data)
  } catch (err) {
    console.error(err)
  }
}

export const patchJtp = async (newData: IJtp) => {
  try {
    const jtp: Jtp = new Jtp(newData) 
    const response = await axios.patch(`/jtp/${jtp.id}`, jtp.makeRequest())
    return Promise.resolve(response.data)
  } catch (err) {
    console.error(err)
  }
}

export const deleteJtp = async (id: number) => {
  try {
    const response = await axios.delete(`/jtp/${id}`)
    return Promise.resolve(response.data)
  } catch (err) {
    console.error(err)
  }
}
