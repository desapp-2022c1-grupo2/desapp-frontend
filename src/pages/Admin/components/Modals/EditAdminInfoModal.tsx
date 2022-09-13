import React, { useState } from 'react'
import { Content, RequiredFieldText } from './styles'
//import { updateJtp } from "@services"
import { inputChangeEvent } from "@const"
import {
  Button,
  CheckOutlined,
  EditOutlined,
  Field,
  Modal,
} from '@components'

export const EditAdminInfoModal = () => {
  const [open, setOpen] = useState(false)
  const [name, setName] = useState("Usuario")
  const [lastName, setLastname] = useState("Administrador")
  const [pass, setPass] = useState("")
  const [email, setEmail] = useState("admin@unahur.edu.ar")
  const passVerify = (pass == 'admin')

  const handleOpen = () => { setOpen(true) }
  const handleClose = () => { setOpen(false) }
  const handleChange = (
    setState: Function,
    event: inputChangeEvent,
  ) => {
    setState(event.target.value)
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
            disabled={!passVerify}
            children="Confirmar"
            color='unahurGreen'
            onClick={handleClose}
            startIcon={<CheckOutlined/>}
            variant='contained'
            title='Confirmar cambios'
          />
        }
      >
        <Content>
          <Field
            disabled={true}
            value={name}
            label="Nombre"
            onChange={(event: inputChangeEvent) => handleChange(setName, event)}
            placeholder={"Ingresá tu nombre"}
          />
          <Field
            disabled={true}
            value={lastName}
            label="Apellido"
            onChange={(event: inputChangeEvent) => handleChange(setLastname, event)}
            placeholder={"Ingresá tu apellido"}
          />
          <Field
            disabled={true}
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
            disabled={true}
            value={pass}
            label="Contraseña actual"
            onChange={(event: inputChangeEvent) => handleChange(setPass, event)}
            placeholder="Ingresá tu contraseña"
            variant="password"
          />
        </Content>
        {/* { !passVerify && <RequiredFieldText>* Ingrese su contraseña para confirmar los cambios</RequiredFieldText>} */}
        <RequiredFieldText>* Momentaneamente no es posible realizar cambios en tu información</RequiredFieldText>
      </Modal>
    </>
  )
}
