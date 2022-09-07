import React from 'react'
import { AccountContent } from './AccountContent'
import { AdminPage } from '../../AdminPage'

export const AdminAccountPage = () => {
  return (
    <AdminPage content={<AccountContent />}/>
  )
}