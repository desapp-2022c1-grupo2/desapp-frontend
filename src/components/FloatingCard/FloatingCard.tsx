import React from 'react'
import { floatingCardProps } from './props'
import {
  FLoatingCardContainer,
  FLoatingCardContent,
  FloatingCardHeader,
  FloatingCardTitle,
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
          <FloatingCardTitle>{title}</FloatingCardTitle>
          {tooltip}
        </FloatingCardHeader>
      }
      <FLoatingCardContent {...props}>
        {children}
      </FLoatingCardContent>
    </FLoatingCardContainer>
  )
}