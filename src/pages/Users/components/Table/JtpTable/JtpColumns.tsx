import React from "react"
import { useDispatch } from "react-redux"
import { GridColDef } from "@mui/x-data-grid"
import {
  Button,
  Chip,
  DeleteOutlined,
  EditOutlined,
} from "@components"
import { ICourse, IJtp, Jtp } from "@models"
import {
  selectCourses,
  selectJtp,
  setDeleteJtpModal,
  setUpdateJtpModal,
} from '@store'

export function getJtpColumns(): GridColDef[] {
  const courses: ICourse[] = selectCourses()

  return [
    {headerName: "ID", field: 'id', maxWidth: 50 },
    {headerName: "Nombre", field: 'lastName', flex: 2,
      renderCell: (params) => `${params.row.name.first} ${params.row.name.last}`
    },
    {headerName: "Email", field: "email", flex: 2 },
    {
      headerName: "Materia",
      field: "course",
      flex: 2,
      type: "singleSelect",
      renderCell: (params) => <Chip disabled color='success' label={params.value.name} />
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
        const dispatch = useDispatch()
        const jtp = new Jtp(params.row)

        const handleUpdate = () => {
          console.log(jtp.json)
          dispatch(selectJtp(jtp.json))
          dispatch(setUpdateJtpModal(true))
        }

        const handleDelete = () => {
          dispatch(selectJtp(jtp.json))
          dispatch(setDeleteJtpModal(true))
        }

        return (
          <>
          <Button
            children={<EditOutlined/>}
            color='unahurCyan'
            onClick={handleUpdate}
            sx={{borderRadius: '50px', minHeight: 'fit-content', minWidth: 'fit-content', padding: '8px'}}
            title='Editar'
            variant='contained'
          />

          <Button
            children={<DeleteOutlined />}
            color='unahurRed'
            onClick={handleDelete}
            sx={{borderRadius: '50px', minHeight: 'fit-content', minWidth: 'fit-content', padding: '8px'}}
            title='Eliminar'
            variant='contained'
          />
          </>
        )
      }
    },
  ]
}