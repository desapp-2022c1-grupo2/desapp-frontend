import React from 'react'
import { ResponsivePie } from '@nivo/pie'
import { unahurPalette } from '@styles'
import { pieProps } from './props'

export const Pie = ({data}: pieProps) => (
  <ResponsivePie
    data={data}
    colors={[
      unahurPalette.unahurOrange.main,
      unahurPalette.unahurGreen.main,
      unahurPalette.unahurRed.main,
    ]}
    margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
    innerRadius={0.7}
    padAngle={1}
    cornerRadius={4}
    activeOuterRadiusOffset={8}
    arcLinkLabelsSkipAngle={10}
    arcLinkLabelsTextColor={unahurPalette.unahurBlack.main}
    arcLinkLabelsThickness={2}
    arcLinkLabelsColor={{ from: 'color' }}
    arcLabelsSkipAngle={10}
    arcLabelsTextColor={'#ffffff'}
    legends={[
      {
        anchor: 'bottom',
        direction: 'row',
        justify: false,
        translateX: 0,
        translateY: 56,
        itemsSpacing: 0,
        itemWidth: 100,
        itemHeight: 18,
        itemTextColor: unahurPalette.unahurGrey.main,
        itemDirection: 'left-to-right',
        itemOpacity: 1,
        symbolSize: 18,
        symbolShape: 'circle',
        effects: [
          {
            on: 'hover',
            style: {
              itemTextColor: unahurPalette.unahurBlack.main
            }
          }
        ]
      }
    ]}
  />
)