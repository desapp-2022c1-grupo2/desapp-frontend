import { IUser } from "@models"

export interface IAuthResponse {
  access_token: string,
  email: string,
  password: string,
  user: IUser,
}