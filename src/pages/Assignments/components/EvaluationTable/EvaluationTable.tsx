import React from "react"
import { getEvaluationColumns } from "./EvaluationColumns"
import { IEvaluation } from '@models'
import { selectEvaluations } from "@store"
import { Table } from '@components'
import {
  AssignmentDetailModal,
  EvaluationDetailModal,
  StudentDetailModal,
} from "../Modals"

export const EvaluationTable = () => {
  const evaluations: IEvaluation[] = selectEvaluations()

  return (
    <>
      <AssignmentDetailModal />
      <EvaluationDetailModal />
      <StudentDetailModal />
      <Table
        columns={[]}
        handleColumns={getEvaluationColumns}
        loading={!evaluations.length}
        rows={evaluations}
      />
    </>
  )
}
