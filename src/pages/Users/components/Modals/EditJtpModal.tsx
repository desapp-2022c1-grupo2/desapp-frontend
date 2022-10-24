import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import toast, { Toaster } from 'react-hot-toast'
import { SelectChangeEvent } from '@mui/material'
import { ICourse, IJtp, Jtp } from '@models'
import { getJtpSelected, selectCourses, selectUpdateJtpModal, updateJtp, unselectJtp, setUpdateJtpModal } from '@store'
import { inputChangeEvent } from '@const'
import {
  Button,
  CheckOutlined,
  Field,
  Modal,
  Select,
} from '@components'
import { patchJtp } from '@services'
import { Content, RequiredFieldText } from './styles'

export const EditJtpModal = () => {
  const dispatch = useDispatch()
  const jtp: Jtp = new Jtp(getJtpSelected())
  const courses: ICourse[] = selectCourses()
  const open: boolean = selectUpdateJtpModal()
  const [firstname, setFirstname] = useState(jtp.name.first)
  const [lastName, setLastname] = useState(jtp.name.last)
  const [email, setEmail] = useState(jtp.email)
  const [selectedCourse, setSelectedCourse] = useState(jtp.course.id)
  const [isFormUncompleted, setForm] = useState(true)

  const closeModal = () => { dispatch(setUpdateJtpModal(false)) }
  
  const enableAlert = (jtp: Jtp) => {
    toast.promise(
      patchJtp(jtp),
      {
        loading: <>Actualizando datos de {jtp.fullName()}...</>,
        success: <>Datos de {jtp.fullName()} actualizados con éxito</>,
        error: <>Error al modificar los datos de {jtp.fullName()}</>
      }, { id: jtp?.id.toString() }
    )
  }

  useEffect(() => {
    setForm(!firstname || !lastName || !email || !selectedCourse)
    }, [firstname, lastName, email, selectedCourse]
  )
  

  const handleChange = (
    setState: Function,
    event: inputChangeEvent
  ) => {
    setState(event.target.value)
  }

  const handleSelectCourse = (event: SelectChangeEvent<unknown>) => {
    setSelectedCourse(parseInt(event.target.value as string))
  }

  const handleSubmit = () => {
    if (isFormUncompleted) return
    
    // makeJtpJsonRequest
    const newJtp = new Jtp({
      id: jtp.id,
      name: { first: firstname, last: lastName },
      email,
      course: courses[selectedCourse || -1],
    })
    
    enableAlert(newJtp)
    dispatch(updateJtp(newJtp.json))
    dispatch(dispatch(unselectJtp()))
    closeModal()
  }

  return (
    <>
    <Toaster toastOptions={{ duration: 3000}} />
    <Modal
      className='modalEditJtp'
      onClose={closeModal}
      open={open}
      title='Editar Jefe de trabajos Practicos'
      footer={
        <Button
            children="Confirmar"
            color='unahurGreen'
            disabled={isFormUncompleted}
            onClick={handleSubmit}
            startIcon={<CheckOutlined/>}
            title='Editar JTP'
            
            variant='contained'
          />
      }
    >
      <Content>
        <Field
          required
          error={!firstname}
          label={"Nombre"}
          onChange={(event: inputChangeEvent) => handleChange(setFirstname, event)}
          placeholder={"Ingresá el nombre"}
          value={firstname || jtp.name.first}
        />
        <Field
          required
          error={!lastName}
          label={"Apellido"}
          onChange={(event: inputChangeEvent) => handleChange(setLastname, event)}
          placeholder={"Ingresá el apellido"}
          value={lastName || jtp.name.last}
        />
        <Field
          required
          error={!email}
          label={"Email"}
          onChange={(event: inputChangeEvent) => handleChange(setEmail, event)}
          placeholder={"Ingresá el email"}
          value={email || jtp.email}
        />
        <Select
          required
          items={courses.map(x => x.name)}
          label='Materia'
          onChange={handleSelectCourse}
          placeholder={selectedCourse.toString()}
          value={selectedCourse.toString() || jtp.course.id.toString()}
        />
        { isFormUncompleted && <RequiredFieldText>* Completa todos los campos</RequiredFieldText> }
      </Content>
    </Modal>
    </>
  )
}
