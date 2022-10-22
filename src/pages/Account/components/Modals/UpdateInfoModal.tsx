import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import toast, { Toaster } from 'react-hot-toast'
import { updateAdmin } from '@services'
import { inputChangeEvent } from "@const"
import { IAdmin } from '@src/models_copy'
import { verifyCredentials } from '@services'
import { selectLogedUser } from '@store'
import { setUser, updateUserInfo } from '@store/auth'
import {
  Button,
  CheckOutlined,
  EditOutlined,
  Field,
  Modal,
} from '@components'
import { Content, RequiredFieldText } from './styles'

export const UpdateInfoModal = () => {
  const current: IAdmin = selectLogedUser() || {}
  const dispatch = useDispatch()
  const [open, setOpen] = useState(false)
  const [name, setName] = useState(current.name)
  const [lastName, setLastname] = useState(current.lastName)
  const [pass, setPass] = useState("")
  const [email, setEmail] = useState(current.email)
  const [showPasswordAlert, setShowPasswordAlert] = useState(false)

  const handleOpen = () => { setOpen(true) }
  const handleClose = () => { 
    setOpen(false)
    setPass('')
    setShowPasswordAlert(false)
  }
  
  const handleConfirm = async () => {
    if (await verifyCredentials(email || '', pass)) {
      toast.promise(
        updateAdmin({
          id: current.id,
          email: current.email,
          name: current.name,
          lastName: current.lastName,
        }), {
          loading: 'Actualizando datos...',
          success: <b>Datos Actualizados correctamente</b>,
          error: <b>Ocurrio un error</b>,
        }
      )
      dispatch(setUser({
          ...current,
          name,
          lastName,
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
  //1149294626
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
            disabled={pass === ''}
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
            value={pass}
            label="Contraseña actual"
            onChange={(event: inputChangeEvent) => handleChange(setPass, event)}
            placeholder="Ingresá tu contraseña"
            variant="password"
          />
        </Content>
        { (!showPasswordAlert && pass === '') && <RequiredFieldText>* Ingrese su contraseña para confirmar los cambios</RequiredFieldText> }
        { showPasswordAlert && <RequiredFieldText>* Contraseña incorrecta</RequiredFieldText> }
      </Modal>
    </>
  )
}
