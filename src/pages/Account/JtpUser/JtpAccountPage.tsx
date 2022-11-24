import React from 'react'
import { AppLayout } from '@components'
import { AuthenticatedJtpInfo } from './components'
import { AuthenticatedJtpProvider } from './context'

export const JtpAccountPage = () => {
  return (
    <AuthenticatedJtpProvider>
      <AppLayout title='Mi Cuenta'>
        <AuthenticatedJtpInfo />
      </AppLayout>
    </AuthenticatedJtpProvider>
  )
}
