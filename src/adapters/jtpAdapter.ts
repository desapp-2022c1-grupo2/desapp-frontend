import { ICourse, IJtp, IUser } from '@models'

export interface IJtpResponse extends IUser{
  id?: number,
  name?: string,
  lastName?: string,
  email?: string,
  course?: ICourse,
}

export const jtpAdapter = (jtp: IJtpResponse): IJtp => ({
  id: jtp.id,
  name: jtp.name || '',
  lastName: jtp.lastName || '',
  email: jtp.email,
  course: jtp.course,
})

export const jtpResponseAdapter = (jtp: IJtp): IJtpResponse => ({
  id: jtp.id,
  name: jtp.name,
  lastName: jtp.lastName,
  email: jtp.email,
  course: jtp.course
})
