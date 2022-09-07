import React, { useState } from 'react'
import {
  CircularProgress,
  Typography,
} from "@mui/material"
import styled from 'styled-components'
import { WriteModalProps } from "./WriteModalProps"
import { updateJtp } from "@services"
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

type changeEvent = React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>

export const EditJtpModal = ({jtp, courses}: WriteModalProps) => {
  const [open, setOpen] = useState(false)
  const [name, setName] = useState(jtp.name)
  const [lastName, setLastname] = useState(jtp.lastName);
  const [email, setEmail] = useState(jtp.email);
  const [selectedCourse, setSelectedCourse] = useState(jtp.courseId);
  const [loading, setLoading] = useState(false);
  const formIsCompleted = name && lastName && email && selectedCourse

  const handleOpen = () => { setOpen(true) }
  const handleClose = () => { setOpen(false) }
  const handleChange = (
    setState: Function,
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const value: string = event.target.value
    value && setState(value)
  }

  const handleUpdate = async () => {
    setLoading(true)
    await updateJtp({
      ...jtp,
      name,
      lastName,
      email,
      courseId: selectedCourse,
      updatedAt: Date.now().toLocaleString()
    })
    setLoading(false)
    handleClose()
  }

  return (
    <>
      <Button
        color='info'
        onClick={handleOpen}
        startIcon={<EditOutlined/>}
        variant='contained'
        text='Editar'
        title='Editar usuario'
      />
      <Modal
        onClose={handleClose}
        open={open}
        title='Editar usuario'
        footer={
          <Button
            children={loading? <CircularProgress /> : "Confirmar"}
            color='success'
            onClick={handleUpdate}
            startIcon={<CheckOutlined/>}
            variant='contained'
            title='Confirmar cambios'
          />
        }
      >
        <Content>
          <Field
            defaultValue={name}
            label={"Nombre"}
            onChange={(event: changeEvent) => handleChange(setName, event)}
            placeholder={"Ingresá el nombre"}
          />
          <Field
            defaultValue={lastName}
            label={"Apellido"}
            onChange={(event: changeEvent) => handleChange(setLastname, event)}
            placeholder={"Ingresá el apellido"}
          />
          <Field
            defaultValue={email}
            label={"Email"}
            onChange={(event: changeEvent) => handleChange(setEmail, event)}
            placeholder={"Ingresá el email"}
          />
          <Select
            defaultValue={selectedCourse}
            items={courses.map(course => course.name)}
            label='Materia'
            onChange={(event: changeEvent) => handleChange(setSelectedCourse, event)}
            placeholder={selectedCourse}
          />
        </Content>
        { !formIsCompleted && <Typography color={'unahurRed'}>Tenés que completar los campos</Typography> }
      </Modal>
    </>
  )
}
