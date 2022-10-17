import React from 'react'
import { AppLayout } from "@components"
import { AssignmentTable } from "@src/pages/Users/components"

export const EvaluationsPage = () => <AppLayout title="Evaluaciones" children={<AssignmentTable />} />