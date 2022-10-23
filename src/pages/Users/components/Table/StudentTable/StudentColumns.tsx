import React from "react"
import { GridColDef } from "@mui/x-data-grid"
import { Button, Chip, GoToFoward } from "@components"
import { ICourse } from "@models"
import { selectCourses } from "@store"

export function getStudentColumns(): GridColDef[] {
  return [
    //{field: "id", headerName: "ID", maxWidth: 50},
    {field: "lastName", headerName: "Nombre", width: 160,
      renderCell: (params) => `${params.row.name} ${params.row.lastName}`
    },
    {field: "email", headerName: "Email", width: 200},
    //{field: "password", headerName: "Contraseña", minWidth: 200, renderCell: (params) => params.value },
    {field: "phone", flex: 1, headerName: "Telefono"},
    {field: "dni", flex: 1, headerName: "DNI"},
    //{field: "birthDate", headerName: "Fecha de nacimiento"},
    {field: "materia_cursada", flex: 1, headerName: "Curso",
      renderCell: (params) => {
      return <Chip disabled color='unahurCyan'
              label={`${params.row.materia_cursada.name} ${params.row.materia_cursada.year}`}/>
      }    },
    //{field: "fecha_cambio_materia_cursada", headerName: "Fecha de cambio de materia cursada", minWidth: 200},
    {field: "materia_padre_cursada", flex: 1, headerName: "Materia padre",
      renderCell: (params) => {
        console.log(params.row.materia_padre_cursada)
        return <Chip disabled color='unahurCyan'
              label={params.row.materia_padre_cursada ? `${params.row.materia_padre_cursada.name} ${params.row.materia_padre_cursada.year}` : `-`}/>
      }
    },
    {
      field: "actions",
      headerName: "",
      flex: 1,
      minWidth: 128,
      align: "center",
      sortable: false,
      disableColumnMenu: true,
      renderCell: () => <GoToFoward text="Ver Más"/>
    },
    //{field: "comision", headerName: "Comisión"},
    //{field: "rondina", headerName: "Rondina"},
    //{field: "about", headerName: "Acerca de", minWidth: 500},
    //{field: "picture", headerName: "Foto de perfil"},
    //{field: "materia2", headerName: "Materia 2"},
    //{field: "habilitado", headerName: "Habilitado"},
  ];

}
