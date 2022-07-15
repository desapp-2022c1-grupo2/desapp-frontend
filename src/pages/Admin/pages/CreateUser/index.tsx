import React from 'react'
import { AdminPage } from '../../AdminPage'
import { CreateUserContent } from './CreateUserContent'

export const CreateUserPage = () => {
  return (
    <AdminPage content={<CreateUserContent/>}/>
  )
}