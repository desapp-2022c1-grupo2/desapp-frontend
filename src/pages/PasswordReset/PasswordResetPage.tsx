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
import {usePasswordReset} from './hooks'
import {useParams} from "react-router-dom";

export const PasswordResetPage = () => {
    const {
        password, confirmPassword,
        keyUpPressLogin,
        tryPasswordReset,
        isThereCredentialError,
        isSubmitButtonIsEnabled,
        handleNewPassword,
        handleConfirmPassword,
    } = usePasswordReset();

    return (
        <LoginLayout onKeyUp={keyUpPressLogin} >
            <LoginContainer>
                <Logo src={logo} alt="logo-unahur"/>
                <Title>Reestablecé tu contraseña</Title>
                <LoginField
                    label='Nueva contraseña'
                    value={password}
                    variant='password'
                    placeholder='Ingresá tu contraseña'
                    onChange={handleNewPassword}
                />
                <LoginField
                    label='Confirmación de nueva contraseña'
                    value={confirmPassword}
                    variant='password'
                    placeholder='Confirmá tu contraseña'
                    onChange={handleConfirmPassword}
                />
                <Alert
                    enable={isThereCredentialError}
                    severity='error'
                    text='Email o contraseña incorrectos'
                />
                <SubmitButton
                    disabled={!isSubmitButtonIsEnabled}
                    color='unahurGreen'
                    onClick={tryPasswordReset}
                    variant='contained'
                    text='Ingresar'
                />
            </LoginContainer>
        </LoginLayout>
    )
}
