import { ICourse } from "../ICourse"

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