import React from 'react'
import { AccountContent } from './AccountContent'
import { AdminLayout } from '@adminPages/components'

export const AdminAccountPage = () => {
  return (
    <AdminLayout content={<AccountContent />}/>
  )
}