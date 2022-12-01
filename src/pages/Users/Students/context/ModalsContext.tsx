import React, {
  createContext,
  ReactNode,
  useState,
} from "react"

interface modalsContextValues {
  isOpenUpdate: boolean,
  isOpenCreate: boolean,
  isOpenDelete: boolean,
  isOpenDetail: boolean,
  openDetail: Function,
  closeDetail: Function,
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
  isOpenDetail: false,
  openDetail: () => {},
  closeDetail: () => {},
  openUpdate: () => {},
  closeUpdate: () => {},
  openCreate: () => {},
  closeCreate: () => {},
  openDelete: () => {},
  closeDelete: () => {},
}

export const ModalContext = createContext<modalsContextValues>(defaultValues)

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [isOpenUpdate, setUpdateModal] = useState<boolean>(false)
  const [isOpenDelete, setDeleteModal] = useState<boolean>(false)
  const [isOpenCreate, setCreateModal] = useState<boolean>(false)
  const [isOpenDetail, setDetailModal] = useState<boolean>(false)


  const openDetail = () => { setDetailModal(true) }
  const closeDetail = () => { setDetailModal(false) }
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
        isOpenDetail,
        isOpenCreate,
        closeCreate,
        closeDelete,
        closeDetail,
        closeUpdate,
        openCreate,
        openDelete,
        openDetail,
        openUpdate,
      }}
    >
      {children}
    </ModalContext.Provider>
  )
}
