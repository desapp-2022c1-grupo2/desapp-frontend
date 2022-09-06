import React, {useEffect, useState} from "react"
import {DataGrid, GridColDef} from "@mui/x-data-grid";
import {IAssignment} from "@models"
import {getAssignmentColumns} from "./StudentColumns"
import {DataGridLocaleText} from "../JtpTable"
import {MuiCustomToolbar} from "../MuiCustomToolbar"
import {getAllStudents} from "../../../../../services/studentServices";
import {IStudent} from "../../../../../models/IStudent";

export const StudentTable = () => {
  const [students, setStudents] = useState<IStudent[]>([])
  const [pageSize, setPageSize] = useState<number>(50)
  const [loading, setLoading] = useState<boolean>(false)
  const columns: GridColDef[] = getAssignmentColumns()

  useEffect(() => {
    const fetchStudents = async () => {
      const students = await getAllStudents();
      setStudents(students)
    }
    fetchStudents()
  }, [])

  return (
    <div>
      <h4>Estudiantes</h4>
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
          getRowHeight={() => 'auto'}
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
