import React from 'react'
import { Toaster } from 'react-hot-toast'
import { Button } from '@components'
import { LockResetOutlined } from "@mui/icons-material"
import { usePasswordResetJtp } from "@pages/Users/Jtps/hooks/usePasswordResetJtp"

export const PasswordResetButton = () => {
  const { handlePasswordReset } = usePasswordResetJtp();

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
