import {IJtp} from "@models/IJtp";
import {ICourse} from "@models/ICourse";

export interface IAssignment {
  id: string,
  jtp: IJtp,
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
  course: ICourse,
  individualProcess: string,
}
