import React from 'react'
import { AppLayout } from "@components"
import { AssignmentTable } from "../components"
import { ModalProvider, SelectedProvider } from '../context'

export const AssignmentsPage = () => {
  return (
    <SelectedProvider>
      <ModalProvider>
        <AppLayout title="Trabajos Prácticos" children={<AssignmentTable />} />
      </ModalProvider>
    </SelectedProvider>
  )
}
