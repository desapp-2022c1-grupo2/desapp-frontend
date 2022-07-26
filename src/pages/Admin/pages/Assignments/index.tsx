import React from 'react'
import { AdminPage } from '../../AdminPage'
import { AssignmentTable } from '../../components'

export const AdminAssignmentsPage = () => {
  return (
    <AdminPage content={<AssignmentTable/>}/>
  )
}
