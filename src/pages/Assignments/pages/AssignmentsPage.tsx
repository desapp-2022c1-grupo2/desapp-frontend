import React from 'react'
import { AppLayout } from "@components"
import { AssignmentTable } from "../components"

const Content = () => {
  return (
    <AssignmentTable />
  )
}

export const AssignmentsPage = () => <AppLayout title="Trabajos Prácticos" children={<Content />} />