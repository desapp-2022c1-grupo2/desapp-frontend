import React, { useContext } from 'react'
import { Toaster } from 'react-hot-toast'
import { Alert, CourseSelector, Modal } from '@components'
import {
  EmailField,
  FirstnameField,
  LastnameField,
  UpdateButton,
} from '@pages/Users/components'
import { useUpdateAdmin } from '@pages/Users/Admins/hooks'
import { FieldsRow } from './styles'
import { AdminContext, ModalContext } from '../../context'

export const UpdateAdminModal = () => {
  const { isOpenUpdate } = useContext(ModalContext)
  const {
    email, handleEmail,
    firstname, handleFirstname,
    lastname, handleLastname,
    isFormUncompleted,
  } = useContext(AdminContext)

  const {
    handleClose,
    handleUpdate,
  } = useUpdateAdmin()

  return (
    <>
      <Toaster toastOptions={{ duration: 3000 }} />
      <Modal
        className='modalEditAdmin'
        onClose={handleClose}
        open={isOpenUpdate}
        title='Editar Jefe de trabajos Practicos'
        footer={<UpdateButton disabled={isFormUncompleted} onClick={handleUpdate} />}
      >
        <FirstnameField
          required
          error={!firstname}
          onChange={handleFirstname}
          value={firstname}
        />
        <LastnameField
          error={!lastname}
          onChange={handleLastname}
          value={lastname}
        />
        <EmailField
          error={!email.includes('@')}
          onChange={handleEmail}
          value={email}
        />
        <Alert severity='error' enable={isFormUncompleted}>Completa todos los campos</Alert>
      </Modal>
    </>
  )
}
