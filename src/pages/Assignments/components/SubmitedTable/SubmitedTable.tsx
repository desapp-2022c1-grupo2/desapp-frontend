import React from "react"
import { getSubmitedColumns } from "./SubmitedColumns"
import { ISubmitedAssignment } from '@src/models_copy'
import { selectSubmited } from "@src/store"
import { Table } from '@components'

export const SubmitedTable = () => {
  const submited: ISubmitedAssignment[] = selectSubmited()

  return (
    <Table
        columns={[]}
        handleColumns={getSubmitedColumns}
        loading={!submited.length}
        rows={submited}
      />
  )
}
