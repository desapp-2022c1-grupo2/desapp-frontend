import { IAssignment } from '../models/IAssignment'

export interface IAssignmentResponse {
  id?: string,
  jtpId?: string,
  number?: string,
  name?: string,
  url?: string,
  shortDescr?: string,
  description?: string,
  taskDescription?: string,
  startDate?: string,
  endDate?: string,
  tags?: string,
  var1?: string,
  var2?: string,
  var3?: string,
  var4?: string,
  var5?: string,
  type?: string,
  status?: string,
  courseId?: string,
  individualProcess?: string,
}

export const assignmentAdapter = (assignment: IAssignmentResponse): IAssignment => ({
  id: assignment.id,
  jtpId: assignment.jtpId,
  number: assignment.number,
  name: assignment.name,
  url: assignment.url,
  shortDescr: assignment.shortDescr,
  description: assignment.description,
  taskDescription: assignment.taskDescription,
  startDate: assignment.startDate?.slice(0, 10),
  endDate: assignment.endDate?.slice(0, 10),
  tags: assignment.tags,
  var1: assignment.var1,
  var2: assignment.var2,
  var3: assignment.var3,
  var4: assignment.var4,
  var5: assignment.var5,
  type: assignment.type,
  status: assignment.status,
  courseId: assignment.courseId,
  individualProcess: assignment.individualProcess,
})

export const assignmentResponseAdapter = (assignment: IAssignment): IAssignmentResponse => ({
  id: assignment.id,
  jtpId: assignment.jtpId,
  number: assignment.number,
  name: assignment.name,
  url: assignment.url,
  shortDescr: assignment.shortDescr,
  description: assignment.description,
  taskDescription: assignment.taskDescription,
  startDate: assignment.startDate,
  endDate: assignment.endDate,
  tags: assignment.tags,
  var1: assignment.var1,
  var2: assignment.var2,
  var3: assignment.var3,
  var4: assignment.var4,
  var5: assignment.var5,
  type: assignment.type,
  status: assignment.status,
  courseId: assignment.courseId,
  individualProcess: assignment.individualProcess,
})