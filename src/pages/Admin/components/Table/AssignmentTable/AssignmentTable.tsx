import React, { useState } from "react"
import { DataGrid, GridColDef } from "@mui/x-data-grid"
import { IAssignment } from "@models"
import { selectAssignments } from "@store"
import { getAssignmentColumns } from "./AssignmentColumns"
import { DataGridLocaleText } from "../JtpTable"
import { MuiCustomToolbar } from "../MuiCustomToolbar"

export const AssignmentTable = () => {
  const assignments: IAssignment[] = selectAssignments()
  const [pageSize, setPageSize] = useState<number>(10)
  const [loading, setLoading] = useState<boolean>(false)
  const columns: GridColDef[] = getAssignmentColumns()

  return (
      <div style={{height: '100%'}}>
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
          loading={loading || !assignments.length}
          localeText={DataGridLocaleText}
          onPageSizeChange={(newPage) => setPageSize(newPage)}
          pageSize={pageSize}
          rows={assignments}
          rowsPerPageOptions={[10, 25, 50]}
          sx={{border: 0}}
        />
    </div>
  )
}
