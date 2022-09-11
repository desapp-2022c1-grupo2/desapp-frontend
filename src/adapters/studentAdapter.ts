import { IStudent } from "@models"
import { fixString } from '@util'

export interface IStudentResponse {
  id?: number,
  name?: string,
  lastName?: string,
  email?: string,
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
export const studentAdapter = (student: IStudentResponse): IStudent => {
  return ({
    id: student.id,
    name: fixString(student.name || ''),
    lastName: fixString( student.lastName || ''),
    email: student.email,
    password: student.password,
    phone: student.phone,
    dni: student.dni,
    birthDate: student.birthDate,
    materia_cursada: student.materia_cursada,
    fecha_cambio_materia_cursada: student.fecha_cambio_materia_cursada,
    materia_padre_cursada: student.materia_padre_cursada,
    comision: student.comision,
    rondina: student.rondina,
    about: fixString( student.about || ''),
    picture: student.picture,
    materia2: fixString( student.materia2 || ''),
    habilitado: student.habilitado,
  })
}
export const studentResponseAdapter = (student: IStudent): IStudentResponse => ({
  id: student.id,
  name: student.name,
  lastName: student.lastName,
  email: student.email,
  phone: student.phone,
  dni: student.dni,
  birthDate: student.birthDate,
  materia_cursada: student.materia_cursada,
  fecha_cambio_materia_cursada: student.fecha_cambio_materia_cursada,
  materia_padre_cursada: student.materia_padre_cursada,
  comision: student.comision,
  rondina: student.rondina,
  about: student.about,
  picture: student.picture,
  materia2: student.materia2,
  habilitado: student.habilitado,
})
