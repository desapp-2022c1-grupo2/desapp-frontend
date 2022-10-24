import React from "react"
import { GridColDef } from "@mui/x-data-grid"
import { Chip, GoToFoward } from "@components"
import { ICourse, IStudent } from "@models"
import { selectCourseById, selectCourses } from "@store"

export function getStudentColumns(): GridColDef[] {

  return [
    //{field: "id", headerName: "ID", maxWidth: 50},
    {field: "lastName", headerName: "Nombre", width: 160,
      renderCell: (params) => `${params.row.name.first} ${params.row.name.last}`
    },
    {field: "email", headerName: "Email", width: 200},
    //{field: "password", headerName: "Contraseña", minWidth: 200, renderCell: (params) => params.value },
    {field: "phone", flex: 1, headerName: "Telefono"},
    {field: "dni", flex: 1, headerName: "DNI"},
    //{field: "birthDate", headerName: "Fecha de nacimiento"},
    //{field: "courses", flex: 1, headerName: "Curso",
    //  renderCell: (params) => <Chip disabled color='unahurCyan'
    //  label={courses.find(x => { return x.id == params.value})?.name || params.value} />
    //},
    //{field: "fecha_cambio_materia_cursada", headerName: "Fecha de cambio de materia cursada", minWidth: 200},
    {field: "courses", flex: 1, headerName: "Materia",
      renderCell: (params) => <Chip disabled color='unahurCyan' label={selectCourseById(params.value.main)?.name || ''} />
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
