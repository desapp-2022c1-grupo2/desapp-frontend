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
        {value ?
            <span>{value}</span> :
            <Skeleton variant={"text"} height={"100%"} width={'3rem'}/>
        }
      <p>{label}</p>
    </CardContainer>
  )
}
