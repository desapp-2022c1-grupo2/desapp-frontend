import React, { useContext } from "react"
import { GridColDef } from "@mui/x-data-grid"
import { Button, Chip, VisibilityOutlined } from "@components"
import { Student } from "@models"
import { useWindowSize } from "@src/hooks"
import { ModalContext, StudentContext } from "../../context"
import { TableOptionsButton } from "@src/pages/Users/components"

export function getStudentColumns(): GridColDef[] {
  const screen = useWindowSize()
  const { select } = useContext(StudentContext)
  const { openDelete, openUpdate } = useContext(ModalContext)

  const columns: GridColDef[] = [
    {field: "name", headerName: "Estudiante", flex: 2,
      renderCell: (params) => new Student(params.row).fullName()
    },
    {field: "email", headerName: "Email", flex: 2}
  ]

  if(screen.width > 767) columns.push(
    //{field: "phone", flex: 1, headerName: "Telefono", align: 'right'},
    {field: "dni", flex: 1, headerName: "DNI", align: 'center'},
  )

  
  if(screen.width > 1023) columns.push(
    {
      field: "courses",
      flex: 1,
      headerName: "Materia",
      align: 'center',
      renderCell: (params) => <Chip color='unahurCyan' label={params.value.current.name || ''} />
    },
  )

  columns.push({
    field: "opciones",
    headerName: "",
    width: 54,
    align: "center",
    sortable: false,
    disableColumnMenu: true,
    renderCell: (params) => {
      const student = new Student(params.row)

      const handleUpdate = () => {
        select(student)
        openUpdate()
      }

      const handleDelete = () => {
        select(student)
        openDelete()
      }

      return <TableOptionsButton handleUpdate={handleUpdate} handleDelete={handleDelete} />
    }
  })

  return columns
}
