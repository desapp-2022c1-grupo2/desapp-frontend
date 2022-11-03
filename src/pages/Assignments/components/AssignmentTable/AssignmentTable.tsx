import React from "react"
import { getAssignmentColumns } from "./AssignmentColumns"
import { Table } from '@components'
import { IAssignment } from '@models'
import { selectAssignments } from '@store'

export const AssignmentTable = () => {
  const assignments: IAssignment[] = selectAssignments()

  return (
    <Table
      columns={[]}
      handleColumns={getAssignmentColumns}
      loading={!assignments.length}
      rows={assignments}
    />
  )
}
