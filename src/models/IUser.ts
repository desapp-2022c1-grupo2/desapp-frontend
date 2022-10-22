import { ICourse } from "@models"

export interface IUser {
  id: number,
  email: string,
  password?: string,
  role?: string,
  name: {
    first: string,
    last: string
  }
}

export interface IAdmin extends IUser { }

export interface IJtp extends IUser { course: ICourse }

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

