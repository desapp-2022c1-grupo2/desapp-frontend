import React from "react"
import { GridColDef, GridRenderCellParams } from "@mui/x-data-grid"
import { DeleteJtpModal } from "../../Modals"
import { ICourse } from "@models"

export function getJtpColumns(courses: ICourse[], setLoading: Function): GridColDef[] {

  return [
    {headerName: "ID", field: 'id', flex: 1, editable: false},
    {headerName: "Nombre", field: 'name', flex: 2, editable: true},
    {headerName: "Apellido", field: 'lastName', flex: 2, editable: true},
    {headerName: "Email", field: "email", flex: 2, editable: true},
      // {headerName: "Materia",
      //     field: "courseId",
      //     flex: 5,
      //     editable: true,
      //     renderCell: (params: GridRenderCellParams) => {
      //         console.log(params.field)
      //         return (
      //             <Select items={courses.map(course => course.name)}/>
      //         )
      //     }
      // },
    {
      headerName: "Materia",
      field: "courseId",
      flex: 3,
      editable: true,
      type: "singleSelect",
      valueOptions: courses ? courses.map(course => {
        return {
          value: course.id,
          label: course.name
        }
      }) : []
    },
    {
      field: "delete",
      headerName: "Eliminar",
      flex: 1,
      minWidth: 100,
      align: "center",
      sortable: false,
      disableColumnMenu: true,
      renderCell: (params: GridRenderCellParams) => <DeleteJtpModal id={params.id}/>,
    },
  ]
}