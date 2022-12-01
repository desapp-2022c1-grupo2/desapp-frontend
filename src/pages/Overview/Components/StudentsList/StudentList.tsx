import React, { useContext } from 'react'
import { StudentListContainer } from './styles'
import { StudentQualification } from './StudentQualification'
import { CourseSelector } from '@src/components'
import { SelectedContext } from '../../context/SelectedContext'

export const StudentList = () => {
  const { studentCourse, handleStudentCourse} = useContext(SelectedContext)

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
    <label>Estudiantes</label>
    <StudentListContainer>
      <CourseSelector onChange={handleStudentCourse} value={studentCourse?.id || -1} />
      <div style={{ overflowY: 'auto', width: '100%', padding: '16px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <StudentQualification />
        <StudentQualification />
        <StudentQualification />
        <StudentQualification />
        <StudentQualification />
        <StudentQualification />
        <StudentQualification />
        <StudentQualification />
      </div>
    </StudentListContainer>
    </div>
  )
}