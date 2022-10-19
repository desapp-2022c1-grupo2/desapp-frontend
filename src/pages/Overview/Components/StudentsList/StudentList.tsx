import React from 'react'
import { selectStudents } from '@src/store'
import { StudentListContainer } from './styles'
import { StudentQualification } from './StudentQualification'

export const StudentList = () => {
  const students = selectStudents()
  return (
    <StudentListContainer>
      <h4>Estudiantes</h4>
      <StudentQualification />
      <StudentQualification />
      <StudentQualification />
      <StudentQualification />
      <StudentQualification />
      <StudentQualification />
      <StudentQualification />
      <StudentQualification />
    </StudentListContainer>
  )
}