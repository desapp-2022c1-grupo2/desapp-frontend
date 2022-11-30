import React, { useContext } from "react"
import { GridColDef } from "@mui/x-data-grid"
import { Admin } from "@models"
import { TableOptionsButton  } from '@pages/Users/components'
import { AdminContext, ModalContext } from "@pages/Users/Admins/context"

export function getAdminColumns(): GridColDef[] {
  const { select } = useContext(AdminContext)
  const { openDelete, openUpdate } = useContext(ModalContext)

  return [
    {
      field: "id",
      headerName: "ID",
      editable: false,
      maxWidth: 50
    }, {
      field: "name",
      headerName: "Nombre",
      editable: false,
      flex: 3,
      renderCell: (params) => new Admin(params.row).fullName()
    }, {
      field: "email",
      headerName: "Email",
      editable: false,
      flex: 3,
    }, {
      field: "opciones",
      headerName: "",
      width: 54,
      align: "center",
      sortable: false,
      disableColumnMenu: true,
      renderCell: (params) => {
        const admin = new Admin(params.row)
        const handleUpdate = () => {
          select(admin)
          openUpdate()
        }
  
        const handleDelete = () => {
          select(admin)
          openDelete()
        }
  
        return <TableOptionsButton handleUpdate={handleUpdate} handleDelete={handleDelete} />
      }
    }
  ];

}
