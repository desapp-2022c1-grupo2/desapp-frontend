import React, { useContext } from 'react'
import toast from 'react-hot-toast'
import { useDispatch } from 'react-redux'
import { updateStudent } from '@store'
import { StudentContext, ModalContext } from '@pages/Users/Students/context'

export const useUpdateStudent = () => {
  const dispatch = useDispatch()
  const { closeUpdate } = useContext(ModalContext)

  const {
    isFormUncompleted,
    getStudent,
    unselect,
  } = useContext(StudentContext)

  const handleClose = () => {
    closeUpdate()
    unselect()
  }

  const handleUpdate = async () => {
    if (isFormUncompleted) return
    await enableAlert()
    handleClose()
  }

  const enableAlert = async () => {
    const student = getStudent()
    await toast.promise(
      student.patch(),
      {
        loading: <>Actualizando datos de {student.fullName()}...</>,
        success: <>Datos de {student.fullName()} actualizados</>,
        error: <>Error al modificar los datos de {student.fullName()}</>
      }, { id: student.id.toString() }
    )
    dispatch(updateStudent(student.json))
  }

  return {
    handleClose,
    handleUpdate,
  }
}