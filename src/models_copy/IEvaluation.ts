import { IJtp } from "./IJtp"
import { IStudent } from "./IStudent"
import { ISubmitedAssignment } from "./ISubmitedAssignment"

export interface IEvaluation {
  submitedAssignment: ISubmitedAssignment,
  student: IStudent,
  jtp: IJtp,
  id: number,
  type: number,
  variable1: string ,
  variable2: string ,
  variable3: string ,
  variable4: string ,
  variable5: string ,
  reflections: string,
}