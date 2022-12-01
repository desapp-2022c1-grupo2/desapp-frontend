import React from 'react'
import { Toaster } from 'react-hot-toast'
import { Button } from '@components'
import { LockResetOutlined } from "@mui/icons-material"
import { usePasswordResetAdmin } from "@pages/Users/Admins/hooks/usePasswordResetAdmin"

export const PasswordResetButton = () => {
  const { handlePasswordReset } = usePasswordResetAdmin();

  return (
    <>
      <Toaster toastOptions={{ duration: 3000 }} />
      <Button
        startIcon={<LockResetOutlined />}
        color='unahurRed'
        text='Reestablecer contraseña'
        title='Reestablecer contraseña'
        variant='contained'
        onClick={handlePasswordReset}
      />
    </>
  )
}
