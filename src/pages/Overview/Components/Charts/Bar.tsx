import React from 'react'
import { ResponsiveBar } from '@nivo/bar'
import { unahurPalette } from '@styles'
import { barProps } from './props'
import styled from 'styled-components'

export const Bar = ({ data }: barProps) => (
  <ResponsiveBar
    colors={[
      unahurPalette.unahurGreen.main,
      unahurPalette.unahurRed.main,
      unahurPalette.unahurGrey.main
    ]}
    data={data}
    keys={[
      'menor',
      'promedio',
      'mayor'
    ]}
    indexBy="tp"
    margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
    padding={0.8}
    innerPadding={1}
    groupMode="grouped"
    valueScale={{ type: 'linear' }}
    indexScale={{ type: 'band', round: true }}
    borderColor={{
      from: 'color',
      modifiers: [
        [ 'darker', 1.6 ]
      ]
    }}
    axisTop={null}
    axisRight={null}
    axisBottom={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: 'Trabajo Práctico',
      legendPosition: 'middle',
      legendOffset: 32
    }}
    axisLeft={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: 'Nota',
      legendPosition: 'middle',
      legendOffset: -40
    }}
    labelSkipWidth={12}
    labelSkipHeight={12}
    labelTextColor={'#ffffff'}
    
  />
)

export const StyledBar = styled(Bar)`
    height:
`