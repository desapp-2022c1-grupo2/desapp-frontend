import React from "react"
import {
  LoginConfirmButton,
  LoginContainer,
  LoginField,
  LoginLayout,
  LoginTitle,
} from "./styles"

export const LoginPage = () => {
  return (
    <LoginLayout>
      <LoginContainer>
        <LoginTitle>Ingresá a tu cuenta</LoginTitle>
        <LoginField
          label='Email'
          variant='email'
          placeholder='Ingresá tu correo'
          />
        <LoginField
          label="Contraseña"
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