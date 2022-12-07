import React, {
    createContext,
    ReactNode,
    useState,
  } from "react"
  import { ICourse } from "@models"
  import { SelectChangeEvent } from "@mui/material"
  import { selectCourses } from "@src/store"
  
  interface selectedContextValues {
    assignmentCourse?: ICourse,
    studentCourse?: ICourse,
    handleStudentCourse: (event: SelectChangeEvent<unknown>) => void,
    handleAssignmentCourse: (event: SelectChangeEvent<unknown>) => void,
  }

  const defaultValues: selectedContextValues = {
    handleStudentCourse: () => {},
    handleAssignmentCourse: () => {}
  }

  export const SelectedContext = createContext<selectedContextValues>(defaultValues)

  export const SelectedProvider = ({ children }: { children: ReactNode }) => {
    const courses: ICourse[] = selectCourses()
    const [assignmentCourse, setAssignmentCourse] = useState<ICourse>()
    const [studentCourse, setStudentCourse] = useState<ICourse>()

    const handleAssignmentCourse = (event: SelectChangeEvent<unknown>) => {
      setAssignmentCourse(courses.find(x => x.id === event.target.value as number))
    }

    const handleStudentCourse = (event: SelectChangeEvent<unknown>) => {
      setStudentCourse(courses.find(x => x.id === event.target.value as number))
    }

    return (
      <SelectedContext.Provider
        value={{
          assignmentCourse,
          studentCourse,
          handleAssignmentCourse,
          handleStudentCourse,
        }}>
        {children}
      </SelectedContext.Provider>
    )
  }
  