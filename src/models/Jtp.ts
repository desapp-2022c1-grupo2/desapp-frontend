export interface IJtp {
  id?: number
  name?: string
  lastName?: string
  email?: string
  courseId?: number
  createdAt?: string
  updatedAt?: string
}

export class Jtp {
  public id?: number
  public name?: string
  public lastName?: string
  public email?: string
  public courseId?: number
  public createdAt?: string
  public updatedAt?: string

  constructor(jtp: IJtp) {
    this.id = jtp ? jtp.id : -1
    this.name = jtp ? jtp.name : ""
    this.lastName = jtp ? jtp.lastName : ""
    this.email = jtp ? jtp.email : ""
    this.courseId = jtp ? jtp.courseId : -1
    this.createdAt = jtp ? jtp.createdAt : ""
    this.updatedAt = jtp ? jtp.updatedAt : ""
  }
}
