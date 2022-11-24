import { selectRole } from '@src/store'
import React from 'react'
import { AdminAccountPage } from './AdminUser'
import { JtpAccountPage } from './JtpUser'

export const AccountPage = () => {
  const role = selectRole().toLocaleLowerCase()

  return role === 'admin'
    ? <AdminAccountPage />
    : <JtpAccountPage />
}