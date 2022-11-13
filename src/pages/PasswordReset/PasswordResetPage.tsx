import React, {useEffect, useState} from 'react'
import {useDispatch} from 'react-redux'
import logo from '@assets/LogoUnahur.svg'
import {setCredentials, login} from '@store/auth'
import {
    Error,
    LoginConfirmButton,
    LoginContainer,
    LoginField,
    LoginLayout,
    LoginLogo,
    LoginTitle,
} from './styles'
import {verifyCredentials, passwordReset} from '@src/services'
import {useParams} from "react-router-dom";

export const PasswordResetPage = () => {
    const dispatch = useDispatch()
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [disableConfirm, setDisableConfirm] = useState(false)
    const [credentialError, setCredentialError] = useState(false)
    const {resetId} = useParams();
    useEffect(
        () => {
            console.log(resetId);
            setDisableConfirm(password !== confirmPassword || (password == '' || confirmPassword == ''))
        },
        [confirmPassword, password]
    )

    const passwordListener = (event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setPassword(event.currentTarget.value)
        if (password.length > 0) {
            setCredentialError(false)
        }
    }
    const confirmPasswordListener = (event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setConfirmPassword(event.currentTarget.value)
        if (confirmPassword.length > 0) {
            setCredentialError(false)
        }
    }

    const handleReset = async () => {
        // verify token/id
        // verify password requirements
        // updatejtp with new values
        // navigate to login


        const verifiedUser = await passwordReset(resetId, password);
        // if (verifiedUser) {
        //   dispatch(setCredentials({ email, password }))
        //   dispatch(login())
        // } else {
        //   setCredentialError(true)
        // }
        // setConfirmPassword('')
        // setPassword('')
        console.log("handleReset")
    }


    return (
        <LoginLayout onKeyUp={(e) => {
            if (!disableConfirm && e.key == 'Enter') handleReset()
        }}>
            <LoginContainer>
                <LoginLogo src={logo} alt="logo-unahur"/>
                <LoginTitle>Reestablecé tu contraseña</LoginTitle>
                <LoginField
                    label='Nueva contraseña'
                    value={password}
                    variant='password'
                    placeholder='Ingresá tu contraseña'
                    onChange={passwordListener}
                />
                <LoginField
                    label='Confirmación de nueva contraseña'
                    value={confirmPassword}
                    variant='password'
                    placeholder='Confirmá tu contraseña'
                    onChange={confirmPasswordListener}
                />
                {password !== confirmPassword && <Error>La contraseña no coincide. Volvé a verificar</Error>}
                <LoginConfirmButton
                    disabled={disableConfirm}
                    color='unahurGreen'
                    onClick={handleReset}
                    variant='contained'
                    text='Reestablecer contraseña'
                />
            </LoginContainer>
        </LoginLayout>
    )
}
