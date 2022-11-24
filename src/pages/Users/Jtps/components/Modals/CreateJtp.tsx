import React, { useContext } from 'react'
import { Toaster } from 'react-hot-toast'
import { Alert, CourseSelector, Modal } from '@components'
import { useCreateJtp } from '@pages/Users/Jtps/hooks'
import {
  CreateButton,
  FirstnameField,
  LastnameField,
  EmailField
} from '@pages/Users/components'
import { FieldsRow } from './styles'
import { JtpContext, ModalContext } from '../../context'

export const CreateJtpModal = () => {
  const { isOpenCreate } = useContext(ModalContext)
  const {
    email, handleEmail,
    firstname, handleFirstname,
    lastname, handleLastname,
    course, handleCourse,
    isFormUncompleted,
  } = useContext(JtpContext)

  const {
    handleClose,
    handleCreate,
    handleOpen,
  } = useCreateJtp()

  return (
    <>
      <Toaster toastOptions={{ duration: 3000 }} />
      <Modal
        onClose={handleClose}
        open={isOpenCreate}
        title='Agregar nuevo Jefe de TP'
        footer={<CreateButton disabled={isFormUncompleted} onClick={handleCreate} />}
      >
        <FieldsRow>
          <FirstnameField
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
        <Alert severity='error' enable={isFormUncompleted}>
          Completa todos los campos
        </Alert>
      </Modal>
    </>
  )
}
