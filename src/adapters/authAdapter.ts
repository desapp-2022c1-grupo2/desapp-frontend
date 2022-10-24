import {
  IAuth,
  IAuthResponse,
} from '@models'

export const authAdapter = (auth: IAuthResponse): IAuth => ({
  token: auth.access_token,
  user: auth.user,
})
