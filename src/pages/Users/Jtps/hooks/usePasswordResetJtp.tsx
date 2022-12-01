import React, { useContext } from 'react'
import toast from 'react-hot-toast'
import { JtpContext, ModalContext } from "@pages/Users/Jtps/context"
import { Jtp } from '@src/models'

export const usePasswordResetJtp = () => {
  const { closeUpdate } = useContext(ModalContext)
  const { getJtp, unselect } = useContext(JtpContext)

  const handleClose = () => {
    closeUpdate()
    unselect()
  }

  const handlePasswordReset = async () => {
    await enableAlert()
    handleClose()
  }

  const enableAlert = async () => {
    const jtp: Jtp = getJtp()
    await toast.promise(
      jtp.resetPassword(),
      {
        loading: `Reestableciendo contraseña de ${jtp.fullName()}...`,
        success: `Contraseña de ${jtp.fullName()} reestablecida con éxito`,
        error: `Error al reestablecer contraseña`
      }, { id: jtp.id.toString() }
    )
  }

  return {
    handleClose,
    handlePasswordReset,
  }
}
