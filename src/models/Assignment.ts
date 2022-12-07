import {
  IJtpResponse,
  ICourseResponse,
  CourseAdapter,
  JtpAdapter,
  ICourse,
  IJtp,
} from "@models"
import { fixString } from "@src/util"

export interface IAssignment {
  course?: ICourse,
  jtp?: IJtp,
  id: number,
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
  jtp: IJtpResponse | null,
  course: ICourseResponse | null,
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
      name,
      ...rest
    } = assignment
    
    super({
      ...rest,
      name: fixString(name),
      course: course ? new CourseAdapter(course).json : undefined,
      jtp: jtp ? new JtpAdapter(jtp).json : undefined,
      date: {
        start: new Date(startDate),
        end: new Date(endDate),
      },
      description: {
        short: fixString(shortDescr),
        long: fixString(description),
        task: fixString(taskDescription),
      },
      individualProcess: individualProcess === 1,
      variables: [
        fixString(var1),
        fixString(var2),
        fixString(var3),
        fixString(var4),
        fixString(var5)
      ],
      status: status === 1,

    })
  }
}