import React, { SetStateAction, useEffect, useState } from 'react'
import { SelectChangeEvent } from '@mui/material'
import { createJtp } from '@services'
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

export const NewJtpModal = ({ courses, id }: NewJtpModalProps) => {
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

  const handleCreateJtp = async () => {
    if (!formIsCompleted) return
    setLoading(true)
    await createJtp({
      name,
      lastName,
      email,
      courseId: parseInt(selectedCourse),
    })
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
          <Button
            children={loading ? <CircularProgress/> : "Confirmar"}
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
            error={!name}
            label={"Nombre"}
            onChange={(event: inputChangeEvent) => handleChange(setName, event)}
            placeholder={"Ingresá el nombre"}
            value={name}
          />
          <Field
            required
            error={!lastName}
            label={"Apellido"}
            onChange={(event: inputChangeEvent) => handleChange(setLastname, event)}
            placeholder={"Ingresá el apellido"}
            value={lastName}
          />
          <Field
            required
            error={!email}
            label={"Email"}
            onChange={(event: inputChangeEvent) => handleChange(setEmail, event)}
            placeholder={"Ingresá el email"}
            value={email}
          />
          <Select
            required
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
