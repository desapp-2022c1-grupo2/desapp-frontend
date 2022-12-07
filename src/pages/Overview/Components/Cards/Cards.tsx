import { selectAssignments, selectEvaluations, selectJtps, selectStudents } from '@src/store'
import React from 'react'
import { Card } from './Card'
import { CardsContainer } from './styles'

export const Cards = () => {
  const count = {
    assignments: selectAssignments().length,
    students: selectStudents().length,
    jtps: selectJtps().length,
    evaluations: selectEvaluations().length,
  }

  return (
    <CardsContainer>
      <Card color='var(--unahurGreen)' value={count.assignments} label={`Trabajos\nPrácticos`}/>
      { count.jtps > 0 && <Card color='var(--unahurOrange)' value={count.jtps} label={`Jefes de TPs`}/> }
      <Card color='var(--unahurCyan)' value={count.students} label={`Alumnos`}/>
      <Card color='var(--unahurRed)' value={count.evaluations} label={`Evaluaciones`}/>
    </CardsContainer>
  )
}
