import React from 'react'
import {
  AdminLayout,
  JtpTable,
} from '@adminPages/components'

export const AdminJtpsPage = () => {
  return (
    <AdminLayout content={<JtpTable/>}/>
  )
}
