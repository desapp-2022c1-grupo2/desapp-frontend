import React from 'react'
import { IAssignment } from '@models'
import { selectAssignments } from '@store'
import { SelectProps } from './props'
import { Select } from './Select'
import { AssignmentOutlined } from '@mui/icons-material'

export const AssignmentSelector = (props: SelectProps) => {
  const assignments: IAssignment[] = selectAssignments()
  const assignmentsOptions = assignments.map(x => ({ name: x.name, value: x.id, }))

  return (
    <Select
      required={props.required || true}
      startAdornment={<AssignmentOutlined />}
      items={assignmentsOptions}
      label='Trabajo Práctico'
      placeholder='Trabajo Práctico'
      {...props}
    />
  )
}