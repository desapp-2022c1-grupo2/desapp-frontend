import {
  IAssignment,
  IStudent,
} from '@models'

export interface ISubmitedAssignment {
  assignment: IAssignment,
  student: IStudent,
  id: number,
  members: number,
  tags: string ,
  public: boolean,
  frontPage: string,
  dataSubmitted: string,
  qualification: string,
  average: number,
  reflections: string,
  studentPublic: boolean,
}