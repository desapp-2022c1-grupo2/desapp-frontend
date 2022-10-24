import {
  IUser,
  IJtpResponse,
  IUserResponse,
  IJtp,
} from '@models'
import { fixString } from '@util'

export const userAdapter = (user: IJtpResponse | IUserResponse): IUser | IJtp => ({
  ...user,
  name: {
    first: fixString(user.name || ''),
    last: fixString(user.lastName || ''),
  },
})
