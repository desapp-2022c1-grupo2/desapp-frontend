import React from 'react'
import { AdminPage } from '../../AdminPage'
import { AssignmentTable } from '../../components/Table'

export const AdminAssignmentsPage = () => {
  return (
    <AdminPage content={<AssignmentTable/>}/>
  )
}