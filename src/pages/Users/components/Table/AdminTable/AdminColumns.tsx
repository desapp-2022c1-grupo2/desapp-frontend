import {GridColDef} from "@mui/x-data-grid"
import {useWindowSize} from "@src/hooks";
import {Admin} from "@models";
import {useDispatch} from "react-redux";
import {selectAdmin, setDeleteAdminModal, setUpdateAdminModal} from "@store";
import {ActionsMenuButton} from "@pages/Users/components";
import React from "react";

export function getAdminColumns(): GridColDef[] {
  const screen = useWindowSize()

  const columns: GridColDef[] = [
    {headerName: "Nombre", field: 'name', flex: 2,
      renderCell: (params) => {
        let adminRow = params.row;
        return new Admin({name: {first: adminRow.name,  last: adminRow.lastName}, email: adminRow.email, password: adminRow.password, id: adminRow.id, role: adminRow.role}).fullName();
      }
    },
    {headerName: "Email", field: "email", flex: 2 },
  ]

  columns.push({
    field: "actions",
    headerName: "",
    width: 54,
    align: "center",
    sortable: false,
    disableColumnMenu: true,
    renderCell: (params) => {
      const dispatch = useDispatch()
      let adminRow = params.row;
      const admin = new Admin({name: {first: adminRow.name,  last: adminRow.lastName}, email: adminRow.email, password: adminRow.password, id: adminRow.id, role: "admin"})

      const handleUpdate = () => {
        dispatch(selectAdmin(admin.json))
        dispatch(setUpdateAdminModal(true))
      }

      const handleDelete = () => {
        dispatch(selectAdmin(admin.json))
        dispatch(setDeleteAdminModal(true))
      }

        return <ActionsMenuButton handleUpdate={handleUpdate} handleDelete={handleDelete} />
    }
  })

  return columns


}
