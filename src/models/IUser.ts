import { ICourse } from "@models"

export interface ICredentials {
  email: string,
  password?: string,
}

export interface IUser extends ICredentials{
  id: number,
  role?: string,
  name: {
    first: string,
    last: string
  }
}

export interface IAdmin extends IUser { }



export interface IStudent extends IUser {
  courses: {
    all: number[],
    main: ICourse,
    parent: ICourse,
  }
  phone: string,
  dni: string,
  birthdate: Date,
  courseChange: Date,
  comision: number,
  rondina: number,
  about: string,
  picture: string,
  habilitado: number
}

