import React, { useContext } from 'react'
import { Toaster } from 'react-hot-toast'
import { Alert, CourseSelector, Modal } from '@components'
import {
  EmailField,
  FirstnameField,
  LastnameField,
  UpdateButton,
} from '@pages/Users/components'
import { useUpdateStudent } from '@pages/Users/Students/hooks'
import { FieldsRow } from './styles'
import { StudentContext, ModalContext } from '../../context'

interface modalProps {
  clearSearchFilter: Function
}

export const UpdateStudentModal = ({ clearSearchFilter }: modalProps) => {
  const { isOpenUpdate } = useContext(ModalContext)
  const {
    email, handleEmail,
    firstname, handleFirstname,
    lastname, handleLastname,
    course, handleCourse,
    isFormUncompleted,
  } = useContext(StudentContext)

  const {
    handleClose,
    handleUpdate,
  } = useUpdateStudent()

  return (
    <>
      <Toaster toastOptions={{ duration: 3000 }} />
      <Modal
        className='modalEditStudent'
        onClose={handleClose}
        open={isOpenUpdate}
        title='Editar Estudiante'
        footer={<UpdateButton disabled={isFormUncompleted} onClick={() => { clearSearchFilter(); handleUpdate(); }} />}
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
            defaultValue={course?.id}
            value={course ? course.id : -1}
          />
        </FieldsRow>
        <Alert severity='error' enable={isFormUncompleted}>Completa todos los campos</Alert>
      </Modal>
    </>
  )
}
