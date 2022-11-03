import { IUser, ICredentials, IJtp, IJtpResponse, IUserResponse, JtpAdapter } from "@models"

export interface IAuth {
  isAuthenticated?: boolean,
  token?: string,
  user?: IUser | IJtp,
  credentials?: ICredentials,
}

export interface IAuthResponse {
  access_token: string,
  user: IUserResponse | IJtpResponse,
}

export class Auth {
  private user?: IUser | IJtp
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