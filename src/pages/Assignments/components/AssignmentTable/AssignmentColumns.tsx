import React, { useContext } from "react"
import { GridColDef } from "@mui/x-data-grid"
import { Button, Chip } from "@components"
import { Assignment, Jtp } from "@models"
import { VisibilityOutlined } from "@mui/icons-material"
import { ModalContext, SelectedContext } from "../../context"
import { useWindowSize } from "@src/hooks"

export function getAssignmentColumns(): GridColDef[] {
  const screen = useWindowSize()
  const { openAssignmentDetail } = useContext(ModalContext)
  const { setAssignment } = useContext(SelectedContext)

  const columns: GridColDef[] = [
    { headerName: "#TP", width: 50, field: "number", align: 'center' },
    { headerName: "Nombre", flex: 3, field: "name" },
    {
      headerName: "Materia", flex: 2, field: "course", align: 'center',
      renderCell: (params) => <Chip color='unahurCyan' label={params.value.name} />
    }
  ]

  if (screen.width > 768) columns.push(
    {
      headerName: "JTP",
      flex: 2,
      field: "jtp",
      align: 'center',
      renderCell: (params) => {
        const jtp = new Jtp(params.value)
        return <Chip
          color='unahurGreen'
          title={jtp.fullName()}
          label={jtp.fullName()}
        />
      },
    },
  )

  if (screen.width > 1200) columns.push(
    {
      headerName: "Inicio", flex: 1, field: "start", align: 'center',
      renderCell: (params) => new Assignment(params.row).start
    },
    {
      headerName: "Fin", flex: 1, field: "end", align: 'center',
      renderCell: (params) => new Assignment(params.row).end
    },
  )

  columns.push({
    field: "actions",
    headerName: "",
    flex: 1,
    minWidth: 128,
    align: "center",
    sortable: false,
    disableColumnMenu: true,
    renderCell: (param) => {
      const handleAssignmentDetail = () => {
        openAssignmentDetail()
        setAssignment(param.row)
      }

      return (
        <Button
          children={<VisibilityOutlined />}
          color='unahurBlack'
          variant='text'
          onClick={handleAssignmentDetail}
          sx={{ borderRadius: '50px', height: 'fit-content', width: 'fit-content', padding: '8px' }}
          title='Más detalles'
        />
      )
    }
  })

  return columns
}
