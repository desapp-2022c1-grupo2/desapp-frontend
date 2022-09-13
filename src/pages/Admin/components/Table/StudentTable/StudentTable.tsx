import React, { useEffect, useState } from "react"
import { DataGrid, GridColDef } from "@mui/x-data-grid"
import { getStudentColumns } from "./StudentColumns"
import { DataGridLocaleText } from "../JtpTable"
import { MuiCustomToolbar } from "../MuiCustomToolbar"
import { getAllStudents } from '@services'
import { IStudent } from '@models'

export const StudentTable = () => {
  const [students, setStudents] = useState<IStudent[]>([])
  const [pageSize, setPageSize] = useState<number>(50)
  const [loading, setLoading] = useState<boolean>(false)
  const columns: GridColDef[] = getStudentColumns()

  useEffect(() => {
    const fetchStudents = async () => {
      const students = await getAllStudents();
      setStudents(students)
    }
    fetchStudents()
  }, [])

  return (
    <div style={{height: '100%'}}>
      <h4>Estudiantes</h4>
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
          density='comfortable'
          loading={loading || !students.length}
          localeText={DataGridLocaleText}
          onPageSizeChange={(newPage) => setPageSize(newPage)}
          pageSize={pageSize}
          rows={students}
          rowsPerPageOptions={[25, 50, 75, 100]}
          sx={{border: 0}}
        />
      </div>
    </div>
  )
}
