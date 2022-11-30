import React, { useContext } from 'react'
import toast from 'react-hot-toast'
import { useDispatch } from 'react-redux'
import { updateAdmin } from '@store'
import { AdminContext, ModalContext } from '@pages/Users/Admins/context'

export const usePasswordResetAdmin = () => {
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

  const handlePasswordReset = async () => {
    if (isFormUncompleted) return
    await enableAlert()
    handleClose()
  }

  const enableAlert = async () => {
    console.log("Admin reset")
    const admin = getAdmin();
    await toast.promise(
      admin.resetPassword(),
      {
        loading: `Reestableciendo contraseña del usuario...`,
        success: (msg) => `Contraseña reestablecida con éxito ${msg}`,
        error: (err: any) => `Error al reestablecer contraseña ${err}`
      }, { id: admin.id.toString() }
    )
    // dispatch(updateAdmin(admin.json))
  }

  return {
    handleClose,
    handlePasswordReset,
  }
}
