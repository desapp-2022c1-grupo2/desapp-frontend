import axios from "@util/axios"
import { AuthAdapter, IAuth, IAuthResponse, ICredentials } from "@models"
import { API_URL } from "@src/const"

export const authenticate = async (credentials: ICredentials): Promise<IAuth> => {
  try {
    const response = await axios.get(API_URL + '/auth/login', {
      params: {
        username: credentials.email,
        password: credentials.password,
      }
    })
    const data = await Promise.resolve<IAuthResponse>(response.data)
    return new AuthAdapter(data).json
  } catch (err) {
    console.error(err)
    return { token: '' }
  }
}

export const verifyCredentials = async(credentials: ICredentials): Promise<boolean> => {
  try {
    const response = await axios.get(API_URL + '/auth/login', {
      params: {
        username: credentials.email,
        password: credentials.password
      }
    })
    console.log(response)
    return response.status === 200
  } catch (err) {
    console.error(err)
    return false
  }
}