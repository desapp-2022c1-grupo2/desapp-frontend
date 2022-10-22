export interface ICourse {
  id: number,
  isPreviousCourse: boolean,
  name: string,
  parent: ICourse,
  year: number,
}