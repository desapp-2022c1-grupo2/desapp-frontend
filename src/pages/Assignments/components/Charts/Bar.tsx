import React from 'react'
import { ResponsiveBar } from '@nivo/bar'
import { unahurPalette } from '@styles'
import { barProps } from './props'

export const Bar = ({ data }: barProps) => (
  <ResponsiveBar
    maxValue={10}
    colors={[
      unahurPalette.unahurOrange.main,
      unahurPalette.unahurBlue.main
    ]}
    data={data}
    keys={[
      'student',
      'average'
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
    legends={[
      {
        dataFrom: 'keys',
        anchor: 'bottom-right',
        direction: 'column',
        justify: false,
        translateX: 120,
        translateY: 0,
        itemsSpacing: 2,
        itemWidth: 100,
        itemHeight: 20,
        itemDirection: 'left-to-right',
        itemOpacity: 0.85,
        symbolSize: 20,
        effects: [
          {
            on: 'hover',
            style: { itemOpacity: 1 }
          }
        ]
      }
    ]}
    role="application"
    barAriaLabel={function(e){return e.id+": "+e.formattedValue+" in country: "+e.indexValue}}
  />
)