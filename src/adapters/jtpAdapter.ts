import { IJtp } from '../models/IJtp'

export interface IJtpResponse {
  id?: number,
  name?: string,
  lastName?: string,
  email?: string,
  createdAt?: string,
  courseId?: number,
  updatedAt?: string,
}

export const jtpAdapter = (jtp: IJtpResponse): IJtp => ({
  id: jtp.id,
  name: jtp.name,
  lastName: jtp.lastName,
  email: jtp.email,
  courseId: jtp.courseId,
  createdAt: jtp.createdAt,
  updatedAt: jtp.updatedAt,
})

export const jtpResponseAdapter = (jtp: IJtp): IJtpResponse => ({
  id: jtp.id,
  name: jtp.name,
  lastName: jtp.lastName,
  email: jtp.email,
  courseId: jtp.courseId,
  createdAt: jtp.createdAt,
  updatedAt: jtp.updatedAt,
})
