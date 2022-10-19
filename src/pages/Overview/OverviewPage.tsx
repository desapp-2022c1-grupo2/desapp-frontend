import React from 'react'
import { AppLayout, FloatingCard } from '@components'
import { Cards, EvaluationStats } from './Components'

export const OverviewPage = () => {
  return (
    <AppLayout title='Vista General'>
        <Cards />
        <div style={{display: 'flex', gap: '40px'}}>
          <FloatingCard
            title='PORCENTAJE DE APROBACIÓN'
            width='30%'
            height='100%'
          />
          <EvaluationStats />
        </div>
    </AppLayout>
  )
}