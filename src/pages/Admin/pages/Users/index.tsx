import React from 'react'
import { AdminPage } from '../../AdminPage'
import { UserTable } from '../../components/Table'

export const AdminUsersPage = () => {
  return (
    <AdminPage content={<UserTable/>}/>
  )
}