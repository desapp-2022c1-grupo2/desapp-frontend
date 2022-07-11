import React from 'react'
import { GoToProps } from './props'

import {
  GoToContainer,
  ArrowLeft,
  ArrowRight,
} from './styles'
import {CustomButton} from "../Button/Button";

export const GoToBack = ({ text, onClick, ...props }: GoToProps) => {
  return (
    <CustomButton onClick={onClick} startIcon={<ArrowLeft />} {...props}>
      <label>{text}</label>
    </CustomButton>
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
