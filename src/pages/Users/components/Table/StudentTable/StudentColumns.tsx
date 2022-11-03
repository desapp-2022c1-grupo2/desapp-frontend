import React from "react"
import { GridColDef } from "@mui/x-data-grid"
import { Button, Chip, GoToFoward, VisibilityOutlined } from "@components"
import { ICourse, IStudent, Student } from "@models"
import { selectCourseById, selectCourses } from "@store"
import { useWindowSize } from "@src/hooks"

export function getStudentColumns(): GridColDef[] {
  const screen = useWindowSize()

  const columns: GridColDef[] = [
    {field: "name", headerName: "Nombre", width: 160,
      renderCell: (params) => new Student(params.row).fullName()
    },
    {field: "email", headerName: "Email", width: 200},
  ]

  if(screen.width > 767) columns.push(
    {field: "phone", flex: 1, headerName: "Telefono", align: 'right'},
    {field: "dni", flex: 1, headerName: "DNI", align: 'right'},
  )

  
  if(screen.width > 1023) columns.push(
    {field: "courses", flex: 1, headerName: "Materia", align: 'center',
      renderCell: (params) => <Chip disabled color='unahurCyan' label={selectCourseById(params.value.main)?.name || ''} />
    },
    //{field: "password", headerName: "Contraseña", minWidth: 200, renderCell: (params) => params.value },
    //{field: "birthDate", headerName: "Fecha de nacimiento"},
    //  renderCell: (params) => <Chip disabled color='unahurCyan'
    //  label={courses.find(x => { return x.id == params.value})?.name || params.value} />
    //},
    //{field: "fecha_cambio_materia_cursada", headerName: "Fecha de cambio de materia cursada", minWidth: 200},

    //{field: "comision", headerName: "Comisión"},
    //{field: "rondina", headerName: "Rondina"},
    //{field: "about", headerName: "Acerca de", minWidth: 500},
    //{field: "picture", headerName: "Foto de perfil"},
    //{field: "materia2", headerName: "Materia 2"},
    //{field: "habilitado", headerName: "Habilitado"},
  )

  columns.push({
    field: "actions",
    headerName: "",
    flex: 1,
    minWidth: 128,
    align: "center",
    sortable: false,
    disableColumnMenu: true,
    renderCell: () => (
      <Button
        children={<VisibilityOutlined />}
        color='unahurBlack'
        onClick={() => {}}
        sx={{borderRadius: '50px', minHeight: 'fit-content', minWidth: 'fit-content', padding: '8px'}}
        title='Más detalles'
        variant='contained'
      />
    )
  })

  return columns
}
