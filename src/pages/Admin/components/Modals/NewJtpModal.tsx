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
} from '../../../../components'
import {
  materias,
  roles,
} from '../../const'
import {createJtp} from "../../../../service";
import {JtpAdapter} from "../../../../models/JtpAdapter";

const Content = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  flex-grow: 2;
  gap: 8px;
  height: 80%;
  justify-content: center;
`

export const NewJtpModal = () => {
  const [open, setOpen] = useState(false)
  const handleOpen = () => { setOpen(true) }
  const handleClose = () => { setOpen(false) }

  const [name, setName] = useState("");
  const [lastName, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [materia, setMateria] = useState(-1);

  const handleChange = (setState: Function, event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
      setState(event.target.value);
    };

  return (
    <>
    <Button
      color='unahurGreen'
      onClick={handleOpen}
      startIcon={<AddOutlined />}
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
          <Button color='unahurGreen' onClick={
            async () => {
              await createJtp(new JtpAdapter(-1, name, lastName, email, materia));
              handleClose();
            }
          } startIcon={<CheckOutlined />} variant='contained' title='Crear usuario'>Confirmar</Button>
        </>
      }
    >
      <Content>
        <Field label={"Nombre"} placeholder={"Ingresá el nombre"} onChange={(event) => handleChange(setName, event)}/>
        <Field label={"Apellido"} placeholder={"Ingresá el apellido"} onChange={(event) => handleChange(setLastname, event)}/>
        <Field label={"Email"} placeholder={"Ingresá el email"} onChange={(event) => handleChange(setEmail, event)}/>
        <Select items={materias.map(m => m.nombre)} placeholder={"Elegí la materia"} onChange={(event) => handleChange(setMateria, event)}/>
      </Content>
    </Modal>
    </>
  )
}
