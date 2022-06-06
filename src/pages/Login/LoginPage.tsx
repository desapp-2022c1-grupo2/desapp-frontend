import React from "react"
import {
  LoginConfirmButton,
  LoginContainer,
  LoginField,
  LoginLayout,
  LoginTitle,
} from "./styles"
import {NavBar} from "../../components/NavBar";


export const LoginPage = () => {
  return (
    <LoginLayout>
      <LoginContainer>
       /*
        El navBar no va en aca
        Esto solo es un prueba
        Hay que refactorizar
        */
        <NavBar />
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