import React from 'react'
import { ResponsiveRadar } from '@nivo/radar'
import { unahurPalette } from '@styles'
import { radarProps } from './props'

export const Radar = ({ data }: radarProps) => (
  <ResponsiveRadar
    data={data}
    keys={[ 'student', 'average' ]}
    indexBy="variable"
    valueFormat=">-.2f"
    margin={{ top: 70, right: 80, bottom: 40, left: 80 }}
    borderColor={{ from: 'color' }}
    gridLabelOffset={36}
    dotSize={10}
    dotColor={{ theme: 'background' }}
    dotBorderWidth={2}
    colors={[
      unahurPalette.unahurGreen.main,
      unahurPalette.unahurOrange.main
    ]}
    blendMode="multiply"
    motionConfig="wobbly"
    legends={[
      {
        anchor: 'top-left',
        direction: 'column',
        translateX: -50,
        translateY: -40,
        itemWidth: 80,
        itemHeight: 20,
        itemTextColor: '#999',
        symbolSize: 12,
        symbolShape: 'circle',
        effects: [
          {
            on: 'hover',
            style: {
              itemTextColor: '#000'
            }
          }
        ]
      }
    ]}
  />
)
