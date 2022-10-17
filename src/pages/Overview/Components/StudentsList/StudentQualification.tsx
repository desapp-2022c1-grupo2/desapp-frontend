import React from 'react'
import { selectStudents } from '@src/store'
import { Avatar } from '@components'
import { StudentQualificationContainer } from './styles'

export const StudentQualification = () => {
  return (
    <StudentQualificationContainer>
      <div style={{display: 'flex', alignItems: 'center', gap: '16px'}}>
        <Avatar />
        <span>Cosme Fulanito</span>
      </div>
      <p>10</p>
    </StudentQualificationContainer>
  )
}