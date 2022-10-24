import { ICourse } from "./ICourse"
import { IUser, IUserResponse, User, UserList } from "./User"

export interface IJtp extends IUser { course: ICourse }

export interface IJtpResponse extends IUserResponse {
  course: ICourse,
}

export class Jtp extends User {
  private _course!: ICourse
  
  constructor(jtp: IJtp | undefined) {
    if(jtp === undefined) {
      super({ id: -1, email: '', name: { first: '', last: '' } })
      this._course = {
        id: -1,
        isPreviousCourse: false,
        name: '',
        year: -1,
      }
    } else {
      const { course, ...rest } = jtp
      super(rest)
      this._course = course
      this._role = 'jtp'
    }
  }
  
  get course(): ICourse { return this._course }
  get json(): IJtp { return { ...super.json, course: this._course } }
  
  makeRequest(): IJtpResponse {
    return {
      ...super.makeRequest(),
      course: this._course
    }
  }
  adapter(response: IJtpResponse) {
    super.adapter(response)
    this._course = response.course
    
  }
}

export class JtpAdapter extends Jtp {
  constructor(response: IJtpResponse) {
    const { name, lastName, ...rest } = response
  
    super({
      ...rest,
      id: response.id,
      name: { first: '', last: ''}
    })
  }
}

export class JtpList extends UserList {
  constructor(jtps: IJtp[]) {
    super()
    this.users = jtps.map(x => new Jtp(x))
  }
}