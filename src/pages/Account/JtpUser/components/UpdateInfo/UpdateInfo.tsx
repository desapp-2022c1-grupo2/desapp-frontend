import React, { useContext, useState } from 'react'
import { useDispatch } from 'react-redux'
import toast, { Toaster } from 'react-hot-toast'
import {
  Alert,
  Button,
  CheckOutlined,
  EditOutlined,
  Field,
  Modal,
} from '@components'
import { inputChangeEvent } from "@const"
import { Admin, IAdmin, IUser, User } from '@models'
import {
  updateAdmin,
  verifyCredentials,
} from '@services'
import {
  selectAuthenticatedUser,
  setUser,
  updateUserInfo,
} from '@store'
import { Content } from './styles'
import { AuthenticatedJtpContext } from '../../context'


export const UpdateInfoModal = () => {
  const dispatch = useDispatch()
  const {
    email,
    firstname,
    lastname,
    password,
    isOpenUpdate,
    openUpdate,
    closeUpdate,
    clearPassword,
    getJtp,
    handleEmail,
    handleFirstname,
    handleLastname,
    handlePassword,
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
      getAdmin().patch(), {
        loading: 'Actualizando datos...',
        success: <b>Datos Actualizados correctamente</b>,
        error: <b>Ocurrio un error</b>,
      }
    )
  }

  const handleSubmit = async () => {
    if (await verifyCredentials({ email, password })) {
      enableAlert()
      dispatch(setUser(getAdmin().json))
      dispatch(updateUserInfo())
      handleClose()
    } else {
      clearPassword()
      setWrongPassword(true)
    }
  }

  return (
    <>
      <Toaster toastOptions={{ duration: 3000}}/>
      <Button
        color='info'
        onClick={handleOpen}
        startIcon={<EditOutlined/>}
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
            startIcon={<CheckOutlined/>}
            variant='contained'
            title='Confirmar cambios'
          />
        }
      >
        <Content>
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
          <Field
            value={email}
            label="Email"
            onChange={handleEmail}
            placeholder={"Ingresá tu email"}
            variant="email"
          />
          <Field
            disabled
            value="Administrador"
            label="Rol"
          />
          <Field
            value={password}
            label="Contraseña actual"
            onChange={handlePassword}
            placeholder="Ingresá tu contraseña"
            variant="password"
          />
        </Content>
        <Alert
          severity="error"
          enable={isEmptyPassword}
          text='Ingrese su contraseña para confirmar los cambios'
        />
        <Alert
          severity="error"
          enable={isWrongPassword}
          text='Contraseña incorrecta'
        />
      </Modal>
    </>
  )
}
