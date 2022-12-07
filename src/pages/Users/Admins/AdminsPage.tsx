import React from 'react'
import { AppLayout } from '@components'
import { AdminsTable } from '@pages/Users/Admins/components'
import { AdminProvider, ModalProvider } from './context'

export const AdminsPage = () => {
  return (
    <ModalProvider>
    <AdminProvider>
      <AppLayout title='Administradores'>
        <AdminsTable />
      </AppLayout>
    </AdminProvider>
    </ModalProvider>
  )
}
