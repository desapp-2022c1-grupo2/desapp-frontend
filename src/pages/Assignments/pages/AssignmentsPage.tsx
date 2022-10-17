import React from 'react'
import { AppLayout } from "@components"
import { AssignmentTable } from "@src/pages/Users/components"

export const AssignmentsPage = () => <AppLayout title="Trabajos Prácticos" children={<AssignmentTable />} />