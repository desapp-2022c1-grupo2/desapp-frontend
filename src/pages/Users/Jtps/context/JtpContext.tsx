import React, {
  ChangeEventHandler,
  createContext,
  ReactNode,
  useEffect,
  useState,
} from "react"
import { ICourse, Jtp } from "@models"
import { inputChangeEvent } from "@const"
import { SelectChangeEvent } from "@mui/material"
import { selectCourses } from "@src/store"

interface jtpContextValues {
  course?: ICourse,
  email: string,
  isFormUncompleted: boolean,
  firstname: string,
  lastname: string,
  selected: Jtp,
  getJtp: Function,
  select: Function,
  unselect: Function,
  handleCourse: (event: SelectChangeEvent<unknown>) => void,
  handleFirstname: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>,
  handleLastname: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>,
  handleEmail: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>,
}

const defaultValues: jtpContextValues = {
  selected: new Jtp(undefined),
  firstname: '',
  lastname: '',
  email: '',
  isFormUncompleted: false,
  getJtp: () => {},
  select: () => { },
  unselect: () => { },
  handleCourse: () => { },
  handleFirstname: () => { },
  handleLastname: () => { },
  handleEmail: () => { },
}

export const JtpContext = createContext<jtpContextValues>(defaultValues)

export const JtpProvider = ({ children }: { children: ReactNode }) => {
  const courses: ICourse[] = selectCourses()

  const [selected, setSelected] = useState<Jtp>(defaultValues.selected)
  const [firstname, setFirstname] = useState<string>('')
  const [lastname, setLastname] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [course, setCourse] = useState<ICourse | undefined>()
  const [isFormUncompleted, setForm] = useState<boolean>(defaultValues.isFormUncompleted)
  
  useEffect(
    () => {
      setForm(!firstname || !lastname || !email.includes('@') || course?.id === -1)
    }, [firstname, lastname, email, course]
  )

  const select = (jtp: Jtp) => {
    setSelected(jtp)
    setFirstname(jtp.firstname)
    setLastname(jtp.lastname)
    setEmail(jtp.email)
    setCourse(jtp.course)
  }

  const unselect = () => {
    setSelected(defaultValues.selected)
    setFirstname('')
    setLastname('')
    setEmail('')
    setCourse(undefined)
  }

  const handleEmail = (event: inputChangeEvent) => { setEmail(event.target.value) }
  const handleFirstname = (event: inputChangeEvent) => { setFirstname(event.target.value) }
  const handleLastname = (event: inputChangeEvent) => { setLastname(event.target.value) }
  const handleCourse = (event: SelectChangeEvent<unknown>) => {
    setCourse(courses.find(x => x.id === event.target.value as number))
  }

  const getJtp = (): Jtp => new Jtp({
    ...selected.json,
    course,
    email,
    name: { first: firstname, last: lastname }
  })

  return (
    <JtpContext.Provider
      value={{
        course,
        email,
        selected,
        firstname,
        lastname,
        isFormUncompleted,
        select,
        unselect,
        getJtp,
        handleCourse,
        handleFirstname,
        handleLastname,
        handleEmail,
      }}>
      {children}
    </JtpContext.Provider>
  )
}
