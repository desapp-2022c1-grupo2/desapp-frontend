import { IJtp, IUser } from '@models'
import { fixString } from '@util'

export interface IJtpResponse extends IUser{
  id?: number,
  name?: string,
  lastName?: string,
  email?: string,
  courseId?: number,
}

export const jtpAdapter = (jtp: IJtpResponse): IJtp => ({
  id: jtp.id,
  name: fixString(jtp.name || ''),
  lastName: fixString(jtp.lastName || ''),
  email: jtp.email,
  courseId: jtp.courseId,
})

export const jtpResponseAdapter = (jtp: IJtp): IJtpResponse => ({
  id: jtp.id,
  name: jtp.name,
  lastName: jtp.lastName,
  email: jtp.email,
  courseId: jtp.courseId
})
