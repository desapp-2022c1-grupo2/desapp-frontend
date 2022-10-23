import React from "react"
import { GridColDef } from "@mui/x-data-grid"
import { DeleteJtpModal, EditJtpModal } from "@adminPages/components"
import { ICourse, IJtp } from "@models"
import { selectCourses, selectJtpById } from "@store"
import { Chip } from "@components"

export function getJtpColumns(): GridColDef[] {
  const courses: ICourse[] = selectCourses()

  return [
    {headerName: "ID", field: 'id', maxWidth: 50 },
    {headerName: "Nombre", field: 'lastName', flex: 2,
      renderCell: (params) => `${params.row.name} ${params.row.lastName}`
    },
    {headerName: "Email", field: "email", flex: 2 },
    {
      headerName: "Materia",
      field: "courseId",
      flex: 2,
      type: "singleSelect",
      renderCell: (params) => {
        return <Chip disabled color='success' label={
          params.row.course? params.row.course.name : "-" }/>
      },
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
