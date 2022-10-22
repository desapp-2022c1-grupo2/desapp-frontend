import React, { useState } from "react"
import { getStudentColumns } from "./StudentColumns"
import { selectStudents } from "@src/store"
import { IStudent } from '@src/models_copy'
import { Table } from '@components'

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
