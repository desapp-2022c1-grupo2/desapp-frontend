import React from 'react'
import { AppLayout } from "@components"
import { EvaluationTable } from "../components"
import { SelectedProvider, ModalProvider } from '../context'

export const EvaluationsPage = () => {
  return (
    <SelectedProvider>
      <ModalProvider>
        <AppLayout title="Evaluaciones" children={<EvaluationTable />} />
      </ModalProvider>
    </SelectedProvider>
  )
}