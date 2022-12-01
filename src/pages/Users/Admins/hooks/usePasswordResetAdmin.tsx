import React, { useContext } from 'react'
import toast from 'react-hot-toast'
import { AdminContext, ModalContext } from '@pages/Users/Admins/context'
import { Admin } from '@src/models'

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
    const admin: Admin = getAdmin();
    await toast.promise(
      admin.resetPassword(),
      {
        loading: `Reestableciendo contraseña de ${admin.fullName()}...`,
        success: (msg) => `Contraseña de ${admin.fullName()} reestablecida con éxito`,
        error: (err: any) => `Error al reestablecer contraseña ${err}`
      }, { id: admin.id.toString() }
    )
  }

  return {
    handleClose,
    handlePasswordReset,
  }
}
