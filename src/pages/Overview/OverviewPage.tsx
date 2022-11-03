import React from 'react'
import { AppLayout, Box, FloatingCard } from '@components'
import { Cards, EvaluationStats } from './Components'
import { Pie, Bar } from './Components'
import pieJson from './Components/Charts/pie.json'
import barJson from './Components/Charts/bar.json'

export const OverviewPage = () => {
  return (
    <AppLayout title='Vista General'>
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
            children={<Pie data={pieJson}/>}
            />
          <EvaluationStats />
          <FloatingCard
            title='Calificaciones'
            minWidth='256px'
            width='30%'
            height='400px'
          />
          <Box
            sx={{
              width: '100%',
              backgroundColor: 'var(--unahurWhite)',
              borderRadius: '20px',
              margin: '24px',
              boxShadow: 'var(--box-shadow)',
              height: '400px',
            }}
            >
            <Bar data={barJson}/>
          </Box>
        </Box>
    </AppLayout>
  )
}
//<FloatingCard title='APROBACIÓN POR TP' width='100%' height='300px' children={<Bar data={barJson}/>} />