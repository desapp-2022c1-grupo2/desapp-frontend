import React from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { ChevronLeftOutlined, ChevronRightOutlined } from '@components'
import { selectSidebar, toggleSidebar } from '@store'
import { devices } from '@util/breakpoints'

const Container = styled.div<{onClick: Function}>`
  align-items: center;
  border-radius: 50px;
  background-color: var(--unahurBlack);
  box-shadow: var(--box-shadow);
  cursor: pointer;
  display: none;
  height: 32px;
  justify-content: center;
  position: absolute;
  right: -16px;
  top: 112px;
  width: 32px;

  ${devices.desktop} { display: flex; }
`

export const ToggleSidebar = () =>{
  const isSidebarOpen: boolean = selectSidebar()
  const dispatch = useDispatch()
  const handleToggle = () => { dispatch(toggleSidebar()) }

  return (
    <Container onClick={handleToggle}>
      {
        isSidebarOpen
          ? <ChevronLeftOutlined htmlColor='var(--unahurWhite)'/>
          : <ChevronRightOutlined htmlColor='var(--unahurWhite)'/>
      }
    </Container>
  )
}