import React from "react"
import { GridColDef } from "@mui/x-data-grid"
import { DeleteJtpModal, EditJtpModal } from "@adminPages/components"
import { ICourse, IJtp } from "@src/models_copy"
import { selectCourses, selectJtpById } from "@store"
import { Button, Chip, DeleteOutlined, EditOutlined } from "@components"
import { selectJtp, setDeleteJtpModal, setUpdateJtpModal } from '@src/store/modals'
import { useDispatch } from "react-redux"

const UpdateJtpButton = ({ jtp }: { jtp: IJtp }) => {
  const dispatch = useDispatch()
  
  const handleClick = () => {
    dispatch(selectJtp(jtp))
    dispatch(setUpdateJtpModal(true))
  }

  return (
    <Button
      children={<EditOutlined/>}
      color='unahurCyan'
      onClick={handleClick}
      sx={{borderRadius: '50px', minHeight: 'fit-content', minWidth: 'fit-content', padding: '8px'}}
      title='Editar'
      variant='contained'
    />
  )
}

const DeleteJtpButton = ({ jtp }: { jtp: IJtp }) => {
  const dispatch = useDispatch()
  
  const handleClick = () => {
    dispatch(selectJtp(jtp))
    dispatch(setDeleteJtpModal(true))
  }

  return (
    <Button
      children={<DeleteOutlined />}
      color='unahurRed'
      onClick={handleClick}
      sx={{borderRadius: '50px', minHeight: 'fit-content', minWidth: 'fit-content', padding: '8px'}}
      title='Eliminar'
      variant='contained'
    />
  )
}

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
          <UpdateJtpButton jtp={jtp}/>
          <DeleteJtpButton jtp={jtp}/>
          </>
        )
      }
    },
  ]
}