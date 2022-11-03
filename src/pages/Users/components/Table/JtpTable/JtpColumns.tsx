import React from "react"
import { useDispatch } from "react-redux"
import { GridColDef } from "@mui/x-data-grid"
import { Chip } from "@components"
import { Jtp } from "@models"
import {
  selectJtp,
  setDeleteJtpModal,
  setUpdateJtpModal,
} from '@store'
import { useWindowSize } from "@src/hooks"
import { DeleteButton, EditButton, ViewMoreButton, ActionsMenuButton  } from "../../UserButtons"

export function getJtpColumns(): GridColDef[] {
  const screen = useWindowSize()

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
    renderCell: (params) => params.value ? <Chip disabled color='unahurGreen' label={params.value.name} />  : ''
  })
  
  columns.push({
    field: "actions",
    headerName: "",
    width: 54,
    align: "center",
    sortable: false,
    disableColumnMenu: true,
    renderCell: (params) => {
      const dispatch = useDispatch()
      const jtp = new Jtp(params.row)

      const handleUpdate = () => {
        dispatch(selectJtp(jtp.json))
        dispatch(setUpdateJtpModal(true))
      }

      const handleDelete = () => {
        dispatch(selectJtp(jtp.json))
        dispatch(setDeleteJtpModal(true))
      }

      return <ActionsMenuButton handleUpdate={handleUpdate} handleDelete={handleDelete} />
    }
  })

  return columns
}