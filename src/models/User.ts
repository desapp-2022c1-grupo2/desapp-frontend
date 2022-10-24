import { IJtpResponse, Jtp } from "./Jtp"
import { IStudentResponse } from "./response/IUserResponse"

export interface ICredentials {
    email: string,
    password?: string,
  }

export interface IUser extends ICredentials{
    id?: number,
    role?: string,
    name: {
      first: string,
      last: string
    }
  }

export interface IUserResponse {
    id?: number,
    role?: string,
    name: string,
    lastName: string,
    email: string,
}

interface IName {
    first: string,
    last: string,
  }
  
export class User {
  protected _id: number | undefined
  protected _role: string | undefined
  protected _name!: IName
  protected _email!: string

  constructor(user: IUser | undefined) {
    if(user === undefined) return

    this._id = user.id
    this._name = {
      first: user.name.first,
      last: user.name.last,
    }
    this._email = user.email
    this._role = user.role
  }

  get id(): number { return this._id || -1 }
  get name(): IName { return this._name }
  get email(): string { return this._email }
  get role(): string | undefined { return this._role }
  
  get json(): IUser {
    return {
      id: this._id,
      email: this._email,
      name: this._name,
      role: this._role,
    }
  }  

  adapter(response: IUserResponse | IJtpResponse | IStudentResponse) {
    if (response.id) this._id = response.id,
    this._email = response.email
    this._name = {
      first: response.name,
      last: response.lastName
    }
    this._role = this.role
  }

  fullName(): string {
    return `${this._name.first} ${this._name.last}`
  }

  makeRequest(): IUserResponse {
    return {
      name: this._name.first,
      lastName: this._name.last,
      email: this._email,
    }
  }
}

export class UserAdapter extends User {
  constructor(response: IUserResponse) {
    const { name, lastName, ...rest } = response
  
    super({
      ...rest,
      id: response.id || -1,
      name: { first: '', last: ''}
    })
  }
}

export abstract class UserList {
  protected users!: User[] | Jtp[]

  get(): IUser[] {
    return this.users.map(x => x.json)
  }
} 