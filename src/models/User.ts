import {BaseEntity} from "./BaseEntity";

export interface User extends BaseEntity {
  lastName: string,
  email: string,
  courseId: number,
}
