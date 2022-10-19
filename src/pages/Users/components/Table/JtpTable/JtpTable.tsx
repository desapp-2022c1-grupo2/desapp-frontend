import React, { useEffect, useState } from "react"
import {
  DataGrid,
  GridColDef,
} from '@mui/x-data-grid'
import { IJtp } from "@models"
import { selectJtps } from '@store'
import { DataGridLocaleText } from "./DataGridLocaleText"
import { MuiCustomToolbar } from "../MuiCustomToolbar"
import { getJtpColumns } from "./JtpColumns"
import { NewJtpModal } from "@adminPages/components"
import { TableContainer } from "../styles"

export const JtpTable = () => {
  const jtps: IJtp[] = selectJtps()
  const [pageSize, setPageSize] = useState<number>(10)
  const [flag, setFlag] = useState<boolean>(false)
  const columns: GridColDef[] = getJtpColumns()

  useEffect(() => { setFlag(true) }, [])

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
    <TableContainer>
      <NewJtpModal id="btnAgregarJTP" />
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
          loading={!jtps.length}
          localeText={DataGridLocaleText}
          onPageSizeChange={(newPage) => setPageSize(newPage)}
          pageSize={pageSize}
          rows={jtps}
          rowsPerPageOptions={[10, 25, 50]}
          sx={{border: 0}}
        />
      </div>
    </TableContainer>
  )
}
