import React from 'react'
import { EditAdminInfoModal } from '../../components/Modals'
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
} from './styled'

export const AccountContent = () => {
  return (
    <Container>
      <Profile src="https://randomuser.me/api/portraits/men/17.jpg" />
      <h4>Usuario Administrador</h4>
      <Content>
        <ReadOnlyField
          icon={<EmailOutlined />}
          label='Email'
          text='admin@unahur.edu.ar'
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
        <EditAdminInfoModal />
      </div>
    </Container>
  )
}