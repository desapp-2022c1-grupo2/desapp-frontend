import React from 'react'
import { GoToProps } from './props'

import {
  GoToContainer,
  ArrowLeft,
  ArrowRight,
} from './styles'

export const GoToBack = ({ text, ...props }: GoToProps) => {
  return (
    <GoToContainer {...props}>
      <ArrowLeft />
      <label>{text}</label>
    </GoToContainer>
  )
}

export const GoToFoward = ({ text, ...props }: GoToProps) => {
  return (
    <GoToContainer {...props}>
      <label>{text}</label>
      <ArrowRight />
    </GoToContainer>
  )
}