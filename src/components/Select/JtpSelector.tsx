import React from 'react'
import { IJtp, Jtp } from '@models'
import { selectJtps } from '@store'
import { SelectProps } from './props'
import { Select } from './Select'
import { CoPresentOutlined } from '@mui/icons-material'

export const JtpSelector = (props: SelectProps) => {
  const jtps: IJtp[] = selectJtps()
  const jtpsOptions = jtps.map(x => ({
    name: new Jtp(x).fullName(),
    value: x.id || -1,
  }))

  return (
    <Select
      required={props.required || true}
      items={jtpsOptions}
      startAdornment={<CoPresentOutlined />}
      label='Jefe Trabajo Práctico'
      placeholder='Jefe de TP'
      {...props}
    />
  )
}