import React, { useContext } from "react"
import { GridColDef } from "@mui/x-data-grid"
import { Chip } from '@components'
import { Course, Evaluation, Jtp, Student } from "@models"
import { TableOptionsButton } from '../TableOptionsButton'
import { ModalContext, SelectedContext } from "../../context"

export function getEvaluationColumns(): GridColDef[] {
  const {
    openAssignmentDetail,
    openStudentDetail,
    openSubmitted,
  } = useContext(ModalContext)

  const {
    setAssignment,
    setCourse,
    setEvaluation,
    setJtp,
    setStudent,
    setSubmitted,
  } = useContext(SelectedContext)
  
  return [{
    field: "student",
    headerName: "Estudiante",
    editable: false,
    flex: 2,
    renderCell: (params) => {
      return params.value
        ? new Student(params.value).fullName()
        : ''
    }
  }, {
    field: "assignment",
    headerName: "Trabajo Práctico",
    editable: false,
    flex: 2,
    renderCell: (params) => {
      return params.value
      ? <Chip label={new Evaluation(params.row).assignment?.name} />
      : ''
    }
  }, {
    field: "jtp",
    headerName: "Jefe TP",
    flex: 2,
    editable: false,
    renderCell: (params) => {
      return params.value
        ? <Chip color='unahurGreen' label={new Jtp(params.value).fullName()} />
        : ''
    }
  }, {
    field: "course",
    headerName: "Materia",
    flex: 2,
    editable: false,
    renderCell: (params) => {
      return params.value
        ? <Chip color='unahurCyan' label={new Course(params.value).json.name} />
        : ''
    }
  }, {
    field: "actions",
    headerName: "",
    width: 54,
    align: "center",
    sortable: false,
    disableColumnMenu: true,
    renderCell: (params) => {
      const {
        assignment,
        course,
        jtp,
        student,
        submitted,
        ...evaluation
      } = new Evaluation(params.row).json

      const options = {
        handleAssignmentDetail: (params.row.assignment) && (() => {
            openAssignmentDetail()
            setAssignment(assignment)
        }),
        handleStudentDetail: (params.row.student) && (() => {
          openStudentDetail()
          setStudent(student)
        }),
        handleEvaluationDetail: (params.row.submitted) && (() => {
          openSubmitted()
          setAssignment(assignment)
          setCourse(course)
          setJtp(jtp)
          setStudent(student)
          setSubmitted(submitted)
          setEvaluation(evaluation)
        })
      }

      return <TableOptionsButton {...options} />
    }
  }
]
}
