import {
  ICourse, 
  IJtp,
} from "@models"

export interface IAssignmentResponse {
  id: number,
  jtp: IJtp,
  course: ICourse,
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
  