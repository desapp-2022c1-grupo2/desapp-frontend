import React from 'react'
import { Pie as PieChart } from '@nivo/pie'
import { unahurPalette } from '@styles'
import { pieProps } from './props'
import styled from 'styled-components'

const StyledPie= styled(PieChart)`
  height: 300px;
  width: 300px;
`

export const Pie = ({data}: pieProps) => (
  <StyledPie
    height={300}
    width={300}
    enableArcLabels={false}
    enableArcLinkLabels={false}
    data={data}
    colors={
      [
        unahurPalette.unahurGreen.main,
        unahurPalette.unahurRed.main,
        unahurPalette.unahurGrey.main,
        unahurPalette.unahurGrey.main,
      ]
    }
    innerRadius={0.7}
    padAngle={1}
    cornerRadius={4}
  />
)