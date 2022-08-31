import axios from "axios"
import { API_URL } from "../const"
import { IJtp } from "../models"
import {
  jtpAdapter,
  jtpResponseAdapter,
  IJtpResponse,
} from "../adapters"

export const getAllJtps = async (): Promise<IJtp[]> => {
  try {
    const response = await axios.get(`${API_URL}/jtp`)
    const jtpList: IJtpResponse[] = await Promise.resolve(response.data)
    return jtpList.map(jtp => jtpAdapter(jtp))
  } catch (err) {
    console.error(err)
    return []
  }
}

export const getJtp = async (id: number): Promise<IJtp | undefined> => {
  try {
    const response = await axios.get(`${API_URL}/jtp/${id}`)
    const jtp: IJtpResponse = await Promise.resolve(response.data)
    return jtpAdapter(jtp)
  } catch (err) {
    console.error(err)
  }
}

export const createJtp = async (newJtp: IJtp) => {
  try {
    const response = await axios.post(`${API_URL}/jtp`, jtpResponseAdapter(newJtp))
    return Promise.resolve(response.data)
  } catch (err) {
    console.error(err)
  }
}

export const updateJtp = async (jtp: IJtp) => {
  try {
    const response = await axios.put(`${API_URL}/jtp/${jtp.id}`, jtpResponseAdapter(jtp))
    return Promise.resolve(response.data)
  } catch (err) {
    console.error(err)
  }
}

export const deleteJtp = async (id: number) => {
  try {
    const response = await axios.delete(`${API_URL}/jtp/${id}`)
    return Promise.resolve(response.data)
  } catch (err) {
    console.error(err)
  }
}
