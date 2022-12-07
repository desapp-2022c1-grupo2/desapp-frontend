import React from 'react'
import logo from '@assets/LogoUnahur.svg'
import {
  SubmitButton,
  LoginContainer,
  LoginField,
  LoginLayout,
  Logo,
  Title,
} from './styles'
import { Alert } from '@components'
import { useLogin } from './hooks'

export const LoginPage = () => {
  const {
    email, handleEmail,
    password, handlePassword,
    keyUpPressLogin,
    tryAuthenticate,
    isThereCredentialError,
    isSubmitButtonIsEnabled,
  } = useLogin()

  return (
    <LoginLayout onKeyUp={keyUpPressLogin} >
      <LoginContainer>
        <Logo src={logo} alt="logo-unahur"/>
        <Title>Ingresá a tu cuenta</Title>
        <LoginField
          label='Email'
          value={email}
          variant='email'
          placeholder='Ingresá tu correo'
          onChange={handleEmail}
          />
        <LoginField
          label='Contraseña'
          value={password}
          variant='password'
          placeholder='Ingresá tu contraseña'
          onChange={handlePassword}
          />
        <Alert
          enable={isThereCredentialError}
          severity='error'
          text='Email o contraseña incorrectos'
        />
        <SubmitButton
          disabled={!isSubmitButtonIsEnabled}
          color='unahurGreen'
          onClick={tryAuthenticate}
          variant='contained'
          text='Ingresar'
        />
      </LoginContainer>
    </LoginLayout>
  )
}