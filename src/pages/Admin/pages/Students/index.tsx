import React from 'react'
import { AdminPage } from '../../AdminPage'
import { AssignmentTable } from '../../components'
import {StudentTable} from "../../components/Table/StudentTable";

export const AdminStudentsTable = () => {
  return (
    <AdminPage content={<StudentTable/>}/>
  )
}
