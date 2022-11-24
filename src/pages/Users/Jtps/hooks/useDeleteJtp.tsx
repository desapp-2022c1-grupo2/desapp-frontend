import React, { useContext } from "react"
import toast from "react-hot-toast"
import { useDispatch } from "react-redux"
import { deleteJtp } from "@store"
import { JtpContext, ModalContext } from '@pages/Users/Jtps/context'

export const useDeleteJtp = () => {
  const dispatch = useDispatch()
  const { selected, unselect } = useContext(JtpContext)
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
    dispatch(deleteJtp(selected.json))
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