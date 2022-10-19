import React, { useState } from 'react'
import { Content, RequiredFieldText } from './styles'
import { inputChangeEvent } from "@const"
import {
  Button,
  CheckOutlined,
  EditOutlined,
  Field,
  Modal,
} from '@components'
import { selectLogedUser } from '@store'
import { IAdmin } from '@models'
import { useDispatch } from 'react-redux'
import { setUser, updateUserInfo } from '@store/auth'
import { verifyCredentials } from '@src/services'

export const EditAdminInfoModal = () => {
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

  return (
    <>
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
