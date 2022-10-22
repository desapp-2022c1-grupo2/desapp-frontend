import {
  IJtp,
  ICourse,
} from "@models"

export interface IAssignment {
  id: string,
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
  evaluationsVar: string[],
  type: number,
  status: boolean,
  individualProcess: boolean,
  number: string,
  name: string,
  url: string,
}