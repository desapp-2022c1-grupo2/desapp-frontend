import React from 'react'
import { ICourse } from '@models'
import { selectCourses } from '@store'
import { SelectProps } from './props'
import { Select } from './Select'
import { ClassOutlined } from '@mui/icons-material'

export const CourseSelector = (props: SelectProps) => {
  const courses: ICourse[] = selectCourses()
  const coursesOptions = courses.map(x => ({ name: x.name, value: x.id, }))

  return (
    <Select
      required={props.required || true}
      startAdornment={<ClassOutlined />}
      items={coursesOptions}
      label='Curso'
      placeholder='Elegí un curso'
      {...props}
    />
  )
}