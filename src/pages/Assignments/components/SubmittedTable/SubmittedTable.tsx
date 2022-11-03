import React from "react"
import { getSubmitedColumns } from "./SubmitedColumns"
import { ISubmitted } from '@models'
import { selectSubmitted } from "@store"
import { Table } from '@components'

export const SubmittedTable = () => {
  const submited: ISubmitted[] = selectSubmitted()

  return (
    <Table
        columns={[]}
        handleColumns={getSubmitedColumns}
        loading={!submited.length}
        rows={submited}
      />
  )
}
