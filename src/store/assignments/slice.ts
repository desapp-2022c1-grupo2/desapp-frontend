import {
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit'
import { IAssignment, IEvaluation, ISubmitted } from '@models'

interface IState {
  all: IAssignment[],
  submitted: ISubmitted[],
  evaluations: IEvaluation[],
}

const initialState: IState = {
  all: [],
  submitted: [],
  evaluations: [],
}

export const assignmentsSlice = createSlice({
  name: 'assignments',
  initialState,
  reducers: {
    getSubmitted(){},
    getSubmittedByJtp(){},
    setSubmitted(state, { payload }: PayloadAction<ISubmitted[]>) {
      state.submitted = payload
    },
    
    getEvaluations(){},
    getEvaluationsByJtp(){},
    setEvaluations(state, { payload }: PayloadAction<IEvaluation[]>) {
      state.evaluations = payload
    },
    getAssignments(){},
    getAssignmentsByJtp(){},
    setAssignments(state, { payload }: PayloadAction<IAssignment[]>) {
      state.all = payload
    },
  }
})

export const {
  getAssignments,
  getAssignmentsByJtp,
  setAssignments,
  getEvaluations,
  getEvaluationsByJtp,
  setEvaluations,
  getSubmitted,
  getSubmittedByJtp,
  setSubmitted,
} = assignmentsSlice.actions

export const assignments = assignmentsSlice.reducer