import {
  IStudent,
  IStudentResponse,
} from "@models"
import { fixString } from '@util'

export const studentAdapter = (student: IStudentResponse): IStudent => {
  let date: number[] = student.birthDate.split('-').map((x: string) => parseInt(x))
  let changeDate: number[] = student.fecha_cambio_materia_cursada.split('-').map((x: string) => parseInt(x))

  return ({
    id: student.id,
    name: {
      first: fixString(student.name || ''),
      last: fixString(student.lastName || ''),
    },
    email: student.email,
    password: student.password,
    phone: student.phone,
    dni: student.dni,
    birthdate: new Date(date[0], date[1], date[2]),
    courses: {
      main: student.materia_cursada,
      all: student.materia2.split(',').map(x => parseInt(x)),
      parent: student.materia_padre_cursada,
    },
    courseChange: new Date(changeDate[0], changeDate[1], changeDate[2]),
    comision: student.comision,
    rondina: student.rondina,
    about: fixString( student.about || ''),
    picture: student.picture,
    habilitado: student.habilitado,
  })
}

export const studentResponseAdapter = (student: IStudent): IStudentResponse => {
  const birthdate = `
    ${student.birthdate.getFullYear()}-
    ${student.birthdate.getMonth()}-
    ${student.birthdate.getDay}
  `

  const courseChange = `
    ${student.courseChange.getFullYear()}-
    ${student.courseChange.getMonth()}-
    ${student.courseChange.getDay}
  `

  const allCourses: string = student.courses.all.join()
  
  return {
    id: student.id,
    name: student.name.first,
    lastName: student.name.first,
    email: student.email,
    phone: student.phone,
    dni: student.dni,
    birthDate: birthdate,
    materia_cursada: student.courses.main,
    fecha_cambio_materia_cursada: courseChange,
    materia_padre_cursada: student.courses.parent,
    comision: student.comision,
    rondina: student.rondina,
    about: student.about,
    picture: student.picture,
    password: student.password,
    materia2: allCourses,
    habilitado: student.habilitado,
  }
}
