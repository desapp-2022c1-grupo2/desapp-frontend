import React from 'react'
import { ChevronLeftOutlined, ChevronRightOutlined } from '@components'
import styled from 'styled-components'
import { selectSidebar } from '@src/store'
import { useDispatch } from 'react-redux'
import { toggleSidebar } from '@src/store/misc'

const Container = styled.div<{onClick: Function}>`
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

export const ToggleSidebar = () =>{
  const open: boolean = selectSidebar()
  const dispatch = useDispatch()
  const handleToggle = () => { dispatch(toggleSidebar()) }

  return (
    <Container onClick={handleToggle}>
      {
        open
          ? <ChevronLeftOutlined htmlColor='var(--unahurWhite)'/>
          : <ChevronRightOutlined htmlColor='var(--unahurWhite)'/>
      }
    </Container>
  )
}