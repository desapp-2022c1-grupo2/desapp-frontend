import React, { useContext } from "react"
import { FullscreenModal, ReadOnlyField } from "@components"
import { Student } from "@models"
import { ModalContext, SelectedContext } from "../../context"

export const StudentDetailModal = () => {
  const { isOpenStudentDetail, closeStudentDetail } = useContext(ModalContext)
  const selected = useContext(SelectedContext)
  const student = selected.student && new Student(selected.student)

  return (
    <FullscreenModal
      onClose={() => { closeStudentDetail() }}
      open={isOpenStudentDetail}
      title={student?.fullName()}
    >
      <ReadOnlyField label={"Correo"} text={student?.email} />
      <ReadOnlyField label={"Rol"} text={student?.role} />
      
    </FullscreenModal>
  )
}