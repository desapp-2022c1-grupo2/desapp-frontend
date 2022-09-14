import React from 'react'
import {
  AdminLayout,
  AssignmentTable,
} from '@adminPages/components'

export const AdminAssignmentsPage = () => {
  return (
    <AdminLayout content={<AssignmentTable/>}/>
  )
}
