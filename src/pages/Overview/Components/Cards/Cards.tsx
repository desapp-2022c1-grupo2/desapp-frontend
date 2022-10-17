import React from 'react'
import { Card } from './Card'
import { CardsContainer } from './styles'

export const Cards = () => {
  return (
    <CardsContainer>
      <Card color='var(--unahurGreen)' value={5} label={`Trabajos\nPrácticos`}/>
      <Card color='var(--unahurCyan)' value={94} label={`Alumnos`}/>
      <Card color='var(--unahurOrange)' value={5} label={`Jefes de TPs`}/>
      <Card color='var(--unahurRed)' value={15} label={`Posibles\ndesertores`}/>
    </CardsContainer>
  )
}