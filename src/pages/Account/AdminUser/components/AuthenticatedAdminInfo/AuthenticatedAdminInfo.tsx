import React from 'react'
import {
  Chip,
  EmailOutlined,
  PersonOutlined,
} from '@components'
import { Jtp } from '@models'
import { selectAuthenticatedUser } from '@store'
import { UpdateInfoModal } from '@src/pages/Account/AdminUser/components'
import {
  Container,
  Content,
  Profile,
} from './styles'

export const AuthenticatedAdminInfo = () => {
  const user = new Jtp(selectAuthenticatedUser())
  
  return (
    <Container>
      <Profile />
      <h4>{user.fullName()}</h4>
      <Content>
        <Chip
          icon={<EmailOutlined />}
          label={user.email}
        />
        <Chip
          icon={<PersonOutlined />}
          label='Administrador'
        />
      </Content>
      <div>
        <UpdateInfoModal />
      </div>
    </Container>
  )
}
