import React from "react"
import { GridColDef } from "@mui/x-data-grid"
import { DeleteJtpModal, EditJtpModal } from "@adminPages/components"
import { ICourse, IJtp } from "@src/models_copy"
import { selectCourses, selectJtpById } from "@store"
import { Chip } from "@components"

export function getJtpColumns(): GridColDef[] {
  const courses: ICourse[] = selectCourses()

  return [
    {headerName: "ID", field: 'id', maxWidth: 50 },
    {headerName: "Nombre", field: 'lastName', flex: 2,
      renderCell: (params) => `${params.row.lastName}, ${params.row.name}`
    },
    {headerName: "Email", field: "email", flex: 2 },
    {
      headerName: "Materia",
      field: "courseId",
      flex: 2,
      type: "singleSelect",
      renderCell: (params) => <Chip disabled color='success' label={
        courses.find(x => { return x.id == params.value})?.name || params.value} />,
    },
    {
      field: "actions",
      headerName: "",
      flex: 1,
      minWidth: 100,
      align: "center",
      sortable: false,
      disableColumnMenu: true,
      renderCell: (params) => {
        const jtp: IJtp = selectJtpById(params.id) || {}
        return (
          <>
          <EditJtpModal jtp={jtp}/>
          <DeleteJtpModal jtp={jtp}/>
          </>
        )
      }
    },
  ]
}