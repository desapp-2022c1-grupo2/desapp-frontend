import React from 'react'
import { AppLayout } from '@components'
import { StudentTable } from '@pages/Users/components'

export const StudentsPage = () => <AppLayout title='Estudiantes' children={<StudentTable />} />

