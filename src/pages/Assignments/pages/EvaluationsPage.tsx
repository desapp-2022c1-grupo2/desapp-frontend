import React from 'react'
import { AppLayout } from "@components"
import { SubmittedTable } from "../components"

export const EvaluationsPage = () => <AppLayout title="Evaluaciones" children={<SubmittedTable />} />