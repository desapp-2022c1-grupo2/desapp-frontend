import React, { useState } from 'react'
import {passwordResetJtp} from '@store/users'
import { DeleteJtpModalProps } from "./props"
import {
  Button,
  CircularProgress,
  SmallModal,
} from '@components'
import { useDispatch } from 'react-redux'
import {LockResetOutlined} from "@mui/icons-material";

export const ResetPasswordJtpModal = ({ jtp }: DeleteJtpModalProps) => {
  const dispatch = useDispatch()
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  
  const handleOpen = () => { setOpen(true) }
  const handleClose = () => { setOpen(false) }

  const handlePasswordReset = () => {
    setLoading(true)
    dispatch(passwordResetJtp(jtp))
    setLoading(false)
    handleClose()
  }

  return (
    <>
    <Button
      startIcon={<LockResetOutlined/>}
      color='unahurRed'
      onClick={handleOpen}
      text='Reestablecer contraseña'
      title='Reestablecer contraseña'
      variant='contained'
    />
    <SmallModal
      className='modalDeleteJtp'
      onClose={handleClose}
      open={open}
      title='Reestablecer contraseña para Jefe de Trabajos Practicos'
      footer={
        <Button
          children={ loading ? <CircularProgress /> : "Reestablecer contraseña" }
          color='unahurRed'
          onClick={handlePasswordReset}
          variant='contained'
          title='Reestablecer contraseña'
        />
      }
    >
      <p>Está a punto de reestablecer contraseña para el JTP "<b>{jtp.name} {jtp.lastName}</b>"<br/> este cambio es permanente y le asignará una contraseña generica</p>
    </SmallModal>
    </>
  )
}
