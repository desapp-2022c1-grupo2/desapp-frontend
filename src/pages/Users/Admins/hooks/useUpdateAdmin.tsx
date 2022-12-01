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

  const handleUpdate = async () => {
    if (isFormUncompleted) return
    await enableAlert()
    handleClose()
  }

  const enableAlert = async () => {
    const admin = getAdmin()
    await toast.promise(
      admin.patch(),
      {
        loading: <>Actualizando datos de {admin.fullName()}...</>,
        success: <>Datos de {admin.fullName()} actualizados con éxito</>,
        error: <>Error al modificar los datos de {admin.fullName()}</>
      }, { id: admin.id.toString() }
    )
    dispatch(updateAdmin(admin.json))
  }

  return {
    handleClose,
    handleUpdate,
  }
}