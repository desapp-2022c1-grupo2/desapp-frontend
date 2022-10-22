import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { SelectChangeEvent } from '@mui/material'
import { ICourse, IJtp } from '@src/models_copy'
import { getJtpSelected, selectCourses, selectUpdateJtpModal } from '@store'
import { updateJtp } from '@store/users'
import { inputChangeEvent } from '@const'
import { Content, RequiredFieldText } from './styles'
import {
  Button,
  CircularProgress,
  CheckOutlined,
  Field,
  Modal,
  Select,
} from '@components'
import { selectJtp, setUpdateJtpModal } from '@src/store/modals'
import toast, { Toaster } from 'react-hot-toast'

import { updateJtp as patchJtp } from '@services'

export const EditJtpModal = () => {
  const dispatch = useDispatch()
  const jtp: IJtp = getJtpSelected()
  const courses: ICourse[] = selectCourses()
  const open: boolean = selectUpdateJtpModal()
  const [name, setName] = useState(jtp.name)
  const [lastName, setLastname] = useState(jtp.lastName)
  const [email, setEmail] = useState(jtp.email)
  const [selectedCourse, setSelectedCourse] = useState(jtp.courseId)
  const [loading, setLoading] = useState(false)
  const [formIsCompleted, setFormIsCompleted] = useState(false)

  console.log(jtp)
  
  const handleClose = () => { dispatch(setUpdateJtpModal(false)) }

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
    
    const newJtp: IJtp = {
      id: jtp.id,
      name,
      lastName,
      email,
      courseId: courses[selectedCourse || -1].id,
    }
    
    setLoading(true)
    toast.promise(
      patchJtp(newJtp),
      {
        loading: <>Actualizando datos de {jtp.name} {jtp.lastName}...</>,
        success: <>Datos de {jtp.name} {jtp.lastName} actualizados con éxito</>,
        error: <>Error al modificar los datos de {jtp.name} {jtp.lastName}</>
      }, { id: jtp.id?.toString() }
    )
    dispatch(updateJtp(newJtp))
    dispatch(dispatch(selectJtp({})))
    setLoading(false)
    handleClose()
  }

  return (
    <>
    <Toaster toastOptions={{ duration: 3000}} />
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
          value={name || jtp.name}
        />
        <Field
          required
          disabled={loading}
          error={!lastName}
          label={"Apellido"}
          onChange={(event: inputChangeEvent) => handleChange(setLastname, event)}
          placeholder={"Ingresá el apellido"}
          value={lastName || jtp.lastName}
        />
        <Field
          required
          disabled={loading}
          error={!email}
          label={"Email"}
          onChange={(event: inputChangeEvent) => handleChange(setEmail, event)}
          placeholder={"Ingresá el email"}
          value={email || jtp.email}
        />
        <Select
          required
          disabled={loading}
          items={courses ? courses.map(course => course.name ? course.name : '') : []}
          label='Materia'
          onChange={handleSelectCourse}
          placeholder={selectedCourse?.toString()}
          value={selectedCourse?.toString() || jtp.courseId?.toString()}
        />
        { !formIsCompleted && <RequiredFieldText>* Completa todos los campos</RequiredFieldText> }
      </Content>
    </Modal>
    </>
  )
}
