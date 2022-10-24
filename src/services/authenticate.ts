import axios from "@util/axios"
import { IAuth, ICredentials } from "@models"

export const authenticate = async (credentials: ICredentials): Promise<IAuth> => {
  try {
    const response = await axios.get('/auth/login', {
      params: {
        username: credentials.email,
        password: credentials.password,
      }
    })
    const { access_token, user } = response.data
    return { user, token: access_token }
  } catch (err) {
    console.error(err)
    return { token: '' }
  }
}

export const verifyCredentials = async(credentials: ICredentials): Promise<boolean> => {
  try {
    const response = await axios.get('/auth/login', {
      params: {
        username: credentials.email,
        password: credentials.password
      }
    })
    return response.status === 200
  } catch (err) {
    console.error(err)
    return false
  }
}