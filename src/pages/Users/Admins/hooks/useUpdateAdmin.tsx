import React, { useContext } from 'react'
import toast from 'react-hot-toast'
import { useDispatch } from 'react-redux'
import { updateAdmin } from '@store'
import { AdminContext, ModalContext } from '@pages/Users/Admins/context'

export const useUpdateAdmin = () => {
  const dispatch = useDispatch()
  const { closeUpdate } = useContext(ModalContext)

  const {
    isFormUncompleted,
    getAdmin,
    unselect,
  } = useContext(AdminContext)

  const handleClose = () => {
    closeUpdate()
    unselect()
  }

  const handleUpdate = () => {
    if (isFormUncompleted) return
    enableAlert()
    handleClose()
  }

  const enableAlert = async () => {
    const adin = getAdmin()
    await toast.promise(
      adin.patch(),
      {
        loading: <>Actualizando datos de {adin.fullName()}...</>,
        success: <>Datos de {adin.fullName()} actualizados con éxito</>,
        error: <>Error al modificar los datos de {adin.fullName()}</>
      }, { id: adin.id.toString() }
    )
    dispatch(updateAdmin(adin.json))
  }

  return {
    handleClose,
    handleUpdate,
  }
}