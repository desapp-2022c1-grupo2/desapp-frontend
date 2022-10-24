import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import logo from '@assets/LogoUnahur.svg'
import { setCredentials, login } from '@store'
import { verifyCredentials } from '@services'
import {
  CredentialsError,
  SubmitButton,
  LoginContainer,
  LoginField,
  LoginLayout,
  Logo,
  Title,
} from './styles'

export const LoginPage = () => {
  const dispatch = useDispatch()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isSubmitButtonIsEnabled, setSubmitButton] = useState(false)
  const [isThereCredentialError, setCredentialError] = useState(false)

  const enableSubmitButton = () => { setSubmitButton(true) }
  const disableSubmitButton = () => { setSubmitButton(false) }
  const disableCredentialError = () => {setCredentialError(false) }
  const enableCredentialError = () => {setCredentialError(true) }
  const isEmailEmpty = () => email.length === 0
  const isPassEmpty = () => password.length === 0
  const clearInputs = () => { 
    setEmail('')
    setPassword('')
  }

  useEffect(
    () => {
      (isEmailEmpty() || isPassEmpty())
        ? disableSubmitButton()
        : enableSubmitButton()
    },
    [email, password]
  )

  const emailListener = (event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setEmail(event.currentTarget.value)
    if(!isEmailEmpty()) { disableCredentialError() }
  }
  
  const passwordListener = (event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setPassword(event.currentTarget.value)
    if(!isPassEmpty()) { disableCredentialError() }
  }

  const handleLogin = async () => {
    const isVerifiedUser = await verifyCredentials({ email, password })
    if (isVerifiedUser) {
      dispatch(setCredentials({ email, password }))
      dispatch(login())
    } else {
      enableCredentialError()
    }
    clearInputs()
  }

  return (
    <LoginLayout onKeyUp={(e) => { if (isSubmitButtonIsEnabled && e.key === 'Enter') handleLogin()}} >
      <LoginContainer>
        <Logo src={logo} alt="logo-unahur"/>
        <Title>Ingresá a tu cuenta</Title>
        <LoginField
          label='Email'
          value={email}
          variant='email'
          placeholder='Ingresá tu correo'
          onChange={emailListener}
          />
        <LoginField
          label='Contraseña'
          value={password}
          variant='password'
          placeholder='Ingresá tu contraseña'
          onChange={passwordListener}
          />
          { isThereCredentialError && <CredentialsError>Email o contraseña incorrectos</CredentialsError> }
        <SubmitButton
          disabled={!isSubmitButtonIsEnabled}
          color='unahurGreen'
          onClick={handleLogin}
          variant='contained'
          text='Ingresar'
        />
      </LoginContainer>
    </LoginLayout>
  )
}