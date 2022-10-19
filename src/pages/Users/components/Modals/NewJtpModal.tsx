import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { SelectChangeEvent } from '@mui/material'
import { ICourse } from '@models'
import { selectCourses } from '@store'
import { createJtp } from '@store/users'
import { inputChangeEvent } from '@const'
import { Content, RequiredFieldText } from './styles'
import { NewJtpModalProps } from './props'
import {
  AddOutlined,
  Button,
  CircularProgress,
  CheckOutlined,
  Field,
  Modal,
  Select,
} from '@components'

export const NewJtpModal = ({ id }: NewJtpModalProps) => {
  const courses: ICourse[] = selectCourses()
  const dispatch = useDispatch()
  const [open, setOpen] = useState(false)
  const [name, setName] = useState("")
  const [lastName, setLastname] = useState("")
  const [email, setEmail] = useState("")
  const [selectedCourse, setSelectedCourse] = useState('')
  const [loading, setLoading] = useState(false)
  const [formIsCompleted, setFormIsCompleted] = useState(false)

  const handleOpen = () => { setOpen(true) }
  const handleClose = () => {
    setOpen(false)
    setName('')
    setLastname('')
    setEmail('')
    setSelectedCourse('')
    setFormIsCompleted(false)
  }

  useEffect(() => {
    setFormIsCompleted(!!(name && lastName && email && selectedCourse))
  }, [name, lastName, email, selectedCourse])
  

  const handleChange = (
    setState: Function,
    event: inputChangeEvent
  ) => {
    setState(event.target.value)
  }

  const handleSelectCourse = (event: SelectChangeEvent<unknown>) => {
    setSelectedCourse(event.target.value as string)
  }

  const handleCreateJtp = () => {
    if (!formIsCompleted) return
    setLoading(true)
    dispatch(createJtp({
      name,
      lastName,
      email,
      courseId: courses[parseInt(selectedCourse)].id,
    }))
    setLoading(false)
    handleClose()
  }

  return (
    <>
      <Button
        color='unahurGreen'
        id={id ? id.toString() : ''}
        onClick={handleOpen}
        startIcon={<AddOutlined/>}
        variant='contained'
        text='Agregar'
        title='Agregar'
      />
      <Modal
        onClose={handleClose}
        open={open}
        title='Agregar nuevo usuario'
        footer={
          loading
            ? <CircularProgress/>
            : <Button
                children="Confirmar"
                color='unahurGreen'
                disabled={!formIsCompleted}
                onClick={handleCreateJtp}
                startIcon={<CheckOutlined/>}
                title='Crear usuario'
                variant='contained'
              />
        }
      >
        <Content>
          <Field
            required
            disabled={loading}
            error={!name}
            label={"Nombre"}
            onChange={(event: inputChangeEvent) => handleChange(setName, event)}
            placeholder={"Ingresá el nombre"}
            value={name}
          />
          <Field
            required
            disabled={loading}
            error={!lastName}
            label={"Apellido"}
            onChange={(event: inputChangeEvent) => handleChange(setLastname, event)}
            placeholder={"Ingresá el apellido"}
            value={lastName}
          />
          <Field
            required
            disabled={loading}
            error={!email}
            label={"Email"}
            onChange={(event: inputChangeEvent) => handleChange(setEmail, event)}
            placeholder={"Ingresá el email"}
            value={email}
          />
          <Select
            required
            disabled={loading}
            items={courses ? courses.map(course => course.name ? course.name : '') : []}
            label='Materia'
            onChange={handleSelectCourse}
            placeholder={selectedCourse.toString()}
            value={selectedCourse}
          />
          { !formIsCompleted && <RequiredFieldText>* Completa todos los campos</RequiredFieldText> }
        </Content>
      </Modal>
    </>
  )
}
