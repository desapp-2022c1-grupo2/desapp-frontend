import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import toast, { Toaster } from 'react-hot-toast'
import { SelectChangeEvent } from '@mui/material'
import { ICourse, IJtp, Jtp } from '@models'
import { selectCourses, createJtp } from '@store'
import { inputChangeEvent } from '@const'
import { Content, RequiredFieldText } from './styles'
import { NewJtpModalProps } from './props'
import {
  AddOutlined,
  Button,
  CheckOutlined,
  Field,
  Modal,
  Select,
} from '@components'
import { postJtp } from '@services'

export const NewJtpModal = ({ id }: NewJtpModalProps) => {
  const dispatch = useDispatch()
  const courses: ICourse[] = selectCourses()
  const [name, setName] = useState({ first: '', last: '' })
  const [open, setOpen] = useState(false)
  const [email, setEmail] = useState('')
  const [course, setCourse] = useState('')
  const [isFormUncompleted, setForm] = useState(false)

  useEffect(() => { setForm(!name.first || !name.last || !email || !course) }, [name, email, course])
  
  const handleCourse = (event: SelectChangeEvent<unknown>) => { setCourse(event.target.value as string) }
  const handleEmail = (e: inputChangeEvent) => { setEmail(e.target.value) }
  const handleFirstName = (e: inputChangeEvent) => { setName({ ...name, first: e.target.value }) }
  const handleLastName = (e: inputChangeEvent) => { setName({ ...name, last: e.target.value }) }
  const handleOpen = () => { setOpen(true) }

  const clearInputs = () => {
    setName({ first: '', last: '' })
    setEmail('')
    setCourse('')
  }

  const closeModal = () => {
    setOpen(false)
    setForm(false)
    clearInputs()
  }

  const enableAlert = (jtp: Jtp) => {
    toast.promise(
      postJtp(jtp.json),
      {
        loading: <>Agregando al JTP {jtp.fullName()}...</>,
        success: <>JTP {jtp.fullName()} agregado con éxito</>,
        error: <>Error al crear al JTP {jtp.fullName()}</>
      }, { id: jtp.id.toString() }
    )
  }

  const handleCreateJtp = () => {
    if (isFormUncompleted) return

    const jtp = new Jtp({
      name,
      email,
      course: courses[parseInt(course)],
    })
    enableAlert(jtp)
    dispatch(createJtp(jtp.json))
    closeModal()
  }

  return (
    <>
      <Toaster toastOptions={{ duration: 3000}}/>
      <Button
        color='unahurGreen'
        id={id ? id.toString() : ''}
        onClick={handleOpen}
        startIcon={<AddOutlined/>}
        variant='contained'
        text='Agregar'
        title='Agregar'
      />
      <Modal
        onClose={closeModal}
        open={open}
        title='Agregar nuevo usuario'
        footer={
          <Button
              children="Confirmar"
              color='unahurGreen'
              disabled={isFormUncompleted}
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
            error={!name.first}
            label={"Nombre"}
            onChange={handleFirstName}
            placeholder={"Ingresá el nombre"}
            value={name.first}
          />
          <Field
            required
            error={!name.last}
            label={"Apellido"}
            onChange={handleLastName}
            placeholder={"Ingresá el apellido"}
            value={name.last}
          />
          <Field
            required
            error={!email}
            label={"Email"}
            onChange={handleEmail}
            placeholder={"Ingresá el email"}
            value={email}
          />
          <Select
            required
            items={courses ? courses.map(course => course.name ? course.name : '') : []}
            label='Materia'
            onChange={handleCourse}
            placeholder={course.toString()}
            value={course}
          />
          { isFormUncompleted && <RequiredFieldText>* Completa todos los campos</RequiredFieldText> }
        </Content>
      </Modal>
    </>
  )
}
function dispatch(arg0: any) {
  throw new Error('Function not implemented.')
}

