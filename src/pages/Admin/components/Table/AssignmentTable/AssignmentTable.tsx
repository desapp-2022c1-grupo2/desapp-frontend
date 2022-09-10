import React, { useEffect, useState } from "react"
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { getAllAssignments } from "@services"
import { IAssignment } from "@models"
import { getAssignmentColumns } from "./AssignmentColumns"
import { DataGridLocaleText } from "../JtpTable"
import { MuiCustomToolbar } from "../MuiCustomToolbar"

export const AssignmentTable = () => {
  const [assignments, setAssignments] = useState<IAssignment[]>([])
  const [pageSize, setPageSize] = useState<number>(10)
  const [loading, setLoading] = useState<boolean>(false)
  const columns: GridColDef[] = getAssignmentColumns()

  useEffect(() => {
    const fetchAssignments = async () => {
      const assignments = await getAllAssignments()
      setAssignments(assignments)
    }
    fetchAssignments()
  }, [])

  return (
    <div>
      <h4>Trabajos Practicos</h4>
      <div style={{height: 'calc(100vh - 320px)'}}>
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
    </div>
  )
}
