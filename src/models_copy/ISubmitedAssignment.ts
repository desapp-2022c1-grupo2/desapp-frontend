import { IAssignment } from "./IAssignment"
import { IStudent } from "./IStudent"

export interface ISubmitedAssignment {
  assignment: IAssignment,
  student: IStudent,
  id: number,
  members: number,
  tags: string ,
  public: number, // boolean
  frontPage: string,
  dataSubmitted: string,
  qualification: string,
  average: number,
  reflections: string,
  studentPublic: number, // boolean
}