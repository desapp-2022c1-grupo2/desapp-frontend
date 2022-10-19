import React from 'react'
import { FloatingCard } from '@components'
import {
  AssignmentCounterContainer,
  EvaluationStatsContainer
} from './styles'

interface assignmentCounterProps {
  small?: boolean,
  vertical?: boolean,
  color?: string,
  count: number,
  label: string,
}
const AssignmentCounter = ({color, count, label, small, vertical}: assignmentCounterProps) => {
  return (
    <AssignmentCounterContainer small={small} color={color} vertical={vertical}>
      <span> </span>
      <h2>{count}</h2>
      <p>{label}</p>
    </AssignmentCounterContainer>
  )
}

export const EvaluationStats = () => {
  return (
    <EvaluationStatsContainer>
      <FloatingCard title='Entregas' width='180px'>
        <div style={{ display: 'flex', width: '100%', justifyContent: 'space-evenly'}}>
          <AssignmentCounter vertical count={42} label='Total' />
          <AssignmentCounter vertical count={42} label='Total' />
        </div>
        <div style={{ display: 'flex', width: '100%', justifyContent: 'center'}}>
          <AssignmentCounter small color='var(--unahurGrey)' count={4} label='Sin Calificar' />
          <AssignmentCounter small color='var(--unahurGrey)' count={6} label='Sin Entregar' />
        </div>
      </FloatingCard>
      <AssignmentCounter color='var(--unahurGreen)' count={24} label='Aprobados' />
      <AssignmentCounter color='var(--unahurRed)' count={12} label='No Aprobados' />
    </EvaluationStatsContainer>
  )
}