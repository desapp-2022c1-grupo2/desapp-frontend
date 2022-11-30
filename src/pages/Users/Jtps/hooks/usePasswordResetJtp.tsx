import React, {useContext} from 'react'
import toast from 'react-hot-toast'
import {useDispatch} from 'react-redux'
import {ModalContext} from '@pages/Users/Admins/context'
import {JtpContext} from "@pages/Users/Jtps/context";

export const usePasswordResetJtp = () => {
  const { closeUpdate } = useContext(ModalContext)

  const {
    isFormUncompleted,
    getJtp,
    unselect,
  } = useContext(JtpContext)

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
    const jtp = getJtp()
    await toast.promise(
      jtp.resetPassword(),
      {
        loading: `Reestableciendo contraseña del usuario...`,
        success: (msg) => `Contraseña reestablecida con éxito ${msg}`,
        error: (err: any) => `Error al reestablecer contraseña ${err}`
      }, { id: jtp.id.toString() }
    )
  }

  return {
    handleClose,
    handlePasswordReset,
  }
}
