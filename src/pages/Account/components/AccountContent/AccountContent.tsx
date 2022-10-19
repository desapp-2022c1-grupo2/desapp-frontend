import React from 'react'
import { UpdateInfoModal } from '../Modals'
import { selectLogedUser } from '@store'
import {
  Button,
  EmailOutlined,
  LockOutlined,
  PersonOutlined,
  ReadOnlyField,
} from '@components'
import {
  Container,
  Content,
  Profile,
} from './styles'

export const AccountContent = () => {
  const user = selectLogedUser()
  return (
    <Container>
      <Profile />
      <h4>{user?.name + ' ' + user?.lastName}</h4>
      <Content>
        <ReadOnlyField
          icon={<EmailOutlined />}
          label='Email'
          text={user?.email}
        />
        <ReadOnlyField
          icon={<PersonOutlined />}
          label='Rol'
          text='Administrador'
        />
      </Content>
      <div>
        <Button
          disabled
          color='unahurRed'
          startIcon={<LockOutlined/>}
          variant='contained'
          text="Cambiar contraseña"
          title='Editar Informacion'
        />
        <UpdateInfoModal />
      </div>
    </Container>
  )
}