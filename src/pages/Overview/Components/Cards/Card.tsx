import React from 'react'
import { cardProps } from './props'
import { CardContainer } from './styles'

export const Card = ({
  color,
  label,
  value,
}: cardProps) => {
  return (
    <CardContainer color={color}>
      <span>{value}</span>
      <p>{label}</p>
    </CardContainer>
  )
}