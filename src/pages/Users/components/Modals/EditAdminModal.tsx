import React, {useEffect, useState} from 'react'
import {useDispatch} from 'react-redux'
import toast, {Toaster} from 'react-hot-toast'
import {Admin} from '@models'
import {getAdminSelected, selectUpdateAdminModal, setUpdateAdminModal, unselectAdmin, updateAdmin} from '@store'
import {inputChangeEvent} from '@const'
import {Button, CheckOutlined, Field, Modal,} from '@components'
import {updateAdmin as patchAdmin} from '@services'
import {Content, RequiredFieldText} from './styles'
import {PasswordResetModal} from "@pages/Users/components/Modals/PasswordResetModal";

export const EditAdminModal = () => {
  const dispatch = useDispatch()
  // const admin: Admin = new Admin(getAdminSelected())
  const admin: Admin = new Admin({id: 1, role: "admin", name: {first: "test", last:"test"}, email: "test@unahur.edu.ar", password: "1234"});
  const open: boolean = selectUpdateAdminModal();

  const [firstname, setFirstname] = useState<string>(admin.name.first)
  const [lastName, setLastname] = useState<string>(admin.name.last)
  const [email, setEmail] = useState<string>(admin.email)
  const [isFormUncompleted, setForm] = useState<boolean>(false)
  const [flag, setFlag] = useState<boolean>(true)

  useEffect(
    () => {
      if(flag && open) {
        setFirstname(admin.name.first)
        setLastname(admin.name.last)
        setEmail(admin.email)
        setFlag(false)
      }
    }
    , [admin]
  )

  const closeModal = () => {
    setFlag(true)
    dispatch(setUpdateAdminModal(false))
  }
  
  const enableAlert = (admin: Admin) => {
    toast.promise(
        patchAdmin(admin.json),
      {
        loading: <>Actualizando datos de {admin.fullName()}...</>,
        success: <>Datos de {admin.fullName()} actualizados con éxito</>,
        error: <>Error al modificar los datos de {admin.fullName()}</>
      }, { id: admin?.id.toString() }
    )
  }

  const handleChange = (
    setState: Function,
    event: inputChangeEvent
  ) => {
    setForm(!firstname || !lastName || !email)
    setState(event.target.value)
  }

  const handleSubmit = () => {
    if (isFormUncompleted) return

    const newAdmin = new Admin({
      id: admin.id,
      name: { first: firstname, last: lastName },
      email,
    })
    
    enableAlert(newAdmin)
    dispatch(updateAdmin(newAdmin.json))
    dispatch(dispatch(unselectAdmin()))
    closeModal()
  }

  return (
    <>
    <Toaster toastOptions={{ duration: 3000}} />
    {/*<Modal*/}
    {/*  className='modalEditAdmin'*/}
    {/*  onClose={closeModal}*/}
    {/*  open={open}*/}
    {/*  title='Editar Admin'*/}
    {/*  footer={*/}
    {/*    <Button*/}
    {/*        children="Confirmar"*/}
    {/*        color='unahurGreen'*/}
    {/*        disabled={isFormUncompleted}*/}
    {/*        onClick={handleSubmit}*/}
    {/*        startIcon={<CheckOutlined/>}*/}
    {/*        title='Editar Admin'*/}
    {/*        */}
    {/*        variant='contained'*/}
    {/*      />*/}
    {/*  }*/}
    {/*>*/}
    {/*  <Content>*/}
    {/*    <Field*/}
    {/*      required*/}
    {/*      error={!firstname}*/}
    {/*      label={"Nombre"}*/}
    {/*      onChange={(event: inputChangeEvent) => handleChange(setFirstname, event)}*/}
    {/*      placeholder={"Ingresá el nombre"}*/}
    {/*      value={firstname}*/}
    {/*    />*/}
    {/*    <Field*/}
    {/*      required*/}
    {/*      error={!lastName}*/}
    {/*      label={"Apellido"}*/}
    {/*      onChange={(event: inputChangeEvent) => handleChange(setLastname, event)}*/}
    {/*      placeholder={"Ingresá el apellido"}*/}
    {/*      value={lastName}*/}
    {/*    />*/}
    {/*    <Field*/}
    {/*      required*/}
    {/*      error={!email}*/}
    {/*      label={"Email"}*/}
    {/*      onChange={(event: inputChangeEvent) => handleChange(setEmail, event)}*/}
    {/*      placeholder={"Ingresá el email"}*/}
    {/*      value={email}*/}
    {/*    />*/}
    {/*    { isFormUncompleted && <RequiredFieldText>* Completa todos los campos</RequiredFieldText> }*/}
    {/*    <PasswordResetModal/>*/}
    {/*  </Content>*/}
    {/*</Modal>*/}
    </>
  )
}
