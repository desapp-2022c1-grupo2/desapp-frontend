import { ICourse, IJtp, IUser, IUserResponse, User, UserList } from "@models"

export interface IStudent extends IUser {
  password?: string,
  phone: string,
  dni: string,
  birthdate: Date,
  comision: number,
  rondina: number,
  about: string,
  picture: string,
  courses: {
    current: number
    others: number[],
    parent: number,
    lastChangeDate: Date,
  },
  isEnabled: boolean
}

export interface IStudentResponse extends IUserResponse {
  phone: string | null,
  dni: string,
  password?: string,
  birthDate: string,
  materia_cursada: number,
  fecha_cambio_materia_cursada: string,
  materia_padre_cursada: number,
  comision: number,
  rondina: number,
  about: string | null,
  picture: string | null,
  materia2: string ,
  habilitado: number
}

export class Student extends User {
  private _password: string | undefined
  private _phone: string
  private _dni: string
  private _birthdate: Date
  private _comision: number
  private _picture: string
  private _rondina: number
  private _about: string
  private _courses: {
    current: number,
    others: number[],
    parent: number,
    lastChangeDate: Date,
  }
  _isEnabled: boolean
  
  constructor(student: IStudent) {
      const { phone, picture, dni, birthdate, comision, rondina, about, courses, isEnabled, ...rest } = student
      super(rest)
      this._about = about
      this._birthdate = birthdate
      this._comision = comision
      this._courses = courses
      this._dni = dni
      this._picture = picture
      this._isEnabled = isEnabled
      this._phone = phone
      this._role = 'student'
      this._rondina = rondina
  }
  
  get course(): ICourse | number { return this._courses.current }
  
  get phone(): string { return this._phone }
  get dni(): string { return this._dni }
  get birthdate(): Date { return this._birthdate }
  get comision(): number { return this._comision }
  get rondina(): number { return this._rondina }
  get about(): string { return this._about }
  get isEnabled(): boolean { return this._isEnabled }

  get json(): IStudent {
    return {
      ...super.json,
      about: this._about,
      birthdate: this._birthdate,
      comision: this._comision,
      courses: this._courses,
      dni: this._dni,
      isEnabled: this._isEnabled,
      phone: this._phone,
      picture: this._picture,
      role: this._role,
      rondina: this._rondina,
    }
  }

  makeRequest(): IStudentResponse {
    return {
      ...super.makeRequest(),
      phone: this._phone,
      dni: this._dni,
      password: this._password,
      birthDate: this._birthdate.toDateString(),
      materia_cursada: 0, // this._courses.current,
      fecha_cambio_materia_cursada: this._courses.lastChangeDate.toDateString(),
      materia_padre_cursada: this._courses.parent,
      comision: this._comision,
      rondina: this._rondina,
      about: this._about,
      picture: this._picture,
      materia2: this._courses.others.join(),
      habilitado: this._isEnabled ? 1 : 0,
    }
  }
}

export class StudentAdapter extends Student {
  constructor(response: IStudentResponse) {
    const {
      phone,
      picture,
      about,
      birthDate,
      materia_cursada,
      fecha_cambio_materia_cursada,
      materia_padre_cursada,
      name,
      lastName,
      materia2,
      habilitado,
      ...rest
    } = response
  
    super({
      ...rest,
      about: about || '',
      phone: phone || '',
      picture: picture || '',
      name: { first: name, last: lastName },
      birthdate: new Date(birthDate),
      courses: {
        current: materia_cursada,
        others: materia2.split(',').map(x => parseInt(x)),
        parent: materia_padre_cursada,
        lastChangeDate: new Date(fecha_cambio_materia_cursada),
      },
      isEnabled: habilitado !== 0
    })
  }
}

export class StudentList extends UserList {
  constructor(student: IStudent[]) {
    super()
    this.users = student.map(x => new Student(x))
  }
}