import axios from "@util/axios"
import { IAuth, IUser } from "@src/models_copy"

export const auth = async (_user: IUser): Promise<IAuth> => {
  try {
    const { password } = _user
    const email = _user.email || ''
    const response = await axios.get('/auth/login', {
      params: {
        username: email,
        password
      }
    })
    const { access_token, user } = response.data
    return { email , password, user, token: access_token }
  } catch (err) {
    console.error(err)
    return { email: '', password: '', token: '' }
  }
}

export const verifyCredentials = async(email: string, password: string): Promise<boolean> => {
  try {
    const response = await axios.get('/auth/login', {
      params: {
        username: email,
        password
      }
    })
    return response.status === 200
  } catch (err) {
    console.error(err)
    return false
  }
}