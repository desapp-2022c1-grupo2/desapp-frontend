import React, {useState} from 'react'
import styled from 'styled-components'
import {Button, CheckOutlined, EditOutlined, Field, Modal, Select,} from '@components'
import {WriteModalProps} from "./WriteModalProps";
import {updateJtp} from "../../../../service";
import {CircularProgress, Typography} from "@mui/material";
import {Jtp} from "../../../../models";

const Content = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  flex-grow: 2;
  gap: 8px;
  height: 80%;
  justify-content: center;
`

export const EditJtpModal = ({jtp, courses}: WriteModalProps) => {
  const [open, setOpen] = useState(false)
  const handleOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }

  const [name, setName] = useState(jtp.name);
  const [lastName, setLastname] = useState(jtp.lastName);
  const [email, setEmail] = useState(jtp.email);
  const [selectedCourse, setSelectedCourse] = useState(jtp.courseId);
  const [loading, setLoading] = useState(false);
  const formIsCompleted = name && lastName && email && selectedCourse;

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
                setLoading(true);
                await updateJtp(new Jtp({
                  id: jtp.id,
                  name: name,
                  lastName: lastName,
                  email: email,
                  courseId: selectedCourse,
                  createdAt: jtp.createdAt,
                  updatedAt: Date.now().toLocaleString()
                }));
                setLoading(false);
                handleClose();
              }
            } startIcon={<CheckOutlined/>} variant='contained' title='Confirmar cambios'>
              {loading? <CircularProgress /> : "Confirmar"}
            </Button>
          </>
        }
      >
        <Content>
          <Field label={"Nombre"} defaultValue={name} placeholder={"Ingresá el nombre"}
                 onChange={(event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => handleChange(setName, event)}/>
          <Field label={"Apellido"} defaultValue={lastName} placeholder={"Ingresá el apellido"}
                 onChange={(event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => handleChange(setLastname, event)}/>
          <Field label={"Email"} defaultValue={email} placeholder={"Ingresá el email"}
                 onChange={(event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => handleChange(setEmail, event)}/>
          <Select defaultValue={selectedCourse} items={courses.map(course => course.name)} placeholder={selectedCourse}
                  onChange={(event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => handleChange(setSelectedCourse, event)}/>
        </Content>
        {!formIsCompleted && <Typography color={'error'}>Tenés que completar los campos</Typography>}
      </Modal>
    </>
  )
}
