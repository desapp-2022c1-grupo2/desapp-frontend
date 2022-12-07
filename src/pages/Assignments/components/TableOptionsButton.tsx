import React, { MouseEventHandler, useState } from "react"
import { AssignmentOutlined, Button, CoPresentOutlined, MoreVert, SchoolOutlined } from "@components"
import { Menu, MenuItem } from "@mui/material"

interface actionsButtonMenuProps {
  handleAssignmentDetail?: MouseEventHandler<HTMLLIElement>,
  handleEvaluationDetail?: MouseEventHandler<HTMLLIElement>,
  handleStudentDetail?: MouseEventHandler<HTMLLIElement>,
}

export const TableOptionsButton = ({
  handleAssignmentDetail,
  handleStudentDetail,
  handleEvaluationDetail,
}: actionsButtonMenuProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => { setAnchorEl(event.currentTarget) }
  const handleClose = () => { setAnchorEl(null) }

  const openAssignmentDetail = (event: React.MouseEvent<HTMLLIElement>) => {
    if (handleAssignmentDetail) handleAssignmentDetail(event)
    setAnchorEl(null)
  }

  const openStudentDetail = (event: React.MouseEvent<HTMLLIElement>) => {
    if (handleStudentDetail) handleStudentDetail(event)
    setAnchorEl(null)
  }

  const openEvaluationDetail = (event: React.MouseEvent<HTMLLIElement>) => {
    if (handleEvaluationDetail) handleEvaluationDetail(event)
    setAnchorEl(null)
  }

  return (
    <>
      <Button
        children={<MoreVert />}
        color='unahurBlack'
        onClick={handleClick}
        sx={{
          borderRadius: '50px',
          minHeight: 'fit-content',
          minWidth: 'fit-content',
          padding: '8px'
        }}
        title='Ver acciones'
        aria-controls={open ? 'resources-menu' : undefined}
        aria-haspopup='true'
        aria-expanded={open ? 'true' : undefined}
      />
      <Menu
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        { handleAssignmentDetail && <MenuItem onClick={openAssignmentDetail} key='assignment'><AssignmentOutlined sx={{ margin: '8px' }} /> Ver TP relacionado</MenuItem> }
        { /* handleStudentDetail && <MenuItem onClick={openStudentDetail} key='student'><SchoolOutlined sx={{ margin: '8px' }} /> Estudiante</MenuItem> */ }
        { handleEvaluationDetail && <MenuItem onClick={openEvaluationDetail} key='evaluation'><AssignmentOutlined sx={{ margin: '8px' }} /> Ver Entrega</MenuItem> }
      </Menu>
    </>
  )
}