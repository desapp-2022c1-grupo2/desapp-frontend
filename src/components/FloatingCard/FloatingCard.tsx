import React from 'react'
import { floatingCardProps } from './props'
import {
  FLoatingCardContainer,
  FLoatingCardContent,
  FloatingCardHeader,
} from './styles'

export const FloatingCard = ({
  children,
  title,
  tooltip,
  ...props
}: floatingCardProps) => {
  return (
    <FLoatingCardContainer {...props}>
      { title &&
        <FloatingCardHeader>
          <h6>{title}</h6>
          {tooltip}
        </FloatingCardHeader>
      }
      <FLoatingCardContent {...props}>
        {children}
      </FLoatingCardContent>
    </FLoatingCardContainer>
  )
}