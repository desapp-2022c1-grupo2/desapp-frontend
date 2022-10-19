import React, { useState } from "react"
import { DataGrid, GridColDef } from "@mui/x-data-grid"
import { getStudentColumns } from "./StudentColumns"
import { DataGridLocaleText } from "../JtpTable"
import { MuiCustomToolbar } from "../MuiCustomToolbar"
import { IStudent } from '@models'
import { selectStudents } from "@src/store"
import { TableContainer } from "../styles"

export const StudentTable = () => {
  const students: IStudent[] = selectStudents()
  const [pageSize, setPageSize] = useState<number>(50)
  const [loading, setLoading] = useState<boolean>(false)
  const columns: GridColDef[] = getStudentColumns()

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
        loading={loading || !students.length}
        localeText={DataGridLocaleText}
        onPageSizeChange={(newPage) => setPageSize(newPage)}
        pageSize={pageSize}
        rows={students}
        rowsPerPageOptions={[25, 50, 75, 100]}
        sx={{border: 0}}
      />
    </TableContainer>
  )
}
