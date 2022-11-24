import React, {
  createContext,
  ReactNode,
  useState,
} from "react"

interface modalsContextValues {
  isOpenUpdate: boolean,
  isOpenCreate: boolean,
  isOpenDelete: boolean,
  openUpdate: Function,
  closeUpdate: Function,
  openCreate: Function,
  closeCreate: Function,
  openDelete: Function,
  closeDelete: Function,
}

const defaultValues: modalsContextValues = {
  isOpenUpdate: false,
  isOpenCreate: false,
  isOpenDelete: false,
  openUpdate: () => { },
  closeUpdate: () => { },
  openCreate: () => { },
  closeCreate: () => { },
  openDelete: () => { },
  closeDelete: () => { },
}

export const ModalContext = createContext<modalsContextValues>(defaultValues)

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [isOpenUpdate, setUpdateModal] = useState<boolean>(false)
  const [isOpenDelete, setDeleteModal] = useState<boolean>(false)
  const [isOpenCreate, setCreateModal] = useState<boolean>(false)

  const openUpdate = () => { setUpdateModal(true) }
  const closeUpdate = () => { setUpdateModal(false) }
  const openDelete = () => { setDeleteModal(true) }
  const closeDelete = () => { setDeleteModal(false) }
  const openCreate = () => { setCreateModal(true) }
  const closeCreate = () => { setCreateModal(false) }

  return (
    <ModalContext.Provider
      value={{
        isOpenUpdate,
        isOpenDelete,
        isOpenCreate,
        closeCreate,
        closeDelete,
        closeUpdate,
        openCreate,
        openDelete,
        openUpdate,
      }}
    >
      {children}
    </ModalContext.Provider>
  )
}
