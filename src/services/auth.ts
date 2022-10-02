import axios from "@util/axios"
import { IAuth, IUser } from "@models"

export const auth = async (user: IUser): Promise<IAuth> => {
  try {
    const { password } = user
    const email = user.email || ''
    const response = await axios.post('/auth/login', {username: email, password})
    const token: string = await Promise.resolve(response.data.access_token)
    return { email , password, token }
  } catch (err) {
    console.error(err)
    return { email: '', password: '', token: '' }
  }
}