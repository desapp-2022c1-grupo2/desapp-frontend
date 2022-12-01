import React, { useContext } from "react"
import { Modal, ReadOnlyField } from "@components"
import { Jtp } from "@src/models"
import { ModalContext, SelectedContext } from "../../context"

export const JtpDetailModal = () => {
  const { isOpenJtpDetail, closeJtpDetail } = useContext(ModalContext)
  const selected = useContext(SelectedContext)
  const jtp = new Jtp(selected.jtp)

  return (
    <Modal
      onClose={() => { closeJtpDetail() }}
      open={isOpenJtpDetail}
      title={jtp.fullName()}
    >
      <ReadOnlyField label={"Correo"} text={jtp.email} />
      <ReadOnlyField label={"Rol"} text={jtp.role} />
      <ReadOnlyField label={"Curso"} text={jtp.course?.name} />
    </Modal>
  )
}