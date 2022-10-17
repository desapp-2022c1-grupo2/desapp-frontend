import React from 'react'
import { AppLayout } from "@components"
import { AssignmentTable } from "@src/pages/Users/components"

export const StatsPage = () => <AppLayout title="Estadísticas" children={<AssignmentTable />} />