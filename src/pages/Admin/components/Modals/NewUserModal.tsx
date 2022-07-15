import React, { useState } from 'react'
import styled from 'styled-components'
import {
  Button,
  AddOutlined,
  CheckOutlined,
  ClearOutlined,
  Field,
  Modal,
  Select,
} from '@components'
import {
  materias,
  roles,
} from '../../const'

const Content = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  flex-grow: 2;
  gap: 8px;
  height: 80%;
  justify-content: center;
`

export const NewUserModal = () => {
  const [open, setOpen] = useState(false)
  const handleOpen = () => { setOpen(true) }
  const handleClose = () => { setOpen(false) }

  return (
    <>
    <Button
      color='success'
      onClick={handleOpen}
      startIcon={<AddOutlined color='primary'/>}
      variant='contained'
      title='Agregar'
      >
      Agregar
    </Button>
    <Modal
      onClose={handleClose}
      open={open}
      title='Agregar nuevo usuario'
      footer={
        <>
          <Button color='info' onClick={handleClose} startIcon={<ClearOutlined />} variant='outlined' title='Limpiar datos'>Limpiar</Button>
          <Button color='success' onClick={handleClose} startIcon={<CheckOutlined />} variant='contained' title='Crear usuario'>Confirmar</Button>
        </>
      }
    >
      <Content>
        <Field label={"Nombre"} placeholder={"Ingresá el nombre"}/>
        <Field label={"Apellido"} placeholder={"Ingresá el apellido"}/>
        <Field label={"Email"} placeholder={"Ingresá el email"}/>
        <Field label={"DNI"} placeholder={"Ingresá el DNI"}/>
        <Select items={roles} placeholder={"Elegí el rol"}/>
        <Select items={materias.map(m => m.nombre)} placeholder={"Elegí la materia"}/>
      </Content>
    </Modal>
    </>
  )
}
