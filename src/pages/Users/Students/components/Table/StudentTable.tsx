import React, { useEffect, useState } from "react"
import { CourseSelector, Field, Table } from "@components"
import { ICourse, IStudent } from "@models"
import { selectCourses, selectStudents } from '@store'
import {
  CreateStudentModal,
  DeleteStudentModal,
  DetailStudentModal,
  UpdateStudentModal,
} from "../Modals"
import { getStudentColumns } from "./StudentColumns"
import { SelectChangeEvent } from "@mui/material"
import { OpenCreateButton } from "@src/pages/Users/components"
import { useCreateStudent } from "../../hooks"

export const StudentTable = () => {
  const students = selectStudents()
  const courses = selectCourses()
  const { handleOpen } = useCreateStudent()
  const [value, setValue] = useState<string>('')
  const [filtered, setFiltered] = useState<IStudent[]>(students)
  const [course, setCourse] = useState<ICourse>()

  useEffect(() => {
    setFiltered(students.filter(x => x.courses.current?.name === course?.name))
    setValue('')
  }, [course])

  const clearSearchFilter = () => { setValue('') }

  const onChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    let value = event.target.value.toString()
    setValue(value)
    value = value.toLocaleLowerCase()

    let studentsFiltered = students.filter(x =>
      (x.name.first + ' ' + x.name.last).toLocaleLowerCase().includes(value) ||
      x.email.toLocaleLowerCase().includes(value)
    )

    if(course) studentsFiltered = studentsFiltered
      .filter(x => x.courses.current?.name === course?.name)

    setFiltered(studentsFiltered)
  }

  const handleCourse = (event: SelectChangeEvent<unknown>) => {
    setCourse(courses.find(x => x.id === event.target.value as number))
  }

  return (
    <>
      <DeleteStudentModal clearSearchFilter={clearSearchFilter}/>
      <UpdateStudentModal clearSearchFilter={clearSearchFilter}/>
      <CreateStudentModal clearSearchFilter={clearSearchFilter}/>
      <DetailStudentModal />
      <Table
        buttons={<OpenCreateButton onClick={handleOpen} variant='text'/>}
        columns={[]}
        search={
          <Field
            variant='search'
            value={value}
            onChange={onChange}
            placeholder='Buscar...'
          />
        }
        filters={
          <CourseSelector 
            onChange={handleCourse}
            defaultValue={course?.id}
            value={course?.id || -1}
          />
        }
        handleColumns={getStudentColumns}
        loading={!students.length}
        rows={(!!value || course) ? filtered : students}
      />
    </>
  )
}




