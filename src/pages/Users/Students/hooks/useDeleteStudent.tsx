import React, { useContext } from "react"
import toast from "react-hot-toast"
import { useDispatch } from "react-redux"
import { deleteStudent } from "@store"
import { StudentContext, ModalContext } from '@pages/Users/Students/context'

export const useDeleteStudent = () => {
  const dispatch = useDispatch()
  const { selected, unselect } = useContext(StudentContext)
  const { isOpenDelete, closeDelete } = useContext(ModalContext)

  const enableAlert = async () => {
    await toast.promise(
      selected.delete(),
      {
        loading: <>Eliminando a {selected.fullName()}...</>,
        success: <>Estudiante {selected.fullName()} eliminado del sistema </>,
        error: <>Error al eliminar a {selected.fullName()} </>
      }, { id: selected.id.toString() }
    )
    dispatch(deleteStudent(selected.json))
  }

  const handleClose = () => {
    closeDelete()
    unselect()
  }

  const handleDelete = () => {
    enableAlert()
    closeDelete()
  }

  return {
    handleDelete,
    handleClose,
    isOpenDelete,
    selected,
  }
}