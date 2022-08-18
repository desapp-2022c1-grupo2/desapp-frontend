import React, {useState} from 'react'
import styled from 'styled-components'
import {AddOutlined, Button, CheckOutlined, Field, Modal, Select,} from '../../../../components'
import {createJtp} from "../../../../service";
import {CircularProgress, Typography} from "@mui/material";
import {WriteModalProps} from "./WriteModalProps";
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

export const NewJtpModal = ({courses}: WriteModalProps) => {
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
  const [selectedCourse, setSelectedCourse] = useState(0);
  const [loading, setLoading] = useState(false);

  const handleChange = (setState: Function, event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const value = event.target.value;
    if (value !== '') {
      setState(value);
    }
  };


  const createAndClose = async () => {
    setLoading(true);
    await createJtp(new Jtp({
      name: name,
      lastName: lastName,
      email: email,
      courseId: selectedCourse,
      createdAt: Date.now().toLocaleString(),
      updatedAt: Date.now().toLocaleString(),
    }));
    setLoading(false);
    handleClose();
  }

  const formIsCompleted = name && lastName && email && selectedCourse;
  return (
    <>
      <Button
        color='unahurGreen'
        onClick={handleOpen}
        startIcon={<AddOutlined/>}
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
            <Button color='unahurGreen' onClick={() => {
              if (formIsCompleted) {
                createAndClose()
              }
            }
            }
                    startIcon={<CheckOutlined/>}
                    variant='contained'
                    title='Crear usuario'
                    disabled={!formIsCompleted}>
              {loading ? <CircularProgress/> : "Confirmar"}
            </Button>
          </>
        }
      >
        <Content>
          <Field required error={!name} label={"Nombre"} placeholder={"Ingresá el nombre"}
                 onChange={(event) => handleChange(setName, event)}/>
          <Field required error={!lastName} label={"Apellido"} placeholder={"Ingresá el apellido"}
                 onChange={(event) => handleChange(setLastname, event)}/>
          <Field required error={!email} label={"Email"} placeholder={"Ingresá el email"}
                 onChange={(event) => handleChange(setEmail, event)}/>
          <Select defaultValue={selectedCourse} items={courses.map(course => course.name)} placeholder={selectedCourse}
                  onChange={(event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => handleChange(setSelectedCourse, event)}/>
          {!formIsCompleted && <Typography color={'error'}>Tenés que completar los campos</Typography>}
        </Content>
      </Modal>
    </>
  )
}
