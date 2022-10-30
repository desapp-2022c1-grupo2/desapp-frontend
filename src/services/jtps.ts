import axios from "@util/axios"
import { IJtp } from "@models"
import {
  jtpAdapter,
  jtpResponseAdapter,
  IJtpResponse,
} from "@adapters"

export const getAllJtps = async (): Promise<IJtp[]> => {
  try {
    const response = await axios.get('/jtp')
    const jtpList: IJtpResponse[] = await Promise.resolve(response.data)
    return jtpList.map(jtp => jtpAdapter(jtp))
  } catch (err) {
    console.error(err)
    return []
  }
}

export const getJtp = async (id: number): Promise<IJtp | undefined> => {
  try {
    const response = await axios.get(`/jtp/${id}`)
    const jtp: IJtpResponse = await Promise.resolve(response.data)
    return jtpAdapter(jtp)
  } catch (err) {
    console.error(err)
  }
}

export const createJtp = async (newJtp: IJtp) => {
  try {
    const response = await axios.post(
      '/jtp',
      jtpResponseAdapter(newJtp),
    )
    return Promise.resolve(response.data)
  } catch (err) {
    console.error(err)
  }
}

export const updateJtp = async (jtp: IJtp) => {
  try {
    const response = await axios.patch(
      `/jtp/${jtp.id}`,
      jtpResponseAdapter(jtp),
    )
    return Promise.resolve(response.data)
  } catch (err) {
    console.error(err)
  }
}

export const deleteJtp = async (jtp: IJtp) => {
  try {
    const response = await axios.delete(`/jtp/${jtp.id}`)
    return Promise.resolve(response.data)
  } catch (err) {
    console.error(err)
  }
}

export const resetPasswordJtp = async (jtp: IJtp) => {
  try {
    const response = await axios.post(`/jtp/${jtp.id}/resetPassword`);
    return Promise.resolve(response.data)
  } catch (err) {
    console.error(err)
  }
}
