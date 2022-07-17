import React, {useState} from 'react'
import styled from 'styled-components'
import {
  Button,
  CheckOutlined,
  EditOutlined,
  Field,
  Modal,
  Select,
} from '@components'
import {
  materias,
  roles,
} from '../../const'
import {WriteModalProps} from "./WriteModalProps";
import {createJtp, updateJtp} from "../../../../service";
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

export const EditJtpModal = ({jtp}: WriteModalProps) => {
  const [open, setOpen] = useState(false)
  const handleOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }

  const [name, setName] = useState("");
  const [lastName, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [materia, setMateria] = useState(-1);

  const handleChange = (setState: Function, event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const value = event.target.value;
    if (value !== '') {
      setState(value);
    }
  };
  return (
    <>
      <Button
        color='info'
        onClick={handleOpen}
        startIcon={<EditOutlined/>}
        variant='contained'
        title='Editar usuario'
      >
        Editar
      </Button>
      <Modal
        onClose={handleClose}
        open={open}
        title='Editar usuario'
        footer={
          <>
            <Button color='success' onClick={
              async () => {
                await updateJtp(new JtpAdapter(jtp.id, name, lastName, email, materia));
                handleClose();
              }
            } startIcon={<CheckOutlined/>} variant='contained' title='Confirmar cambios'>Confirmar</Button>
          </>
        }
      >
        <Content>
          <Field label={"Nombre"} defaultValue={jtp.nombre} placeholder={"Ingresá el nombre"}
                 onChange={(event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => handleChange(setName, event)}/>
          <Field label={"Apellido"} defaultValue={jtp.apellido} placeholder={"Ingresá el apellido"}
                 onChange={(event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => handleChange(setLastname, event)}/>
          <Field label={"Email"} defaultValue={jtp.email} placeholder={"Ingresá el email"}
                 onChange={(event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => handleChange(setEmail, event)}/>
          <Select defaultValue={jtp.materia} items={materias.map(m => m.nombre)} placeholder={"Elegí la materia"}
                  onChange={(event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => handleChange(setMateria, event)}/>
        </Content>
      </Modal>
    </>
  )
}
