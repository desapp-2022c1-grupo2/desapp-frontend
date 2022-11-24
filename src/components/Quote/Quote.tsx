import React from 'react'
import { QuoteContainer } from './style'

export const Quote = ({ text, label }: { text?: string, label?: string }) => {
  return (
    <QuoteContainer>
      { label && <label>{label}</label> }
      { text && <p>{text}</p> }
    </QuoteContainer>
  )
}