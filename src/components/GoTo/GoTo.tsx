import React from 'react'
import { Button } from '@components'
import { GoToProps } from './props'
import {
  GoToContainer,
  ArrowLeft,
  ArrowRight,
} from './styles'

export const GoToBack = ({ text, ...props }: GoToProps) => {
  return (
    <Button
      color='unahurBlack'
      startIcon={<ArrowLeft />}
      text={text}
      {...props}
    />
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