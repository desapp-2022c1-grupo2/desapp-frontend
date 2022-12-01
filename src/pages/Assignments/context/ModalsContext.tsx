import React, {
  createContext,
  ReactNode,
  useState,
} from "react"

interface modalsContextValues {
  isOpenSubmitted: boolean,
  isOpenAssignmentDetail: boolean,
  isOpenJtpDetail: boolean,
  isOpenStudentDetail: boolean,
  openStudentDetail: Function,
  closeStudentDetail: Function,
  openJtpDetail: Function,
  closeJtpDetail: Function,
  openSubmitted: Function,
  closeSubmitted: Function,
  openAssignmentDetail: Function,
  closeAssignmentDetail: Function,
}

const defaultValues: modalsContextValues = {
  isOpenAssignmentDetail: false,
  isOpenJtpDetail: false,
  isOpenStudentDetail: false,
  isOpenSubmitted: false,
  openStudentDetail: () => { },
  closeStudentDetail: () => { },
  openJtpDetail: () => { },
  closeJtpDetail: () => { },
  openSubmitted: () => { },
  closeSubmitted: () => { },
  openAssignmentDetail: () => { },
  closeAssignmentDetail: () => { },
}

export const ModalContext = createContext<modalsContextValues>(defaultValues)

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [isOpenAssignmentDetail, setAssignmentDetailModal] = useState<boolean>(false)
  const [isOpenJtpDetail, setJtpDetailModal] = useState<boolean>(false)
  const [isOpenStudentDetail, setStudentDetailModal] = useState<boolean>(false)
  const [isOpenSubmitted, setSubmittedModal] = useState<boolean>(false)


  const closeAssignmentDetail = () => { setAssignmentDetailModal(false) }
  const closeJtpDetail = () => { setJtpDetailModal(false) }
  const closeStudentDetail = () => { setStudentDetailModal(false) }
  const closeSubmitted = () => { setSubmittedModal(false) }

  const openAssignmentDetail = () => { setAssignmentDetailModal(true) }
  const openJtpDetail = () => { setJtpDetailModal(true) }
  const openStudentDetail = () => { setStudentDetailModal(true) }
  const openSubmitted = () => { setSubmittedModal(true) }

  return (
    <ModalContext.Provider
      value={{
        isOpenAssignmentDetail,
        isOpenJtpDetail,
        isOpenStudentDetail,
        isOpenSubmitted,
        closeAssignmentDetail,
        closeJtpDetail,
        closeStudentDetail,
        closeSubmitted,
        openAssignmentDetail,
        openJtpDetail,
        openStudentDetail,
        openSubmitted,
      }}
    >
      {children}
    </ModalContext.Provider>
  )
}
