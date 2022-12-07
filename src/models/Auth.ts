import { IAdminResponse, IAdmin } from "./Admin"
import { IJtp, IJtpResponse, JtpAdapter } from "./Jtp"
import { ICredentials } from "./User"

type IAuthUser<T, K> = T | K

export interface IAuth {
  isAuthenticated?: boolean,
  token?: string,
  user?: IAuthUser<IAdmin, IJtp>,
  credentials?: ICredentials,
}

export interface IAuthResponse {
  access_token: string,
  user: IAdminResponse | IJtpResponse,
}

export class Auth {
  private user?: IAdmin | IJtp
  private token: string
  private isAuthenticated: boolean

  constructor(auth: IAuth){
    this.user = auth.user
    this.token = auth.token || ''
    this.isAuthenticated = !!auth.isAuthenticated
  }

  get json(): IAuth {
    return {
      user: this.user,
      token: this.token,
      isAuthenticated: this.isAuthenticated
    }
  }
}

export class AuthAdapter extends Auth{
  constructor(auth: IAuthResponse){
    super({
      isAuthenticated: auth.access_token !== '',
      token: auth.access_token,
      user: new JtpAdapter(auth.user).json,
    })
  }
}