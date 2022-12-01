import React, { useState } from 'react'
import { AssignmentSelector, Box } from '@components'
import { Bar } from './Components'
import { selectAssignments, selectEvaluations } from '@store'

export const AssignmentsBar = () => {
    const assignments = selectAssignments()
    const evaluations = selectEvaluations()

    let qualifications = assignments.map(assignment => {
        const qualifications = evaluations
            .filter(x => x.assignment?.id === assignment.id)
            .map(x => x.variables.reduce((a, b) => a + b, 0))
            .sort((a, b) => a - b)

        return {
            tp: assignment.name.length > 6 ? assignment.name.slice(0, 10) + '...' : assignment.name,
            minimo: qualifications[0],
            promedio:  parseInt((qualifications.reduce((a, b)=> a + b, 0) / qualifications.length).toFixed(2)),
            maximo: qualifications.at(-1) || 0,
        }
    })

    return (
        <Box
          sx={{
            width: '100%',
            backgroundColor: 'var(--unahurWhite)',
            borderRadius: '20px',
            margin: '24px',
            boxShadow: 'var(--box-shadow)',
            height: '400px',
          }}
        >
          <Bar data={qualifications} />
        </Box>
    )
}