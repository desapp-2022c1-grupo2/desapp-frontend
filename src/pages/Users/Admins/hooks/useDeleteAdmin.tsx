import React, { useContext } from "react"
import toast from "react-hot-toast"
import { useDispatch } from "react-redux"
import { deleteAdmin } from "@store"
import { AdminContext, ModalContext } from '@pages/Users/Admins/context'

export const useDeleteAdmin = () => {
  const dispatch = useDispatch()
  const { selected, unselect } = useContext(AdminContext)
  const { isOpenDelete, closeDelete } = useContext(ModalContext)

  const enableAlert = async () => {
    await toast.promise(
      selected.delete(),
      {
        loading: <>Eliminando a {selected.fullName()}...</>,
        success: <>Usuario {selected.fullName()} eliminado con éxito </>,
        error: <>Error al eliminar a {selected.fullName()} </>
      }, { id: selected.id.toString() }
    )
    dispatch(deleteAdmin(selected.json))
  }

  const handleClose = () => {
    closeDelete()
    unselect()
  }

  const handleDelete = async () => {
    await enableAlert()
    closeDelete()
  }

  return {
    handleDelete,
    handleClose,
    isOpenDelete,
    selected,
  }
}