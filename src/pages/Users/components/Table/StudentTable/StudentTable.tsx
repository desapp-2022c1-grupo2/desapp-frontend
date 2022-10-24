import React from "react"
import { Table } from '@components'
import { IStudent } from '@models'
import { selectStudents } from "@store"
import { getStudentColumns } from "./StudentColumns"

export const StudentTable = () => {
  const students: IStudent[] = selectStudents()

  return (
    <Table
      columns={[]}
      handleColumns={getStudentColumns}
      loading={!students.length}
      rows={students}
    />
  )
}
