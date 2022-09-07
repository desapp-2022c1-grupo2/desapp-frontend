import React, { useState } from 'react'
import styled from 'styled-components'
import {
  Button,
  CheckOutlined,
  EditOutlined,
  Field,
  Modal,
  Select,
} from '@components'

const Content = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  flex-grow: 2;
  gap: 8px;
  height: 80%;
  justify-content: center;
`

const RequiredFieldText = styled.p`
  color: #E74924;
  margin-top: 16px;
  text-align: center;
  width: 100%;
`

type changeEvent = React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>

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
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const value: string = event.target.value
    value ? setState(value) : setState('')
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
            onChange={(event: changeEvent) => handleChange(setName, event)}
            placeholder={"Ingresá tu nombre"}
          />
          <Field
            disabled={true}
            value={lastName}
            label="Apellido"
            onChange={(event: changeEvent) => handleChange(setLastname, event)}
            placeholder={"Ingresá tu apellido"}
          />
          <Field
            disabled={true}
            value={email}
            label="Email"
            onChange={(event: changeEvent) => handleChange(setEmail, event)}
            placeholder={"Ingresá tu email"}
            variant="email"
          />
          <Field
            disabled
            value="Administrador"
            label="Su rol"
            onChange={(event: changeEvent) => handleChange(setPass, event)}
          />
          <Field
            disabled={true}
            value={pass}
            label="Su contraseña actual"
            onChange={(event: changeEvent) => handleChange(setPass, event)}
            placeholder="Ingresá tu ontraseña"
            variant="password"
          />
        </Content>
        {/* { !passVerify && <RequiredFieldText>* Ingrese su contraseña para confirmar los cambios</RequiredFieldText>} */}
        <RequiredFieldText>* De momento no es posible realizar cambios en tu información</RequiredFieldText>
      </Modal>
    </>
  )
}
