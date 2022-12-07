import { IAssignment } from './Assignment'
import { ICourse } from './Course'
import { IJtp, IJtpResponse } from './Jtp'
import { IStudent, IStudentResponse, StudentAdapter } from './Student'
import { ISubmitted, ISubmittedResponse, SubmittedAdapter } from './Submitted'

import { fixString } from '@src/util'

export interface IEvaluation {
  id: number,
  assignment?: IAssignment,
  course?: ICourse,
  jtp?: IJtp,
  student?: IStudent,
  submitted?: ISubmitted,
  type: number,
  variables: number[],
  reflections: string,
}

export interface IEvaluationResponse {
  id: number,
  jtp: IJtpResponse | null,
  assignment_submitted: ISubmittedResponse | null,
  student: IStudentResponse | null,
  type: number,
  variable1: string,
  variable2: string,
  variable3: string,
  variable4: string,
  variable5: string,
  reflections: string,
}

export class Evaluation {
  private evaluation: IEvaluation

  constructor(evaluation: IEvaluation) {
    const { submitted } = evaluation

    if (submitted) {
      let _evaluation: IEvaluation = { ...evaluation }
      const {
        student,
        assignment,
        jtp,
        course,
        ..._submitted
      } = submitted

      if (_submitted) _evaluation.submitted = _submitted
      if (course) _evaluation.course = course
      if (!evaluation.assignment) _evaluation.assignment = assignment
      if (!evaluation.jtp) _evaluation.jtp = jtp
      if (!evaluation.student) _evaluation.student = student

      this.evaluation = _evaluation
    } else {
      this.evaluation = evaluation
    }
  }

  get json(): IEvaluation { return this.evaluation }
  get course(): ICourse | undefined { return this.evaluation.course }
  get jtp(): IJtp | undefined { return this.evaluation.jtp }
  get student(): IStudent | undefined { return this.evaluation.student }

  get assignment(): IAssignment | undefined {
    return this.evaluation.assignment && {
      ...this.evaluation.assignment,
      course: this.evaluation.course,
      jtp: this.evaluation.jtp
    }
  }

  get submitted(): ISubmitted | undefined {
    return this.evaluation.submitted && {
      ...this.evaluation.submitted,
      assignment: this.evaluation.assignment,
      student: this.evaluation.student,
      jtp: this.evaluation.jtp,
      course: this.course
    }
  }
}

export class EvaluationAdapter extends Evaluation {
  constructor(response: IEvaluationResponse) {
    const {
      assignment_submitted,
      jtp,
      reflections,
      student,
      variable1,
      variable2,
      variable3,
      variable4,
      variable5,
      ...rest
    } = response;

    super({
      ...rest,
      reflections: fixString(reflections),
      submitted: assignment_submitted ? new SubmittedAdapter(assignment_submitted).json : undefined,
      student: student ? new StudentAdapter(student).json : undefined,
      variables: [
        parseInt(variable1),
        parseInt(variable2),
        parseInt(variable3),
        parseInt(variable4),
        parseInt(variable5),
      ],
    })
  }
}