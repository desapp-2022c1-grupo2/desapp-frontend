import axios from "axios"
import { API_URL } from '@const'

const token = localStorage.getItem('token') || ''

const axiosInstance = axios.create({
  baseURL: API_URL,
  timeout: 30000,
  headers: {'Authorization': `Bearer ${token}`}
})

export default axiosInstance