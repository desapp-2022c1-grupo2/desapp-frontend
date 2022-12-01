import React, { useContext } from 'react'
import { Toaster } from 'react-hot-toast'
import { Alert, CourseSelector, Modal } from '@components'
import {
  EmailField,
  FirstnameField,
  LastnameField,
  UpdateButton,
} from '@pages/Users/components'
import { useUpdateJtp } from '@pages/Users/Jtps/hooks'
import { FieldsRow } from './styles'
import { JtpContext, ModalContext } from '../../context'
import { PasswordResetButton } from '../PasswordResetButton'

export const UpdateJtpModal = () => {
  const { isOpenUpdate } = useContext(ModalContext)
  const {
    email, handleEmail,
    firstname, handleFirstname,
    lastname, handleLastname,
    course, handleCourse,
    isFormUncompleted,
  } = useContext(JtpContext)

  const {
    handleClose,
    handleUpdate,
  } = useUpdateJtp()

  return (
    <>
      <Toaster toastOptions={{ duration: 3000 }} />
      <Modal
        className='modalEditJtp'
        onClose={handleClose}
        open={isOpenUpdate}
        title='Editar Jefe de trabajos Practicos'
        footer={<UpdateButton disabled={isFormUncompleted} onClick={handleUpdate} />}
      >
        <FieldsRow>
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
        </FieldsRow>
        <FieldsRow>

          <EmailField
            error={!email.includes('@')}
            onChange={handleEmail}
            value={email}
          />
          <CourseSelector
            onChange={handleCourse}
            value={course?.id || -1}
          />
        </FieldsRow>
        <PasswordResetButton />
        <Alert severity='error' enable={isFormUncompleted}>Completa todos los campos</Alert>
      </Modal>
    </>
  )
}
