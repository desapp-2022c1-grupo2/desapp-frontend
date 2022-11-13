import React, {useEffect, useState} from 'react'
import {useDispatch} from 'react-redux'
import toast, {Toaster} from 'react-hot-toast'
import {SelectChangeEvent} from '@mui/material'
import {ICourse, Jtp} from '@models'
import {getJtpSelected, selectCourses, selectUpdateJtpModal, setUpdateJtpModal, unselectJtp, updateJtp} from '@store'
import {inputChangeEvent} from '@const'
import {Button, CheckOutlined, Field, Modal, Select,} from '@components'
import {patchJtp} from '@services'
import {Content, RequiredFieldText} from './styles'
import {PasswordResetModal} from "@pages/Users/components/Modals/PasswordResetModal";

export const EditJtpModal = () => {
  const dispatch = useDispatch()
  const jtp: Jtp = new Jtp(getJtpSelected())
  const courses: ICourse[] = selectCourses()
  const open: boolean = selectUpdateJtpModal()

  const [firstname, setFirstname] = useState<string>(jtp.name.first)
  const [lastName, setLastname] = useState<string>(jtp.name.last)
  const [email, setEmail] = useState<string>(jtp.email)
  const [course, setCourse] = useState<ICourse | undefined>(jtp.course)
  const [isFormUncompleted, setForm] = useState<boolean>(false)
  const [flag, setFlag] = useState<boolean>(true)

  useEffect(
    () => {
      if(flag && open) {
        setFirstname(jtp.name.first)
        setLastname(jtp.name.last)
        setEmail(jtp.email)
        setCourse(jtp.course)
        setFlag(false)
      }
    }
    , [jtp]
  )

  const closeModal = () => {
    setFlag(true)
    dispatch(setUpdateJtpModal(false))
  }
  
  const enableAlert = (jtp: Jtp) => {
    toast.promise(
      patchJtp(jtp.json),
      {
        loading: <>Actualizando datos de {jtp.fullName()}...</>,
        success: <>Datos de {jtp.fullName()} actualizados con éxito</>,
        error: <>Error al modificar los datos de {jtp.fullName()}</>
      }, { id: jtp?.id.toString() }
    )
  }

  const handleChange = (
    setState: Function,
    event: inputChangeEvent
  ) => {
    setForm(!firstname || !lastName || !email || course?.id === -1)
    setState(event.target.value)
  }

  const handleCourse = (event: SelectChangeEvent<unknown>) => {
    setCourse(courses.find(x => x.id === event.target.value as number) || course)
  }

  const handleSubmit = () => {
    if (isFormUncompleted) return

    const newJtp = new Jtp({
      id: jtp.id,
      name: { first: firstname, last: lastName },
      email,
      course: course,
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
          value={firstname}
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
          items={
            courses.map(x => ({
              name: x.name,
              value: x.id,
            })
          )}
          label='Materia'
          onChange={handleCourse}
          placeholder={course?.id === -1 ? jtp.course?.name : course?.name}
          defaultValue={jtp.course?.id}
          value={course?.id || jtp.course?.id || -1}
        />
        { isFormUncompleted && <RequiredFieldText>* Completa todos los campos</RequiredFieldText> }
        <PasswordResetModal/>
      </Content>
    </Modal>
    </>
  )
}
