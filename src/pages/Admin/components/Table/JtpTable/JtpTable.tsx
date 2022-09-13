import React, { useEffect, useState } from "react"
import {
  DataGrid,
  GridColDef,
  GridEventListener,
} from '@mui/x-data-grid'
import { selectJtps, selectCourses } from '@store'
import { updateJtp } from '@services'
import { DataGridLocaleText } from "./DataGridLocaleText"
import { MuiCustomToolbar } from "../MuiCustomToolbar"
import { getJtpColumns } from "./JtpColumns"
import { IJtp, ICourse } from "@models"
import { NewJtpModal } from "@adminPages/components"

export const JtpTable = () => {
  const jtps: IJtp[] = selectJtps()
  const courses: ICourse[] = selectCourses()
  const [pageSize, setPageSize] = useState<number>(10)
  const [loading, setLoading] = useState<boolean>(false)
  const [flag, setFlag] = useState<boolean>(false)
  const columns: GridColDef[] = getJtpColumns()

  useEffect(() => {setFlag(true) }, [])

  const handleCommit: GridEventListener<"cellEditCommit"> | undefined = (e) => {
    if (jtps.find(jtp => jtp.id === e.id)[e.field] !== e.value) {
      const jtp: IJtp = {id: e.id, [e.field]: e.value}
      updateJtp(jtp)
    }
  }

  useEffect(() => {
    try {
      const btnNewJTP = document.getElementById("btnAgregarJTP")
      if(flag && btnNewJTP) {
        document.getElementsByClassName("MuiDataGrid-toolbarContainer")[0].append(btnNewJTP)
        btnNewJTP.className = btnNewJTP.className.replace('hide', '')
      }
    } catch (err){ console.error(err)}
  }, [flag])

  return (
    <div style={{height: '100%'}}>
      <h4>Jefes de Trabajos Prácticos</h4>
      <NewJtpModal id="btnAgregarJTP" courses={courses} />
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
          disableDensitySelector={true}
          loading={loading || !jtps.length}
          localeText={DataGridLocaleText}
          onCellEditCommit={handleCommit}
          onPageSizeChange={(newPage) => setPageSize(newPage)}
          pageSize={pageSize}
          rows={jtps}
          rowsPerPageOptions={[10, 25, 50]}
          sx={{border: 0}}
        />
      </div>
    </div>
  )
}
