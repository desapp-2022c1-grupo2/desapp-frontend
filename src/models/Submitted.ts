import {
  IAssignment,
  AssignmentAdapter,
  IAssignmentResponse,
  IStudent,
  StudentAdapter,
  IStudentResponse,
} from '@models'

export interface ISubmittedResponse {
  assignment: IAssignmentResponse | null,
  student: IStudentResponse | null,
  id: number,
  members: string,
  tags: string ,
  public: boolean,
  frontPage: string,
  dataSubmitted: string,
  qualification: string,
  average: number,
  reflections: string,
  studentPublic: number,
}

export interface ISubmitted {
  id: number,
  assignment?: IAssignment,
  student?: IStudent,
  members: number[],
  tags: string[],
  public: boolean,
  cover: string,
  date: Date,
  qualification: number,
  average: number,
  reflections: string,
  studentPublic: boolean,
}

export class Submitted {
  private submitted: ISubmitted

  constructor(submitted: ISubmitted) {
    this.submitted = submitted
  }

  get date(): string {
    const date = this.submitted.date
    return `${date.getDay()}/${date.getMonth()}/${date.getFullYear()}`
  }
  get json(): ISubmitted { return this.submitted }
}

export class SubmittedAdapter extends Submitted{
  constructor(response: ISubmittedResponse){
    super({
      id: response.id,
      assignment: response.assignment ? new AssignmentAdapter(response.assignment).json : undefined,
      members: response.members.split(',').map(x => parseInt(x)) ,
      tags: response.tags.split(' '),
      public: response.public,
      cover: response.frontPage,
      date: new Date(response.dataSubmitted),
      qualification: parseFloat(response.qualification),
      average: response.average,
      reflections: response.reflections,
      studentPublic: response.studentPublic === 1,
      student: response.student ? new StudentAdapter(response.student).json : undefined
    })
  }
}