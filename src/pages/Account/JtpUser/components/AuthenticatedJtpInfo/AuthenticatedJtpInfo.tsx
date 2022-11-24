import React from 'react'
import {
  EmailOutlined,
  PersonOutlined,
  ReadOnlyField,
} from '@components'
import { Jtp } from '@models'
import { selectAuthenticatedUser } from '@store'
import { UpdateInfoModal } from '@src/pages/Account/AdminUser/components'
import {
  Container,
  Content,
  Profile,
} from './styles'
import { ClassOutlined } from '@mui/icons-material'

export const AuthenticatedJtpInfo = () => {
  const jtp = new Jtp(selectAuthenticatedUser())
  
  return (
    <Container>
      <Profile />
      <h4>{jtp.fullName()}</h4>
      <Content>
        <ReadOnlyField
          icon={<EmailOutlined />}
          label='Correo'
          text={jtp.email}
        />
        <ReadOnlyField
          icon={<PersonOutlined />}
          label='Rol'
          text='Jefe de Trabajos Prácticos'
        />
        <ReadOnlyField
          icon={<ClassOutlined />}
          label='Materia'
          text={jtp.course?.name}
        />
      </Content>
      <div>
        <UpdateInfoModal />
      </div>
    </Container>
  )
}
