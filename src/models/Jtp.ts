import {
  Course,
  CourseAdapter,
  IAdmin,
  ICourse,
  ICourseResponse,
  IUser,
  IUserResponse,
  User,
} from "@models"
import { deleteJtp, patchJtp } from "@src/services"
import { fixString } from "@src/util"
import {resetPasswordForUser} from "@services/passwordReset";

export interface IJtp extends IUser { course?: ICourse, }

export interface IJtpResponse extends IUserResponse {
  course?: ICourseResponse | null,
}

export class Jtp extends User {
  private _course?: ICourse
  
  constructor(jtp: IJtp | undefined) {
    if(jtp === undefined) {
      super({ id: -1, email: '', name: { first: '', last: '' } })
      this._course = {
        id: -1,
        isPreviousCourse: false,
        parent: -1,
        name: '',
      }
    } else {
      const { course, ...rest } = jtp
      super(rest)
      this._course = course
    }
  }
  
  get course(): ICourse | undefined { return this._course }
  set course(course: ICourse | undefined) { this._course = course }
  get json(): IJtp { return { ...super.json, course: this._course } }
  async delete(): Promise<any> { return deleteJtp(this._id || -1) }
  async patch(): Promise<any> { return patchJtp(this.json) }
  async resetPassword(): Promise<any> { await resetPasswordForUser(this.email, "JTP", this.id) }

  makeRequest(): IJtpResponse {
    return {
      ...super.makeRequest(),
      course: this._course ? new Course(this._course).makeRequest() : null
    }
  }
}

export class JtpAdapter extends Jtp {
  constructor(response: IJtpResponse | IUserResponse) {
    //TODO: Marcaba aca. response = undefined

    const { course, name, lastName, ...rest } = response
  
    super({
      ...rest,
      course: course ? new CourseAdapter(course).json : undefined,
      name: { first: fixString(name), last: fixString(lastName) }
    })
  }
}
