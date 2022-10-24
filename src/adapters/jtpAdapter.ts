import {
  IJtp,
  IJtpResponse,
} from '@models'
import { fixString } from '@util'

export const jtpAdapter = ({ name, lastName, ...rest}: IJtpResponse): IJtp => ({
  ...rest,
  name: {
    first: fixString(name || ''),
    last: fixString(lastName || ''),
  },
})

export const jtpRequestAdapter = (jtp: IJtp): IJtpResponse => ({
  id: jtp.id,
  name: jtp.name.first,
  lastName: jtp.name.last,
  email: jtp.email,
  course: jtp.course
})
