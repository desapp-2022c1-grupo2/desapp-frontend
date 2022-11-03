import {
  IAssignment,
  ICourse,
  IJtp,
  IStudent,
  ISubmitedAssignment,
} from '@models'

export interface IEvaluation {
  id: number,
  jtp: IJtp,
  student: IStudent,
  submitedAssignment: ISubmitedAssignment,
  type: number,
  variables: string[],
  reflections: string,
}

export class Evaluation {
  private evaluation: IEvaluation

  constructor(evaluation: IEvaluation) {
    this.evaluation = evaluation
  }

  get json(): IEvaluation { return this.evaluation }
  get jtp(): IJtp { return this.evaluation.jtp }
  get student(): IStudent { return this.evaluation.student }
  get submit(): ISubmitedAssignment { return this.submit }
  get assignment(): IAssignment { return this.submit.assignment }
  get course(): ICourse { return this.submit.assignment.course }
}