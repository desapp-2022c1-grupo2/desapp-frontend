import React, {useState} from "react"
import { useDispatch } from 'react-redux'
import {
  Menu,
  MenuItem
} from "@mui/material"
import { logout } from "@store/auth"
import { selectLogedUser } from "@store"
import {
  Avatar,
  Button,
  KeyboardArrowDownOutlined,
} from "@components"

// TODO: Actualizar dinamicamente avatar src y name
export const ProfileDropdown = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const user = selectLogedUser()
  const dispatch = useDispatch()
  const open = Boolean(anchorEl)
  
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget)
  }
  
  const handleClose = () => { setAnchorEl(null) }
  const handleLogout = () => {
    dispatch(logout())
    location.reload()
  }
  
  return (
    <>
    <Button
      color='unahurBlack'
      onClick={handleClick}
      aria-controls={open ? 'resources-menu' : undefined}
      aria-haspopup='true'
      aria-expanded={open ? 'true' : undefined}
      startIcon={<Avatar />}
      endIcon={<KeyboardArrowDownOutlined />}
      text={user?.name + ' ' + user?.lastName}
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