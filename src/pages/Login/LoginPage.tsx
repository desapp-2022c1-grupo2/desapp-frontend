import React from 'react'
import { useDispatch } from 'react-redux'
import logo from '@assets/LogoUnahur.svg'
import { requestLogin } from '@store/auth'
import {
  LoginConfirmButton,
  LoginContainer,
  LoginField,
  LoginLayout,
  LoginLogo,
  LoginTitle,
} from './styles'

export const LoginPage = () => {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const dispatch = useDispatch()

  const emailListener = (event: React.FormEvent<HTMLInputElement>) => setEmail(event.currentTarget.value)
  const passwordListener = (event: React.FormEvent<HTMLInputElement>) => setPassword(event.currentTarget.value)
  const handleLogin = () => { dispatch(requestLogin({ email, password })) }

  return (
    <LoginLayout>
      <LoginContainer>
        <LoginLogo src={logo} alt="logo-unahur"/>
        <LoginTitle>Ingresá a tu cuenta</LoginTitle>
        <LoginField
          label='Email'
          variant='email'
          placeholder='Ingresá tu correo'
          onChange={emailListener}
          />
        <LoginField
          label='Contraseña'
          variant='password'
          placeholder='Ingresá tu contraseña'
          onChange={passwordListener}
          />
        <LoginConfirmButton
          fullWidth
          color='success'
          variant='contained'
          onClick={handleLogin}
          >
          Ingresar
        </LoginConfirmButton>
        </LoginContainer>
    </LoginLayout>
  )
}