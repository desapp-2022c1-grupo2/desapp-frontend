import React from "react"
import { getAdminColumns } from "./AdminColumns"
import { IAdmin } from '@src/models'
import { selectAdmins } from "@src/store"
import { Table } from '@components'
import {EditAdminModal} from "@pages/Users/components/Modals/EditAdminModal";

export const AdminTable = () => {
  const admins: IAdmin[] = selectAdmins()

  return (
  <>
    <EditAdminModal/>
    <Table
        columns={[]}
        handleColumns={getAdminColumns}
        loading={!admins.length}
        rows={admins}
      />
  </>
  )
}
