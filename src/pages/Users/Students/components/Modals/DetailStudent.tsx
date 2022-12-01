import React, { useContext } from "react"
import { Modal, Quote, ReadOnlyField } from "@components"
import { ModalContext, StudentContext } from "../../context"
import { BadgeOutlined, CalendarMonthOutlined, ClassOutlined, EmailOutlined, PhoneOutlined } from "@mui/icons-material"
import { TagsContainer} from './styles'

export const DetailStudentModal = () => {
  const { isOpenDetail, closeDetail } = useContext(ModalContext)
  const { selected } = useContext(StudentContext)

  return (
    <Modal
      onClose={() => { closeDetail() }}
      open={isOpenDetail}
      title={selected.fullName()}
    >
      <Quote text={selected.about} />
      <TagsContainer>
        <ReadOnlyField icon={<CalendarMonthOutlined />} label='Nacimiento' text={selected.birthdate?.toDateString()} />
        <ReadOnlyField icon={<ClassOutlined />} label='Materia' text={selected.course.name} />
        <ReadOnlyField icon={<EmailOutlined />} label='Correo' text={selected.email} />
        <ReadOnlyField icon={<BadgeOutlined />} label='DNI' text={selected.dni} />
        <ReadOnlyField icon={<PhoneOutlined />} label='Télefono' text={selected.json.phone} />
      </TagsContainer>
    </Modal>
  )
}