import React, { MouseEventHandler, useState } from "react"
import { Button, DeleteOutlined, EditOutlined, MoreVert, SchoolOutlined } from "@components"
import { Menu, MenuItem } from "@mui/material"

interface actionsButtonMenuProps {
  handleUpdate?: MouseEventHandler<HTMLLIElement>,
  handleDelete?: MouseEventHandler<HTMLLIElement>,
  handleDetail?: MouseEventHandler<HTMLLIElement>,
}

export const TableOptionsButton = ({
  handleUpdate,
  handleDelete,
  handleDetail,
}: actionsButtonMenuProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => { setAnchorEl(event.currentTarget) }
  const handleClose = () => { setAnchorEl(null) }

  const openDelete = (event: React.MouseEvent<HTMLLIElement>) => {
    if(handleDelete) handleDelete(event)
    setAnchorEl(null)
  }

  const openUpdate = (event: React.MouseEvent<HTMLLIElement>) => {
    if(handleUpdate) handleUpdate(event)
    setAnchorEl(null)
  }

  const openDetail = (event: React.MouseEvent<HTMLLIElement>) => {
    if(handleDetail) handleDetail(event)
    setAnchorEl(null)
  }

  return (
    <>
    <Button
      children={<MoreVert/>}
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
      transformOrigin={{ vertical:'top', horizontal:'right' }}
    >
      { handleUpdate && <MenuItem onClick={openUpdate} key='update'><EditOutlined sx={{margin: '8px'}} /> Editar</MenuItem> }
      { handleDelete && <MenuItem onClick={openDelete} key='delete'><DeleteOutlined sx={{margin: '8px'}}/> Eliminar</MenuItem> }
      { handleDetail && <MenuItem onClick={openDetail} key='detail'><SchoolOutlined sx={{margin: '8px'}}/> Ver más</MenuItem> }
    </Menu>
  </>
  )
}