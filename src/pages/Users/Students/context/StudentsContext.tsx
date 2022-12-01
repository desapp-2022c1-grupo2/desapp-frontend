import React, {
  ChangeEventHandler,
  createContext,
  ReactNode,
  useEffect,
  useState,
} from "react"
import { ICourse, Student } from "@models"
import { inputChangeEvent } from "@const"
import { SelectChangeEvent } from "@mui/material"
import { selectCourses } from "@src/store"

interface studentContextValues {
  course?: ICourse,
  email: string,
  isFormUncompleted: boolean,
  firstname: string,
  lastname: string,
  selected: Student,
  getStudent: Function,
  select: Function,
  unselect: Function,
  handleCourse: (event: SelectChangeEvent<unknown>) => void,
  handleFirstname: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>,
  handleLastname: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>,
  handleEmail: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>,
}

const defaultValues: studentContextValues = {
  selected: new Student(undefined),
  firstname: '',
  lastname: '',
  email: '',
  isFormUncompleted: false,
  getStudent: () => {},
  select: () => { },
  unselect: () => { },
  handleCourse: () => { },
  handleFirstname: () => { },
  handleLastname: () => { },
  handleEmail: () => { },
}

export const StudentContext = createContext<studentContextValues>(defaultValues)

export const StudentProvider = ({ children }: { children: ReactNode }) => {
  const courses: ICourse[] = selectCourses()

  const [selected, setSelected] = useState<Student>(defaultValues.selected)
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

  const select = (student: Student) => {
    setSelected(student)
    setFirstname(student.firstname)
    setLastname(student.lastname)
    setEmail(student.email)
    setCourse(student.course)
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

  const getStudent = (): Student => new Student({
    ...selected.json,
    courses: {
      ...selected.json.courses,
      current: course || selected.course,
    },
    email,
    name: { first: firstname, last: lastname }
  })

  return (
    <StudentContext.Provider
      value={{
        course,
        email,
        selected,
        firstname,
        lastname,
        isFormUncompleted,
        select,
        unselect,
        getStudent,
        handleCourse,
        handleFirstname,
        handleLastname,
        handleEmail,
      }}>
      {children}
    </StudentContext.Provider>
  )
}
