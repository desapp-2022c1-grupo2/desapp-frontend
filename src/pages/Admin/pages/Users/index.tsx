import React from 'react'
import { AdminPage } from '../../AdminPage'
import { JtpTable } from '../../components'

export const AdminUsersPage = () => {
  return (
    <AdminPage content={<JtpTable/>}/>
  )
}
