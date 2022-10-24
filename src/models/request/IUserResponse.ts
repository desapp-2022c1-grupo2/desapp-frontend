import { ICourse } from "../ICourse"
import { IUser } from "../IUser"

const makeJtpRequest = () => {

}

export interface IUserResponse {
    id: number,
    name: string,
    lastName: string,
    email: string,
}

export interface IJtpResponse extends IUserResponse {
    course: ICourse,
}

export interface IStudentResponse extends IUserResponse {
    phone?: string,
    dni?: string,
    password?: string,
    birthDate?: string,
    materia_cursada?: number,
    fecha_cambio_materia_cursada?: string,
    materia_padre_cursada?: number,
    comision?: number,
    rondina?: number,
    about?: string,
    picture?: string,
    materia2?: string,
    habilitado?: number
}

interface IName {
  first: string,
  last: string,
}

class User implements IUser{
    private _id: number
    private _name: IName
    private _email: string

    constructor (
      id: number,
      firstName: string,
      lastName: string,
      email: string
    ) {
      this._id = id
      this._name = {
        first: firstName,
        last: lastName
      }
      this._email = email
    }

    get id(): number { return this._id }
    get name(): IName { return this._name }
    get email(): string { return this._email }
    get(): Object {
      return {
        name: this._name,
        email: this._email
      }
    }

    
    makeRequest(): Object {
      return {
        name: this._name.first,
        lastName: this._name.last,
        email: this._email,
      }
    }
}

export class Jtp extends User{
    private _course: ICourse

    constructor (
      id: number,
      firstName: string,
      lastName: string,
      email: string,
      course: ICourse
    ) {
      super(id, firstName, lastName, email)
      this._course = course
    }

    get() {
      return {
        ...super.get(),
        course: this._course,
      }
    }

    makeRequest(): Object {
      return {
        ...super.makeRequest(),
        course: this._course
      }
    }


}