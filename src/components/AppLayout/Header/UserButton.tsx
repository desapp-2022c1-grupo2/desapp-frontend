import React, {useState} from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import styled from 'styled-components'
import {
  Menu,
  MenuItem
} from "@mui/material"
import {
  Avatar,
  IconButton,
  LogoutOutlined,
  PersonOutlined,
} from "@components"

import {
  logout,
  selectAuthenticatedUser,
} from "@store"

const Name = styled.h5`
  color: var(--unahurBlack);
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
`

const Role = styled.h5`
  color: var(--unahurBlack);
  font-size: 0.875rem;
  font-weight: 400;
  opacity: 80%;
`

export const UserButton = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  let currentUser = selectAuthenticatedUser()
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => { setAnchorEl(event.currentTarget) }
  const handleClose = () => { setAnchorEl(null) }
  const handleMyAccount = () => navigate('/account')
  const handleLogout = () => {
    dispatch(logout())
    location.reload()
  }
  
  return (
    <>
    <IconButton
      onClick={handleClick}
      aria-controls={open ? 'resources-menu' : undefined}
      aria-haspopup='true'
      aria-expanded={open ? 'true' : undefined}
      sx={{ height: '40px', width: '40px'}}
    >
      <Avatar />
    </IconButton>
    <Menu
      open={open}
      anchorEl={anchorEl}
      onClose={handleClose}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      transformOrigin={{ vertical:'top', horizontal:'right' }}
    >
      <div style={{ display: 'flex', flexDirection: 'column',gap: '8px', padding: '16px'}}>
        <Name>{`${currentUser?.name.first}  ${currentUser?.name.last}`}</Name>
        <Role>{currentUser?.role}</Role>
      </div>
      <MenuItem key='MyAccount' onClick={handleMyAccount}><PersonOutlined /> Mi Cuenta</MenuItem>
      <MenuItem key='logout' onClick={handleLogout}><LogoutOutlined /> logout</MenuItem>
    </Menu>
  </>
  )
}