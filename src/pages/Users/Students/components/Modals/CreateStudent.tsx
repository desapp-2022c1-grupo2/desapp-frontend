import React, { useContext } from 'react'
import { Toaster } from 'react-hot-toast'
import { Alert, CourseSelector, Modal } from '@components'
import { useCreateStudent } from '@pages/Users/Students/hooks'
import {
  CreateButton,
  FirstnameField,
  LastnameField,
  EmailField
} from '@pages/Users/components'
import { FieldsRow } from './styles'
import { StudentContext, ModalContext } from '../../context'

interface modalProps {
  clearSearchFilter: Function
}

export const CreateStudentModal = ({ clearSearchFilter }: modalProps) => {
  const { isOpenCreate } = useContext(ModalContext)
  const { handleClose, handleCreate } = useCreateStudent()
  const {
    email, handleEmail,
    firstname, handleFirstname,
    lastname, handleLastname,
    course, handleCourse,
    isFormUncompleted,
  } = useContext(StudentContext)

  return (
    <>
      <Toaster toastOptions={{ duration: 3000 }} />
      <Modal
        onClose={handleClose}
        open={isOpenCreate}
        title='Agregar nuevo estudiante'
        footer={<CreateButton disabled={isFormUncompleted} onClick={() => { clearSearchFilter(); handleCreate(); }} />}
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
