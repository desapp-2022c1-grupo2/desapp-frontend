import React from 'react'
import { useDispatch } from 'react-redux'
import { Button, IconButton, LogoutOutlined } from '@components'
import { logout } from "@store/auth"
import { selectSidebar } from '@src/store'

export const LogoutButton = () => {
  const open: boolean = selectSidebar()
  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(logout())
    location.reload()
  }

  return open
    ? (
      <Button
        color='unahurBlack'
        onClick={handleLogout}
        variant='contained'
        sx={{ padding: '16px 32px', minHeight: '0', minWidth: '0', width: 'fit-content'}}
        startIcon={<LogoutOutlined />}
        text='Logout'
      />
    ) : (
      <IconButton
        onClick={handleLogout}
        sx={{
          backgroundColor: 'var(--unahurBlack)',
          borderRadius: '10px',
          color:'var(--unahurWhite)',
          padding: '16px'
        }}>
        <LogoutOutlined />
      </IconButton>
    )
}