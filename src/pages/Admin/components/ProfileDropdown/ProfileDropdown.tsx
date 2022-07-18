import React, {useState} from "react"
import {
  Menu,
  MenuItem
} from "@mui/material"
import {
  Avatar,
  Button,
  KeyboardArrowDownOutlined,
} from "@components"

// TODO: Actualizar dinamicamente avatar src y name
export const ProfileDropdown = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget)
  }
  
  const handleClose = () => { setAnchorEl(null) }
  
  return (
    <>
    <Button
      color='inherit'
      onClick={handleClick}
      aria-controls={open ? 'resources-menu' : undefined}
      aria-haspopup='true'
      aria-expanded={open ? 'true' : undefined}
      startIcon={<Avatar src="https://randomuser.me/api/portraits/men/17.jpg" />}
      endIcon={<KeyboardArrowDownOutlined />}
      text="Administrador"
      textColor="#575756"
    />
    <Menu
      open={open}
      anchorEl={anchorEl}
      onClose={handleClose}
      anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
      }}
      transformOrigin={{
          vertical:'top',
          horizontal:'right'
      }}
    >
      <MenuItem key='logout'>logout</MenuItem>
    </Menu>
  </>
  )
}