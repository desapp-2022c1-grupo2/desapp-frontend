import React from 'react'
import { AppLayout, Box, FloatingCard } from '@components'
import { Cards, EvaluationStats } from './Components'
import { Pie } from './Components'
import { AssignmentsBar } from './AssignmentsBar'

import { FullscreenModal } from '@components'
import { selectEvaluations } from '@src/store'
import { SelectedProvider } from './context/SelectedContext'


export const OverviewPage = () => {
  const total = selectEvaluations().map(x => x.variables.reduce((a, b) => a + b, 0))

  const approved = total.filter(x => x >= 4 && x !== 0).length
  const disapproved = total.filter(x => x < 4 && x !== 0).length
  const unrated = total.length - approved - disapproved

  const stats = [
    {
      id: "Aprobados",
      label: "Aprobados",
      value: approved
    }, {
      id: "Desaprobados",
      label: "Desaprobados",
      value: disapproved
    }, {
      id: "Sin Calificar",
      label: "Sin Calificar",
      value: unrated
    }
  ]

  return (
    <SelectedProvider>
    <AppLayout title='Vista General'>
      <FullscreenModal onClose={function (event: React.MouseEvent<Element, MouseEvent>): void {
        throw new Error('Function not implemented.')
      } } />
      <Cards />
      <Box
        display='flex'
        gap='40px'
        flexWrap='wrap'
        width='100%'
        maxWidth='1800px'
        justifyContent='space-evenly'
      >
        <FloatingCard
          title='PORCENTAJE DE APROBACIÓN'
          width='40%'
          height='348px'
          minWidth='368px'
          children={<Pie data={stats} />}
        />
        <EvaluationStats />
        <AssignmentsBar />
      </Box>
    </AppLayout>
    </SelectedProvider>
  )
}
