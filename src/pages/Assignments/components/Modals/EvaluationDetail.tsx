import React, { useContext } from "react"
import { Modal, Quote, ReadOnlyField } from "@components"
import { Jtp, Student, Submitted } from "@models"
import { TagsContainer} from './styles'
import { ModalContext, SelectedContext } from "../../context"
import { CalendarMonthOutlined, ClassOutlined, CoPresentOutlined, NumbersOutlined, SchoolOutlined, ScoreOutlined } from "@mui/icons-material"
import { Radar } from "../Radar/Radar"

export const EvaluationDetailModal = () => {
  const { isOpenSubmitted, closeSubmitted } = useContext(ModalContext)
  const {
    assignment,
    course,
    evaluation,
    jtp,
    student,
    submitted,
  } = useContext(SelectedContext)

  return (
    <Modal
      onClose={() => { closeSubmitted() }}
      open={isOpenSubmitted}
      title='Entrega'
    >
      { submitted?.reflections && <Quote label='Reflexion' text={submitted?.reflections} /> }
      { evaluation?.reflections && <Quote label='Devolución' text={evaluation?.reflections} /> }
      <TagsContainer>
        { student && <ReadOnlyField icon={<SchoolOutlined />} label='Estudiante' text={new Student(student).fullName()} /> }
        { jtp && <ReadOnlyField icon={<CoPresentOutlined />} label='Responsable' text={new Jtp(jtp).fullName()} /> }
        { course && <ReadOnlyField icon={<ClassOutlined />} label='Curso' text={course.name} /> }
        { submitted && <ReadOnlyField icon={<CalendarMonthOutlined />} label='Fecha Entrega' text={new Submitted(submitted).date} /> }
        <ReadOnlyField icon={<NumbersOutlined />} label='Autoevaluación' text={submitted?.qualification.toString() || '-'} />
      </TagsContainer>
      {
        assignment && assignment.variables[0] !== 'Esta actividad no será evaluada' && evaluation &&
        <div style={{ height: '360px', width: '100%' }}>
        <Radar data={[
          {
            variable: assignment.variables[0],
            qualification: evaluation.variables[0],
          }, {
            variable: assignment.variables[1],
            qualification: evaluation.variables[1],
          }, {
            variable: assignment.variables[2],
            qualification: evaluation.variables[2],
          }, {
            variable: assignment.variables[3],
            qualification: evaluation.variables[3],
          }, {
            variable: assignment.variables[4],
            qualification: evaluation.variables[4],
          }
        ]}/>
        </div>
      }
    </Modal>
  )
}