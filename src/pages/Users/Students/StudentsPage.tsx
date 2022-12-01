import React from 'react'
import { AppLayout } from '@components'
import { StudentTable } from '@src/pages/Users/Students/components'
import { StudentProvider, ModalProvider } from './context'

export const StudentsPage = () => {
  return (
    <ModalProvider>
    <StudentProvider>
      <AppLayout title='Estudiantes'>
        <StudentTable />
      </AppLayout>
    </StudentProvider>
    </ModalProvider>
  )
}
