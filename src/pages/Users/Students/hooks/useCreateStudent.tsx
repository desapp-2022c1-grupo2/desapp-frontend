import React, { useContext } from 'react'
import { useDispatch } from 'react-redux'
import toast from 'react-hot-toast'
import { Student } from '@models'
import { StudentContext, ModalContext } from '@pages/Users/Students/context'
import { postStudent } from '@services'
import { getStudents } from '@store'

export const useCreateStudent = () => {
  const dispatch = useDispatch()
  
  const {
    unselect,
    getStudent,
    isFormUncompleted,
  } = useContext(StudentContext)

  const {
    closeCreate,
    openCreate,
  } = useContext(ModalContext)

  const handleOpen = () => { openCreate() }
  const handleClose = () => {
    closeCreate()
    unselect()
  }

  const handleCreate = async () => {
    if (isFormUncompleted) return
    const student = getStudent()

    await enableAlert(student)
    handleClose()
  }

  const enableAlert = async (student: Student) => {
    await toast.promise(
      postStudent(getStudent().json),
      {
        loading: <>Agregando estudiante {student.fullName()}...</>,
        success: <>Estudiante {student.fullName()} agregado con éxito</>,
        error: <>Error al crear al estudiante {student.fullName()}</>
      }, { id: student.id.toString() }
    )
    dispatch(getStudents())
  }

  return {
    handleCreate,
    handleOpen,
    handleClose,
  }

}