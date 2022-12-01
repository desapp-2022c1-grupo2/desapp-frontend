import React, { useContext } from "react"
import { GridColDef } from "@mui/x-data-grid"
import { Chip } from "@components"
import { useWindowSize } from "@src/hooks"
import { Jtp } from "@models"
import { TableOptionsButton  } from '@pages/Users/components'
import { JtpContext, ModalContext } from "@pages/Users/Jtps/context"

export function getJtpColumns(): GridColDef[] {
  const screen = useWindowSize()
  const { select } = useContext(JtpContext)
  const { openDelete, openUpdate } = useContext(ModalContext)

  const columns: GridColDef[] = [
    {headerName: "Nombre", field: 'name', flex: 2,
      renderCell: (params) => new Jtp(params.row).fullName()
    },
    {headerName: "Email", field: "email", flex: 2 },
  ]

  if(screen.width > 768) columns.push({
    headerName: "Materia",
    field: "course",
    flex: 2,
    type: "singleSelect",
    align: 'center',
    renderCell: (params) => params.value ? <Chip color='unahurCyan' label={params.value.name} />  : ''
  })
  
  columns.push({
    field: "opciones",
    headerName: "",
    width: 54,
    align: "center",
    sortable: false,
    disableColumnMenu: true,
    renderCell: (params) => {
      const jtp = new Jtp(params.row)

      const handleUpdate = () => {
        select(jtp)
        openUpdate()
      }

      const handleDelete = () => {
        select(jtp)
        openDelete()
      }

      return <TableOptionsButton handleUpdate={handleUpdate} handleDelete={handleDelete} />
    }
  })

  return columns
}
