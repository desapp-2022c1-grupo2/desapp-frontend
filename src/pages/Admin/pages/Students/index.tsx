import React from 'react'
import {
  AdminLayout,
  StudentTable,
} from '@adminPages/components'

export const AdminStudentsPage = () => {
  return (
    <AdminLayout content={<StudentTable/>}/>
  )
}
