import { Field, FieldProps, Select, SelectProps } from "@components"
import { ICourse } from "@src/models"
import { selectCourses } from "@src/store"
import React from "react"

export const FirstnameField = (props: FieldProps) => (
  <Field
    required
    label={"Nombre"}
    placeholder={"Ingresá el nombre"}
    {...props}
  />
)

export const LastnameField = (props: FieldProps) => (
  <Field
    required
    label={"Apellido"}
    placeholder={"Ingresá el apellido"}
    {...props}
  />
)
export const EmailField = (props: FieldProps) => (
  <Field
    required
    label={"Email"}
    placeholder={"Ingresá el email"}
    {...props}
  />
)

export const SelectCourse = (props: SelectProps) => {
  const courses: ICourse[] = selectCourses()
  const coursesOptions = courses.map(x => ({ name: x.name, value: x.id, }))

  return (
    <Select
      required={props.required || true}
      items={coursesOptions}
      label='Curso'
      placeholder='Selecciona un curso'
      {...props}
    />
  )
}