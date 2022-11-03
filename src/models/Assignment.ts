import {
  IJtpResponse,
  ICourseResponse,
  CourseAdapter,
  JtpAdapter,
  ICourse,
  IJtp,
} from "@models"

export interface IAssignment {
  id: number,
  course: ICourse,
  jtp: IJtp,
  description: {
    short: string,
    long: string,
    task: string,
  }
  date: {
    start: Date,
    end: Date
  },
  variables: string[],
  type: number,
  status: boolean,
  individualProcess: boolean,
  number: number,
  name: string,
  url: string,
  tags: string,
}

export interface IAssignmentResponse {
  id: number,
  jtp: IJtpResponse,
  course: ICourseResponse,
  number: number,
  name: string,
  url: string,
  shortDescr: string,
  description: string,
  taskDescription: string,
  startDate: string,
  endDate: string,
  tags: string,
  var1: string,
  var2: string,
  var3: string,
  var4: string,
  var5: string,
  type: number,
  status: number,
  individualProcess: number,
}

export class Assignment {
  private _assignment: IAssignment

  constructor(assignment: IAssignment) {
    this._assignment = assignment
  }

  get start(): string{
    const start = this._assignment.date.start
    return `${start.getDay()}/${start.getMonth()}/${start.getFullYear()}`
  }
  get end(): string{
    const end = this._assignment.date.end
    return `${end.getDay()}/${end.getMonth()}/${end.getFullYear()}`
  }

  get json(): IAssignment {
    return this._assignment
  }
}

export class AssignmentAdapter extends Assignment {
  constructor(assignment: IAssignmentResponse) {
    const {
      course,
      jtp,
      shortDescr,
      description,
      taskDescription,
      startDate,
      endDate,
      var1, var2, var3, var4, var5,
      status,
      individualProcess,
      ...rest
    } = assignment
    
    super({
      ...rest,
      course: new CourseAdapter(course).json,
      jtp: new JtpAdapter(jtp).json,
      date: {
        start: new Date(startDate),
        end: new Date(endDate),
      },
      description: {
        short: shortDescr,
        long: description,
        task: taskDescription,
      },
      individualProcess: individualProcess === 1,
      variables: [var1, var2, var3, var4, var5],
      status: status === 1,

    })
  }
}