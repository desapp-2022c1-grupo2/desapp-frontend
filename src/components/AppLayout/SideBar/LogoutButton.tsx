import React from 'react'
import { useDispatch } from 'react-redux'
import { Button, IconButton, LogoutOutlined } from '@components'
import { selectSidebar, setLogoutModal } from '@store'

export const LogoutButton = () => {
  const open: boolean = selectSidebar()
  const dispatch = useDispatch()
  const openLogoutModal = () => { dispatch(setLogoutModal(true)) }

  return open
    ? (
      <Button
        color='unahurBlack'
        onClick={openLogoutModal}
        variant='contained'
        sx={{ padding: '16px 32px', minHeight: '0', minWidth: '0'}}
        startIcon={<LogoutOutlined />}
        text='Logout'
      />
    ) : (
      <IconButton
        onClick={openLogoutModal}
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