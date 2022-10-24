import { IUser } from "@models"

export interface IAuthResponse {
  access_token: string,
  user: IUser,
}