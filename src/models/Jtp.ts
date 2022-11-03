import {
  Course,
  CourseAdapter,
  ICourse,
  ICourseResponse,
  IUser,
  IUserResponse,
  User,
  UserList,
} from "@models"

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
  get json(): IJtp { return { ...super.json, course: this._course } }

  makeRequest(): IJtpResponse {
    return {
      ...super.makeRequest(),
      course: this._course ? new Course(this._course).makeRequest() : null
    }
  }
}

export class JtpAdapter extends Jtp {
  constructor(response: IJtpResponse | IUserResponse) {
    const { course, name, lastName, ...rest } = response
  
    super({
      ...rest,
      course: course ? new CourseAdapter(course).json : undefined,
      id: response.id,
      name: { first: name, last: lastName }
    })
  }
}

export class JtpList extends UserList {
  constructor(jtps: IJtp[]) {
    super()
    this.users = jtps.map(x => new Jtp(x))
  }
}