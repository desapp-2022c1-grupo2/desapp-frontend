import { IUser } from "./IUser"

export interface IAuth {
  isAuthenticated?: boolean,
  password?: string,
  token?: string,
  user?: IUser,
  email: string,
}