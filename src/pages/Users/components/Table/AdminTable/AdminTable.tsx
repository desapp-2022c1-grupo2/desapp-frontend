import React, { useState } from "react"
import { DataGrid, GridColDef } from "@mui/x-data-grid"
import { getAdminColumns } from "./AdminColumns"
import { DataGridLocaleText } from "../JtpTable"
import { MuiCustomToolbar } from "../MuiCustomToolbar"
import { IAdmin } from '@models'
import { selectAdmins } from "@src/store"
import { TableContainer } from "../styles"

export const AdminTable = () => {
  const admins: IAdmin[] = selectAdmins()
  const [pageSize, setPageSize] = useState<number>(50)
  const [loading, setLoading] = useState<boolean>(false)
  const columns: GridColDef[] = getAdminColumns()

  return (
    <TableContainer>
      <DataGrid
        pagination
        columns={columns}
        components={{ Toolbar: MuiCustomToolbar }}
        componentsProps={{
          toolbar: {
            showQuickFilter: true,
            quickFilterProps: {debounceMs: 500},
          },
        }}
        density='comfortable'
        loading={loading || !admins.length}
        localeText={DataGridLocaleText}
        onPageSizeChange={(newPage) => setPageSize(newPage)}
        pageSize={pageSize}
        rows={admins}
        rowsPerPageOptions={[25, 50, 75, 100]}
        sx={{border: 0}}
      />
    </TableContainer>
  )
}
