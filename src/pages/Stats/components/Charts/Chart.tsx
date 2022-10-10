import React from 'react'
import { chartProps } from './props'
import { ChartCard, ChartContainer } from './styles'

export const Chart = ({
  children,
  height,
  title,
  width,
}: chartProps) => {
  return (
    <div>
      <ChartCard height={height} width={width}>
        <h5>{title}</h5>
        <ChartContainer
          height={height}
          width={width}
          >
          {children}
        </ChartContainer>
      </ChartCard>
    </div>
  )
}