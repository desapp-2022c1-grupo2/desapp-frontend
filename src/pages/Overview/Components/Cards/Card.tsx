import React from 'react'
import { cardProps } from './props'
import { CardContainer } from './styles'
import {Skeleton} from "@mui/material";

export const Card = ({
  color,
  label,
  value,
}: cardProps) => {
  return (
    <CardContainer color={color}>
      {
        value
          ? <><span>{value}</span> <p>{label}</p></>
          : <Skeleton variant={"text"} height={"100%"} width={'150px'}/>
      }
    </CardContainer>
  )
}
