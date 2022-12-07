import { useDispatch } from "react-redux"
import { verifyCredentials } from "@services"
import { login, setCredentials } from "@store"
import { useEffect, useState } from "react"


export const useLogin = () => {
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
  const isShortPassword = () => password.length < 6
  const isInvalidEmail = () => !email.includes('@')
  
  const clearInputs = () => { 
    setEmail('')
    setPassword('')
  }

  const handleEmail = (event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setEmail(event.currentTarget.value)
    if(!isEmailEmpty()) { disableCredentialError() }
  }
  
  const handlePassword = (event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setPassword(event.currentTarget.value)
    if(!isPassEmpty()) { disableCredentialError() }
  }

  const keyUpPressLogin = (event: React.KeyboardEvent<HTMLElement>) => {
    if (isSubmitButtonIsEnabled && event.key === 'Enter') tryAuthenticate()
  }

  const tryAuthenticate = async () => {
    const isVerifiedUser = await verifyCredentials({ email, password })
    
    if (isVerifiedUser) {
      dispatch(setCredentials({ email, password }))
      dispatch(login())
    } else {
      enableCredentialError()
    }

    clearInputs()
  }

  useEffect(
    () => {
      (isEmailEmpty() || isInvalidEmail() || isShortPassword())
        ? disableSubmitButton()
        : enableSubmitButton()
    },
    [email, password]
  )

  return {
    tryAuthenticate,
    keyUpPressLogin,
    email, handleEmail,
    password, handlePassword,
    isThereCredentialError,
    isSubmitButtonIsEnabled,
  }
}