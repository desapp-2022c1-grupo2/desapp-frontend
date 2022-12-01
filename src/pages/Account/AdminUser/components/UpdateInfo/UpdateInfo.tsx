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
import { verifyCredentials } from '@services'
import {
  setUser,
  updateUserInfo,
} from '@store'
import { FieldsRow } from './styles'
import { AuthenticatedAdminContext } from '../../context'


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
    getAdmin,
    handleEmail,
    handleFirstname,
    handleLastname,
    handlePassword,
  } = useContext(AuthenticatedAdminContext)

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
          <Field
            disabled
            value="Administrador"
            label="Rol"
          />
        </FieldsRow>
          <Field
            value={password}
            label="Contraseña actual"
            onChange={handlePassword}
            placeholder="Ingresá tu contraseña"
            variant="password"
            style={{ width: '100%'}}
          />
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
