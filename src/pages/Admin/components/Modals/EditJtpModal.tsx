import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { SelectChangeEvent } from '@mui/material'
import { ICourse } from '@src/models_copy'
import { selectCourses } from '@store'
import { updateJtp } from '@store/users'
import { inputChangeEvent } from '@const'
import { Content, RequiredFieldText } from './styles'
import { EditJtpModalProps } from './props'
import {
  Button,
  CircularProgress,
  CheckOutlined,
  EditOutlined,
  Field,
  Modal,
  Select,
} from '@components'

export const EditJtpModal = ({ jtp }: EditJtpModalProps) => {
  const courses: ICourse[] = selectCourses()
  const dispatch = useDispatch()
  const [open, setOpen] = useState(false)
  const [name, setName] = useState(jtp.name)
  const [lastName, setLastname] = useState(jtp.lastName)
  const [email, setEmail] = useState(jtp.email)
  const [selectedCourse, setSelectedCourse] = useState(jtp.courseId)
  const [loading, setLoading] = useState(false)
  const [formIsCompleted, setFormIsCompleted] = useState(false)

  const handleOpen = () => { setOpen(true) }
  const handleClose = () => { setOpen(false) }

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
    setSelectedCourse(parseInt(event.target.value as string))
  }

  const handleCreateJtp = () => {
    if (!formIsCompleted) return
    setLoading(true)
    dispatch(updateJtp({
      id: jtp.id,
      name,
      lastName,
      email,
      courseId: courses[selectedCourse || -1].id,
    }))
    setLoading(false)
    handleClose()
  }

  return (
    <>
      <Button
        children={<EditOutlined/>}
        color='unahurCyan'
        onClick={handleOpen}
        sx={{borderRadius: '50px', minHeight: 'fit-content', minWidth: 'fit-content', padding: '8px'}}
        variant='contained'
        title='Editar'
      />
      <Modal
      className='modalEditJtp'
        onClose={handleClose}
        open={open}
        title='Editar Jefe de trabajos Practicos'
        footer={
          loading
            ? <CircularProgress/>
            : <Button
                children="Confirmar"
                color='unahurGreen'
                disabled={!formIsCompleted}
                onClick={handleCreateJtp}
                startIcon={<CheckOutlined/>}
                title='Editar JTP '
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
            placeholder={selectedCourse?.toString()}
            value={selectedCourse?.toString()}
          />
          { !formIsCompleted && <RequiredFieldText>* Completa todos los campos</RequiredFieldText> }
        </Content>
      </Modal>
    </>
  )
}
