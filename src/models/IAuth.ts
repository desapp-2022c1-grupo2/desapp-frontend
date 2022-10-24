import { IUser, ICredentials } from "@models"

export interface IAuth {
  isAuthenticated?: boolean,
  token?: string,
  user?: IUser,
  credentials?: ICredentials,
}