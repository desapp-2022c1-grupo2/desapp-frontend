import { useDispatch } from "react-redux"
import { verifyCredentials } from "@services"
import { login, setCredentials } from "@store"
import { useEffect, useState } from "react"
import {passwordReset} from "@services/passwordReset";
import {useParams} from "react-router-dom";


export const usePasswordReset = () => {
  const dispatch = useDispatch()

  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [isSubmitButtonIsEnabled, setSubmitButton] = useState(false)
  const [isThereCredentialError, setCredentialError] = useState(false)
  const {resetId} = useParams();

  const enableSubmitButton = () => { setSubmitButton(true) }
  const disableSubmitButton = () => { setSubmitButton(false) }

  const disableCredentialError = () => {setCredentialError(false) }
  const enableCredentialError = () => {setCredentialError(true) }

  const isConfirmPassEmpty = () => confirmPassword.length === 0;
  const isNewPassEmpty = () => newPassword.length === 0;
  const arePasswordEquals = () => newPassword === confirmPassword;

  const clearInputs = () => {
    setNewPassword('')
    setConfirmPassword('')
  }

  const handleNewPassword = (event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setNewPassword(event.currentTarget.value)
    if(!isNewPassEmpty()) { disableCredentialError() }
  }

  const handleConfirmPassword = (event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setConfirmPassword(event.currentTarget.value)
    if(!isConfirmPassEmpty() && arePasswordEquals()) { disableCredentialError() }
  }

  const keyUpPressLogin = (event: React.KeyboardEvent<HTMLElement>) => {
    if (isSubmitButtonIsEnabled && event.key === 'Enter') tryPasswordReset()
  }

  const tryPasswordReset = async () => {
    await passwordReset(resetId, confirmPassword)
    clearInputs()
  }

  useEffect(
    () => {
      (isConfirmPassEmpty() || isNewPassEmpty()) || !arePasswordEquals()
        ? disableSubmitButton()
        : enableSubmitButton()
    },
    [newPassword, confirmPassword]
  )

  return {
    tryPasswordReset,
    keyUpPressLogin,
    newPassword, handleConfirmPassword,
    confirmPassword, handleNewPassword,
    isThereCredentialError,
    isSubmitButtonIsEnabled,
  }
}
