import React from "react"
import { GridColDef } from "@mui/x-data-grid"
import { Button, Chip, GoToFoward } from "@components"
import { ICourse } from "@models"
import { selectCourses } from "@store"

export function getStudentColumns(): GridColDef[] {
  const courses: ICourse[] = selectCourses()

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
      renderCell: (params) => <Chip disabled color='unahurCyan'
      label={courses.find(x => { return x.id == params.value})?.name || params.value} />
    },
    //{field: "fecha_cambio_materia_cursada", headerName: "Fecha de cambio de materia cursada", minWidth: 200},
    {field: "materia_padre_cursada", flex: 1, headerName: "Materia padre",
      renderCell: (params) => <Chip disabled color='unahurCyan'
      label={courses.find(x => { return x.id == params.value})?.name || params.value} />
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
