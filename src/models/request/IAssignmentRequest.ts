import { ICourse } from "../ICourse";
import { IJtp } from "../IJtp";

export interface IAssignmentResponse {
  id: string,
  jtp: IJtp,
  course: ICourse,
  number: string,
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
  type: string,
  status: string,
  individualProcess: string,
}
  