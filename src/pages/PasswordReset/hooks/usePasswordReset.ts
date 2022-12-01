import { useEffect, useState } from "react"
import { passwordReset } from "@services/passwordReset"
import { useParams } from "react-router-dom"


export const usePasswordReset = () => {
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [isSubmitButtonEnabled, setSubmitButton] = useState(false)
  const [noPasswordMatch, setNoPasswordMatch] = useState(false)
  const {resetId, role} = useParams();

  const enableSubmitButton = () => { setSubmitButton(true) }
  const disableSubmitButton = () => { setSubmitButton(false) }

  const disableNoPasswordMatch = () => {setNoPasswordMatch(false) }
  const enableNoPasswordMatch = () => {setNoPasswordMatch(true) }

  const isConfirmPassEmpty = () => confirmPassword.length === 0;
  const isNewPassEmpty = () => newPassword.length === 0;
  const arePasswordEquals = () => newPassword === confirmPassword

  const clearInputs = () => {
    setNewPassword('')
    setConfirmPassword('')
  }

  const handleNewPassword = (event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setNewPassword(event.currentTarget.value)
    if(!isNewPassEmpty()) { disableNoPasswordMatch() }
  }

  const handleConfirmPassword = (event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setConfirmPassword(event.currentTarget.value)
    if(!isConfirmPassEmpty() && arePasswordEquals()) { disableNoPasswordMatch() }
  }

  const keyUpPressLogin = async (event: React.KeyboardEvent<HTMLElement>) => {
    if (isSubmitButtonEnabled && event.key === 'Enter') await tryPasswordReset()
  }

  const tryPasswordReset = async () => {
    role === "jtp" || role === "admin" ? await passwordReset(resetId, confirmPassword, role) : enableNoPasswordMatch();
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
    noPasswordMatch,
    isSubmitButtonEnabled,
  }
}
