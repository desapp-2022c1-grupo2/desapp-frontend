import React from 'react'
import { AppLayout } from '@components'
import { AuthenticatedAdminInfo } from './components'
import { AuthenticatedAdminProvider } from './context'

export const AdminAccountPage = () => {
  return (
    <AuthenticatedAdminProvider>
      <AppLayout title='Mi Cuenta'>
        <AuthenticatedAdminInfo />
      </AppLayout>
    </AuthenticatedAdminProvider>
  )
}
