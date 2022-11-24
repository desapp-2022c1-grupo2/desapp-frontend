import React, {
    ChangeEventHandler,
    createContext,
    ReactNode,
    useState,
  } from "react"
  import { inputChangeEvent } from "@const"
import { selectAuthenticatedUser } from "@src/store"
import { Admin } from "@src/models"
  
  interface adminContextValues {
    email: string,
    firstname: string,
    lastname: string,
    password: string,
    isOpenUpdate: boolean,
    openUpdate: Function,
    closeUpdate: Function,
    clearPassword: Function,
    handleEmail: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>,
    handleFirstname: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>,
    handleLastname: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>,
    handlePassword: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>,
    getAdmin: Function,
  }
  
  const defaultValues: adminContextValues= {
    email: '',
    firstname: '',
    lastname: '',
    password: '',
    isOpenUpdate: false,
    openUpdate: () => {},
    closeUpdate: () => {},
    clearPassword: () => {},
    handleEmail: () => {},
    handleFirstname: () => {},
    handleLastname: () => {},
    handlePassword: () => {},
    getAdmin: () => {}
  }

  export const AuthenticatedAdminContext = createContext<adminContextValues>(defaultValues)

  export const AuthenticatedAdminProvider = ({ children } : { children: ReactNode}) => {
    const user = selectAuthenticatedUser()
    const [firstname, setFirstname] = useState<string>(user?.name.first || '')
    const [lastname, setLastname] = useState<string>(user?.name.last || '')
    const [email, setEmail] = useState<string>(user?.email || '')
    const [password, setPassword] = useState(defaultValues.password)
    const [isOpenUpdate, setUpdateModal] = useState<boolean>(false)

    const openUpdate = () => { setUpdateModal(true) }
    const closeUpdate = () => { setUpdateModal(false) }
    const clearPassword = () => { setPassword('') }
    const handleEmail = (event: inputChangeEvent) => { setEmail(event.target.value) }
    const handleFirstname = (event: inputChangeEvent) => { setFirstname(event.target.value) }
    const handleLastname = (event: inputChangeEvent) => { setLastname(event.target.value) }
    const handlePassword = (event: inputChangeEvent) => { setPassword(event.target.value) }

    const getAdmin = (): Admin => new Admin({
        ...user,
        email,
        name: { first: firstname, last: lastname }
    })

    return (
      <AuthenticatedAdminContext.Provider
        value={{
          email,
          firstname,
          lastname,
          password,
          isOpenUpdate,
          clearPassword,
          getAdmin,
          handleEmail,
          handleFirstname,
          handleLastname,
          handlePassword,
          closeUpdate,
          openUpdate,
        }}>
        {children}
      </AuthenticatedAdminContext.Provider>
    )
  }
  