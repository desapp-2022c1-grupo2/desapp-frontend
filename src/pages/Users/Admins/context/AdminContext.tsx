import React, {
  ChangeEventHandler,
  createContext,
  ReactNode,
  useEffect,
  useState,
} from "react"
import { Admin } from "@models"
import { inputChangeEvent } from "@const"

interface adminContextValues {
  email: string,
  isFormUncompleted: boolean,
  firstname: string,
  lastname: string,
  selected: Admin,
  getAdmin: Function,
  select: Function,
  unselect: Function,
  handleFirstname: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>,
  handleLastname: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>,
  handleEmail: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>,
}

const defaultValues: adminContextValues = {
  selected: new Admin(undefined),
  firstname: '',
  lastname: '',
  email: '',
  isFormUncompleted: false,
  getAdmin: () => {},
  select: () => { },
  unselect: () => { },
  handleFirstname: () => { },
  handleLastname: () => { },
  handleEmail: () => { },
}

export const AdminContext = createContext<adminContextValues>(defaultValues)

export const AdminProvider = ({ children }: { children: ReactNode }) => {
  const [selected, setSelected] = useState<Admin>(defaultValues.selected)
  const [firstname, setFirstname] = useState<string>('')
  const [lastname, setLastname] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [isFormUncompleted, setForm] = useState<boolean>(defaultValues.isFormUncompleted)
  
  useEffect(
    () => {
      setForm(!firstname || !lastname || !email.includes('@'))
    }, [firstname, lastname, email]
  )

  const select = (admin: Admin) => {
    setSelected(admin)
    setFirstname(admin.firstname)
    setLastname(admin.lastname)
    setEmail(admin.email)
  }

  const unselect = () => {
    setSelected(defaultValues.selected)
    setFirstname('')
    setLastname('')
    setEmail('')
  }

  const handleEmail = (event: inputChangeEvent) => { setEmail(event.target.value) }
  const handleFirstname = (event: inputChangeEvent) => { setFirstname(event.target.value) }
  const handleLastname = (event: inputChangeEvent) => { setLastname(event.target.value) }

  const getAdmin = (): Admin => new Admin({
    ...selected.json,
    email,
    name: { first: firstname, last: lastname }
  })

  return (
    <AdminContext.Provider
      value={{
        email,
        selected,
        firstname,
        lastname,
        isFormUncompleted,
        select,
        unselect,
        getAdmin,
        handleFirstname,
        handleLastname,
        handleEmail,
      }}>
      {children}
    </AdminContext.Provider>
  )
}
