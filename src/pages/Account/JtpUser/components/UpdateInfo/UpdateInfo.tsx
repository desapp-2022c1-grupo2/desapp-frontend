import React, { useContext, useState } from 'react'
import { useDispatch } from 'react-redux'
import toast, { Toaster } from 'react-hot-toast'
import {
  Alert,
  Button,
  CheckOutlined,
  CourseSelector,
  EditOutlined,
  Field,
  Modal,
} from '@components'
import { verifyCredentials } from '@services'
import {
  setUser,
  updateUserInfo,
} from '@store'
import { FieldsRow } from './styles'
import { AuthenticatedJtpContext } from '../../context'


export const UpdateInfoModal = () => {
  const dispatch = useDispatch()
  const {
    course, handleCourse,
    email, handleEmail,
    firstname, handleFirstname,
    lastname, handleLastname,
    password, handlePassword,
    isOpenUpdate,
    openUpdate,
    closeUpdate,
    clearPassword,
    getJtp,
    isFormUncompleted
  } = useContext(AuthenticatedJtpContext)

  const [isWrongPassword, setWrongPassword] = useState(false)
  const isEmptyPassword = !isWrongPassword && password === ''

  const handleOpen = () => { openUpdate() }

  const handleClose = () => {
    closeUpdate()
    clearPassword()
    setWrongPassword(false)
  }

  const enableAlert = () => {
    toast.promise(
      getJtp().patch(), {
      loading: 'Actualizando datos...',
      success: <b>Datos Actualizados correctamente</b>,
      error: <b>Ocurrio un error</b>,
    }
    )
  }

  const handleSubmit = async () => {
    if (await verifyCredentials({ email, password })) {
      enableAlert()
      dispatch(setUser(getJtp().json))
      dispatch(updateUserInfo())
      handleClose()
    } else {
      clearPassword()
      setWrongPassword(true)
    }
  }

  return (
    <>
      <Toaster toastOptions={{ duration: 3000 }} />
      <Button
        color='info'
        onClick={handleOpen}
        startIcon={<EditOutlined />}
        variant='contained'
        text='Editar'
        title='Editar información'
      />
      <Modal
        onClose={handleClose}
        open={isOpenUpdate}
        title='Editar información'
        footer={
          <Button
            disabled={password === ''}
            children="Confirmar"
            color='unahurGreen'
            onClick={handleSubmit}
            startIcon={<CheckOutlined />}
            variant='contained'
            title='Confirmar cambios'
          />
        }
      >
        <FieldsRow>
          <Field
            value={firstname}
            label="Nombre"
            onChange={handleFirstname}
            placeholder={"Ingresá tu nombre"}
          />
          <Field
            value={lastname}
            label="Apellido"
            onChange={handleLastname}
            placeholder={"Ingresá tu apellido"}
          />
        </FieldsRow>
        <FieldsRow>
          <Field
            value={email}
            label="Email"
            onChange={handleEmail}
            placeholder={"Ingresá tu email"}
            variant="email"
          />
          <CourseSelector
            onChange={handleCourse}
            value={course?.id || -1}
          />
        </FieldsRow>
        <Field
          value={password}
          label="Contraseña actual"
          onChange={handlePassword}
          placeholder="Ingresá tu contraseña"
          variant="password"
        />
        <Alert
          severity="error"
          enable={isEmptyPassword}
          text='Ingrese su contraseña para confirmar los cambios'
        />
        <Alert
          enable={isWrongPassword}
          severity="error"
          text='Contraseña incorrecta'
        />
        <Alert
          enable={isFormUncompleted}
          severity='error'
          text='Completa todos los campos'
        />
      </Modal>
    </>
  )
}
