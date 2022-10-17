import React from 'react'
import { ChevronLeftOutlined, ChevronRightOutlined } from '@components'
import styled from 'styled-components'

interface buttonProps {
  onClick: Function,
  open?: boolean,
}

const Container = styled.div`
  align-items: center;
  border-radius: 50px;
  background-color: var(--unahurBlack);
  box-shadow: var(--box-shadow);
  cursor: pointer;
  display: flex;
  height: 32px;
  justify-content: center;
  position: absolute;
  right: -16px;
  top: 112px;
  width: 32px;
`

export const ToggleSidebar = ({ open, ...props }: buttonProps) =>{
  return (
    <Container {...props}>
      {
        open
          ? <ChevronLeftOutlined htmlColor='var(--unahurWhite)'/>
          : <ChevronRightOutlined htmlColor='var(--unahurWhite)'/>
      }
    </Container>
  )
}