import { IUser } from "@models"

export interface IAuth {
  isAuthenticated?: boolean,
  token?: string,
  user?: IUser,
}