import {
  IAssignment,
  IStudent,
} from "@models"

export interface ISubmitedResponse {
  assignment: IAssignment,
  student: IStudent,
  id: number,
  members: number,
  tags: string ,
  public: number,
  frontPage: string,
  dataSubmitted: string,
  qualification: string,
  average: number,
  reflections: string,
  studentPublic: number,
}