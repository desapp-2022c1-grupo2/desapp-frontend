import React, { useEffect, useState } from "react"
import {
  DataGrid,
  GridColDef,
  GridEventListener,
} from '@mui/x-data-grid'
import {
  getAllJtps,
  updateJtp,
  getAllCourses,
} from '@services'
import { DataGridLocaleText } from "./DataGridLocaleText"
import { MuiCustomToolbar } from "../MuiCustomToolbar"
import { getJtpColumns } from "./JtpColumns"
import { IJtp, ICourse } from "@models"
import { NewJtpModal } from "../../Modals"

export const JtpTable = () => {
  const [jtps, setJtps] = useState<IJtp[]>([])
  const [courses, setCourses] = useState<ICourse[]>([])
  const [pageSize, setPageSize] = useState<number>(10)
  const [loading, setLoading] = useState<boolean>(false)
  const [flag, setFlag] = useState<boolean>(false)
  const columns: GridColDef[] = getJtpColumns(courses, setLoading)

  useEffect(() => {
    const fetchJtps = async () => {
      const jtps: IJtp[] = await getAllJtps()
      setJtps(jtps)
    }
    const fetchCourses = async () =>{
        const courses: ICourse[] = await getAllCourses()
        setCourses(courses)
    }

    fetchCourses()
    setFlag(true)
    fetchJtps()
  }, [])

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
    <div>
      <h4>Jefes de Trabajos Practicos</h4>
      <NewJtpModal id="btnAgregarJTP" setRows={setJtps} courses={courses} style='display: none'/>
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
