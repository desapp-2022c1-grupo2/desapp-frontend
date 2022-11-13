import React from 'react'
import toast, {Toaster} from 'react-hot-toast'
import {useDispatch} from 'react-redux'
import {Button, SmallModal,} from '@components'
import {Jtp} from '@models'
import {resetPasswordJtp} from '@services'
import {
  getJtpSelected,
  resetPassword,
  selectPasswordResetJtpModal,
  setPasswordResetJtpModal,
  unselectJtp
} from '@store'
import {LockResetOutlined} from "@mui/icons-material";

export const PasswordResetModal = () => {
  const dispatch = useDispatch()
  const jtp = new Jtp(getJtpSelected())
  const open: boolean = selectPasswordResetJtpModal()
  const closeModal = () => { dispatch(setPasswordResetJtpModal(false)) }

  const enableAlert = () => {
    toast.promise(
        resetPasswordJtp(jtp.email, "JTP", jtp.id),
        {
          loading: <>Reestableciendo contraseña a {jtp.fullName()}...</>,
          success: <>Contraseña de {jtp.fullName()} reestablecida con éxito</>,
          error: <>Error al reestablecer contraseña a {jtp.fullName()}</>
        }, { id: jtp?.id.toString() }
    )
  }

  const resetPasswordJtpSelected = () => {
    dispatch(resetPassword(jtp.json))
    dispatch(unselectJtp())
  }

  const handleReset = () => {
    enableAlert()
    resetPasswordJtpSelected()
    closeModal()
  }

  return (
      <>
        <Toaster toastOptions={{ duration: 3000}} />
        <Button
            startIcon={<LockResetOutlined/>}
            color='unahurRed'
            text='Reestablecer contraseña'
            title='Reestablecer contraseña'
            variant='contained'
            onClick={handleReset}
        />
      {/*  TODO: Agregar smallmodal para la confirmación*/}
      </>
  )
}
