import React, { useEffect, useState } from "react"
import { CourseSelector, Field, Table } from "@components"
import { ICourse, IJtp } from "@models"
import { selectCourses, selectJtps } from '@store'
import {
  CreateJtpModal,
  DeleteJtpModal,
  UpdateJtpModal,
} from "@pages/Users/Jtps/components"
import { getJtpColumns } from "./JtpColumns"
import { SelectChangeEvent } from "@mui/material"
import { OpenCreateButton } from "@src/pages/Users/components"
import { useCreateJtp } from "../../hooks"

export const JtpTable = () => {
  const jtps = selectJtps()
  const courses = selectCourses()
  const { handleOpen } = useCreateJtp()
  const [value, setValue] = useState<string>('')
  const [filtered, setFiltered] = useState<IJtp[]>(jtps)
  const [course, setCourse] = useState<ICourse>()

  useEffect(() => {
    setFiltered(jtps.filter(x => x.course?.name === course?.name))
    setValue('')
  }, [course])

  const clearSearchFilter = () => { setValue('') }

  const onChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    let value = event.target.value.toString()
    setValue(value)
    value = value.toLocaleLowerCase()

    let jtpsFiltered = jtps.filter(x =>
      (x.name.first + ' ' + x.name.last).toLocaleLowerCase().includes(value) ||
      x.email.toLocaleLowerCase().includes(value)
    )

    if(course) jtpsFiltered = jtpsFiltered.filter(x => x.course?.name === course?.name )

    setFiltered(jtpsFiltered)
  }

  const handleCourse = (event: SelectChangeEvent<unknown>) => {
    setCourse(courses.find(x => x.id === event.target.value as number))
  }

  return (
    <>
      <DeleteJtpModal clearSearchFilter={clearSearchFilter}/>
      <UpdateJtpModal clearSearchFilter={clearSearchFilter}/>
      <CreateJtpModal clearSearchFilter={clearSearchFilter}/>
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
            value={course?.id || -1}
          />
        }
        handleColumns={getJtpColumns}
        loading={!jtps.length}
        rows={(!!value || course) ? filtered : jtps}
      />
    </>
  )
}




