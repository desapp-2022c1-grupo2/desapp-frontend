import { IAuth, IUser, ICredentials } from "@models"

export const isUserAlreadyAuthenticated = (authData: IAuth) => !!(authData.token && authData.user)

export const getUserFromLocalStorage = () => JSON.parse(localStorage.getItem("user") || '{}')

export const cleanLocalStorage = () => {
  localStorage.removeItem("user")
  localStorage.removeItem("token")
}

export const setTokenInLocalStorage = (token: string | undefined) => {
  if (token) localStorage.setItem('token', token)
}

export const setUserInLocalStorage = (user: IUser | ICredentials | undefined) => {
  if (user) localStorage.setItem('user', JSON.stringify(user))
}