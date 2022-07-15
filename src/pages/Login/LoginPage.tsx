import React from 'react'
import logo from '@assets/LogoUnahur.svg'
import {
  LoginConfirmButton,
  LoginContainer,
  LoginField,
  LoginLayout,
  LoginLogo,
  LoginTitle,
} from './styles'

export const LoginPage = () => {
  return (
    <LoginLayout>
      <LoginContainer>
        <LoginLogo src={logo} alt="logo-unahur"/>
        <LoginTitle>Ingresá a tu cuenta</LoginTitle>
        <LoginField
          label='Email'
          variant='email'
          placeholder='Ingresá tu correo'
          />
        <LoginField
          label='Contraseña'
          variant='password'
          placeholder='Ingresá tu contraseña'
          />
        <LoginConfirmButton
          fullWidth
          color='success'
          variant='contained'
          >
          Ingresar
        </LoginConfirmButton>
        </LoginContainer>
    </LoginLayout>
  )
}