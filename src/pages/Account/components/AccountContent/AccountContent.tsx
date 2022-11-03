import React from 'react'
import { UpdateInfoModal } from '@pages/Account/components'
import {
  Button,
  EmailOutlined,
  LockOutlined,
  PersonOutlined,
  ReadOnlyField,
} from '@components'
import { Jtp } from '@models'
import { selectAuthenticatedUser } from '@store'
import {
  Container,
  Content,
  Profile,
} from './styles'

export const AccountContent = () => {
  const user = new Jtp(selectAuthenticatedUser())
  
  return (
    <Container>
      <Profile />
      <h4>{user.fullName()}</h4>
      <Content>
        <ReadOnlyField
          icon={<EmailOutlined />}
          label='Email'
          text={user.email}
        />
        <ReadOnlyField
          icon={<PersonOutlined />}
          label='Rol'
          text={user.role === 'admin' ? 'Administrador' : 'Jefe de TP'}
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