import React, {
  ChangeEventHandler,
  createContext,
  ReactNode,
  useEffect,
  useState,
} from "react"
import { inputChangeEvent } from "@const"
import { ICourse, Jtp } from "@models"
import { selectAuthenticatedUser, selectCourses } from "@store"
import { SelectChangeEvent } from "@mui/material"

  interface jtpContextValues {
    course?: ICourse,
    email: string,
    firstname: string,
    lastname: string,
    password: string,
    isOpenUpdate: boolean,
    isFormUncompleted: boolean,
    openUpdate: Function,
    closeUpdate: Function,
    clearPassword: Function,
    handleCourse: (event: SelectChangeEvent<unknown>) => void,
    handleEmail: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>,
    handleFirstname: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>,
    handleLastname: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>,
    handlePassword: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>,
    getJtp: Function,
  }
  
  const defaultValues: jtpContextValues= {
    email: '',
    firstname: '',
    lastname: '',
    password: '',
    isFormUncompleted: false,
    isOpenUpdate: false,
    openUpdate: () => {},
    closeUpdate: () => {},
    clearPassword: () => {},
    handleCourse: () => {},
    handleEmail: () => {},
    handleFirstname: () => {},
    handleLastname: () => {},
    handlePassword: () => {},
    getJtp: () => {}
  }

  export const AuthenticatedJtpContext = createContext<jtpContextValues>(defaultValues)

  export const AuthenticatedJtpProvider = ({ children } : { children: ReactNode}) => {
    const courses: ICourse[] = selectCourses()

    const jtp = new Jtp(selectAuthenticatedUser()).json
    const [course, setCourse] = useState<ICourse | undefined>(jtp?.course)
    const [firstname, setFirstname] = useState<string>(jtp?.name.first || '')
    const [lastname, setLastname] = useState<string>(jtp?.name.last || '')
    const [email, setEmail] = useState<string>(jtp?.email || '')
    const [password, setPassword] = useState(defaultValues.password)
    const [isOpenUpdate, setUpdateModal] = useState<boolean>(false)
    const [isFormUncompleted, setForm] = useState<boolean>(false)
  
    useEffect(
      () => {
        setForm(!firstname || !lastname || !email.includes('@') || course?.id === -1)
      }, [firstname, lastname, email, course]
    )

    const openUpdate = () => { setUpdateModal(true) }
    const closeUpdate = () => { setUpdateModal(false) }
    const clearPassword = () => { setPassword('') }

    const handleEmail = (event: inputChangeEvent) => { setEmail(event.target.value) }
    const handleFirstname = (event: inputChangeEvent) => { setFirstname(event.target.value) }
    const handleLastname = (event: inputChangeEvent) => { setLastname(event.target.value) }
    const handlePassword = (event: inputChangeEvent) => { setPassword(event.target.value) }

    const handleCourse = (event: SelectChangeEvent<unknown>) => {
      setCourse(courses.find(x => x.id === event.target.value as number))
    }

    const getJtp = (): Jtp => new Jtp({
        ...jtp,
        email,
        name: { first: firstname, last: lastname }
    })

    return (
      <AuthenticatedJtpContext.Provider
        value={{
          course,
          email,
          firstname,
          isFormUncompleted,
          lastname,
          password,
          isOpenUpdate,
          clearPassword,
          getJtp,
          handleCourse,
          handleEmail,
          handleFirstname,
          handleLastname,
          handlePassword,
          closeUpdate,
          openUpdate,
        }}>
        {children}
      </AuthenticatedJtpContext.Provider>
    )
  }
  