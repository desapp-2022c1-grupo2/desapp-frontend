import React from 'react'
import { StatsLayout,Bar, Pie, Radar, Chart } from '../../components'
import barData from './bar.json'
import pieData from './pie.json'
import radarData from './radar.json'

const Content = () => (
  <>
    <Chart
      title='Notas'
      children={<Bar data={barData}/>}
      width='100%'
    />
    <Chart
      title='Variables de evaluación'
      children={<Radar data={radarData}/>}
      width='50%'
      height='600px'
    />
    <Chart
      title='Trabajos prácticos'
      children={<Pie data={pieData}/>}
    />
  </>
)

export const StatsAssignments = () => <StatsLayout content={<Content />}/>