import React, {useState} from "react"
import { useDispatch } from 'react-redux'
import {
  Menu,
  MenuItem
} from "@mui/material"
import { logout } from "@store/auth"
import {
  Avatar,
  Button,
  KeyboardArrowDownOutlined,
} from "@components"

// TODO: Actualizar dinamicamente avatar src y name
export const ProfileDropdown = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const dispatch = useDispatch()
  const open = Boolean(anchorEl)
  
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget)
  }
  
  const handleClose = () => { setAnchorEl(null) }
  const handleLogout = () => { dispatch(logout()) }
  
  return (
    <>
    <Button
      color='unahurBlack'
      onClick={handleClick}
      aria-controls={open ? 'resources-menu' : undefined}
      aria-haspopup='true'
      aria-expanded={open ? 'true' : undefined}
      startIcon={<Avatar src="https://randomuser.me/api/portraits/men/17.jpg" />}
      endIcon={<KeyboardArrowDownOutlined />}
      text="Administrador"
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
      <MenuItem key='logout' onClick={handleLogout}>logout</MenuItem>
    </Menu>
  </>
  )
}