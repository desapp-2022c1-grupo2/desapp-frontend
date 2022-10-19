import React from 'react'
import { AppLayout } from '@components'
import { AdminTable } from '../components'

export const AdminsPage = () => <AppLayout title='Administradores' children={<AdminTable />} />
