import React from 'react'
import { AppLayout } from "@components"
import { AssignmentTable } from "../components"

export const StatsPage = () => <AppLayout title="Estadísticas" children={<AssignmentTable />} />