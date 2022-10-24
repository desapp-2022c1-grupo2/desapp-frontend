import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import toast, { Toaster } from 'react-hot-toast'
import {
  Button,
  CheckOutlined,
  EditOutlined,
  Field,
  Modal,
} from '@components'
import { inputChangeEvent } from "@const"
import { IAdmin } from '@models'
import {
  updateAdmin,
  verifyCredentials,
} from '@services'
import {
  selectAuthenticatedUser,
  setUser,
  updateUserInfo,
} from '@store'

import { Content, RequiredFieldText } from './styles'

export const UpdateInfoModal = () => {
  const user: IAdmin | undefined = selectAuthenticatedUser()
  const dispatch = useDispatch()
  const [open, setOpen] = useState(false)
  const [name, setName] = useState(user?.name)
  const [lastName, setLastname] = useState(user?.name.first)
  const [password, setPass] = useState("")
  const [email, setEmail] = useState(user?.email)
  const [showPasswordAlert, setShowPasswordAlert] = useState(false)

  const handleOpen = () => { setOpen(true) }
  const handleClose = () => { 
    setOpen(false)
    setPass('')
    setShowPasswordAlert(false)
  }
  
  const handleConfirm = async () => {
    if (await verifyCredentials({ email, password })) {
      toast.promise(
        updateAdmin({
          id: user.id,
          email: user.email,
          name: user.name,
        }), {
          loading: 'Actualizando datos...',
          success: <b>Datos Actualizados correctamente</b>,
          error: <b>Ocurrio un error</b>,
        }
      )
      dispatch(setUser({
          ...user,
          name,
          email,
        }))
        dispatch(updateUserInfo())
      handleClose()
    } else {
      setPass('')
      setShowPasswordAlert(true)
    }
  }
  const handleChange = (
    setState: Function,
    event: inputChangeEvent,
  ) => {
    setState(event.target.value)
    setShowPasswordAlert(false)
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
        open={open}
        title='Editar información'
        footer={
          <Button
            disabled={password === ''}
            children="Confirmar"
            color='unahurGreen'
            onClick={handleConfirm}
            startIcon={<CheckOutlined/>}
            variant='contained'
            title='Confirmar cambios'
          />
        }
      >
        <Content>
          <Field
            value={name}
            label="Nombre"
            onChange={(event: inputChangeEvent) => handleChange(setName, event)}
            placeholder={"Ingresá tu nombre"}
          />
          <Field
            value={lastName}
            label="Apellido"
            onChange={(event: inputChangeEvent) => handleChange(setLastname, event)}
            placeholder={"Ingresá tu apellido"}
          />
          <Field
            value={email}
            label="Email"
            onChange={(event: inputChangeEvent) => handleChange(setEmail, event)}
            placeholder={"Ingresá tu email"}
            variant="email"
          />
          <Field
            disabled
            value="Administrador"
            label="Rol"
            onChange={(event: inputChangeEvent) => handleChange(setPass, event)}
          />
          <Field
            value={password}
            label="Contraseña actual"
            onChange={(event: inputChangeEvent) => handleChange(setPass, event)}
            placeholder="Ingresá tu contraseña"
            variant="password"
          />
        </Content>
        { (!showPasswordAlert && password === '') && <RequiredFieldText>* Ingrese su contraseña para confirmar los cambios</RequiredFieldText> }
        { showPasswordAlert && <RequiredFieldText>* Contraseña incorrecta</RequiredFieldText> }
      </Modal>
    </>
  )
}
