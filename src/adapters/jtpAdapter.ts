import {
  IJtp,
  IJtpResponse,
} from '@models'
import { fixString } from '@util'

export const jtpAdapter = (jtp: IJtpResponse): IJtp => ({
  id: jtp.id,
  name: {
    first: fixString(jtp.name || ''),
    last: fixString(jtp.lastName || ''),
  },
  email: jtp.email,
  course: jtp.course,
})

export const jtpRequestAdapter = (jtp: IJtp): IJtpResponse => ({
  id: jtp.id,
  name: jtp.name.first,
  lastName: jtp.name.last,
  email: jtp.email,
  course: jtp.course
})
