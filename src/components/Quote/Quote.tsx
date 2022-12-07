import React from 'react'
import { QuoteContainer } from './style'
import { QuoteProps } from './props'

export const Quote = ({ text, label }: QuoteProps) => {
  return (
    <QuoteContainer>
      { label && <label>{label}</label> }
      { text && <p>{text}</p> }
    </QuoteContainer>
  )
}
