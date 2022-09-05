import React, {useState} from 'react'
import styled from 'styled-components'
import {CircularProgress, Typography} from "@mui/material"
import {createJtp} from "../../../../services"
import {WriteModalProps} from "./WriteModalProps"
import {AddOutlined, Button, CheckOutlined, Field, Modal, Select,} from '@components'

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

export const NewJtpModal = ({ courses, id }: WriteModalProps) => {
  const [open, setOpen] = useState(false)
  const [name, setName] = useState("")
  const [lastName, setLastname] = useState("")
  const [email, setEmail] = useState("")
  const [selectedCourse, setSelectedCourse] = useState(0)
  const [loading, setLoading] = useState(false)
  const formIsCompleted = name && lastName && email && selectedCourse;

  const handleOpen = () => { setOpen(true) }
  const handleClose = () => { setOpen(false) }

  const handleChange = (setState: Function, event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const value = event.target.value;
    if (value !== '') {
      setState(value);
    }
  }

  const handleCreateJtp = async () => {
    if (!formIsCompleted) return
    setLoading(true)
    await createJtp({
      name,
      lastName,
      email,
      courseId: selectedCourse,
    })
    setLoading(false)
    handleClose()
  }

  return (
    <>
      <Button
        color='unahurGreen'
        id={id}
        onClick={handleOpen}
        startIcon={<AddOutlined/>}
        variant='contained'
        text='Agregar'
        title='Agregar'
      />
      <Modal
        onClose={handleClose}
        open={open}
        title='Agregar nuevo usuario'
        footer={
          <Button
            children={loading ? <CircularProgress/> : "Confirmar"}
            color='unahurGreen'
            disabled={!formIsCompleted}
            onClick={handleCreateJtp}
            startIcon={<CheckOutlined/>}
            title='Crear usuario'
            variant='contained'
          />
        }
      >
        <Content>
          <Field
            required
            error={!name}
            label={"Nombre"}
            onChange={(event: changeEvent) => handleChange(setName, event)}
            placeholder={"Ingresá el nombre"}
          />
          <Field
            required
            error={!lastName}
            label={"Apellido"}
            onChange={(event: changeEvent) => handleChange(setLastname, event)}
            placeholder={"Ingresá el apellido"}
          />
          <Field
            required
            error={!email}
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
          { !formIsCompleted && <Typography color={'error'}>Tenés que completar los campos</Typography> }
        </Content>
      </Modal>
    </>
  )
}
