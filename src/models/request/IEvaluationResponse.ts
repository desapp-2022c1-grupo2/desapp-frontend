import { IJtp, IStudent, ISubmitedAssignment} from "@models"

export interface IEvaluation {
  id: number,
  jtp: IJtp,
  student: IStudent,
  submitedAssignment: ISubmitedAssignment,
  type: number,
  evaluationsVar: string[],
  reflections: string,
}