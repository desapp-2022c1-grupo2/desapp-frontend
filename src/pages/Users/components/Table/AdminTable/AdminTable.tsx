import React from "react"
import { getAdminColumns } from "./AdminColumns"
import { IAdmin } from '@src/models_copy'
import { selectAdmins } from "@src/store"
import { Table } from '@components'

export const AdminTable = () => {
  const admins: IAdmin[] = selectAdmins()

  return (
    <Table
        columns={[]}
        handleColumns={getAdminColumns}
        loading={!admins.length}
        rows={admins}
      />
  )
}
