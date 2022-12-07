import React from 'react'
import { AppLayout } from '@components'
import { JtpTable } from '@pages/Users/Jtps/components'
import { JtpProvider, ModalProvider } from './context'

export const JtpsPage = () => {
  return (
    <ModalProvider>
    <JtpProvider>
      <AppLayout title='Jefes de Trabajos Prácticos'>
        <JtpTable />
      </AppLayout>
    </JtpProvider>
    </ModalProvider>
  )
}
