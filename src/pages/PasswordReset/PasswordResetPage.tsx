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

export const PasswordResetPage = () => {
    const {
        newPassword, confirmPassword,
        keyUpPressLogin,
        tryPasswordReset,
        noPasswordMatch,
        isSubmitButtonEnabled,
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
                    value={newPassword}
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
                    enable={noPasswordMatch}
                    severity='error'
                    text='Las contraseñas no coinciden'
                />
                <SubmitButton
                    disabled={!isSubmitButtonEnabled}
                    color='unahurGreen'
                    onClick={tryPasswordReset}
                    variant='contained'
                    text='Ingresar'
                />
            </LoginContainer>
        </LoginLayout>
    )
}
