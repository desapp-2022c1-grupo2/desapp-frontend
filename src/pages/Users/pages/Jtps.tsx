import React from 'react'
import { AppLayout } from '@components'
import { JtpTable } from '@pages/Users/components'

export const JtpsPage = () => <AppLayout title='Jefes de Trabajos Prácticos' children={<JtpTable />} />

