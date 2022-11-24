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
    setSubmitted(state, { payload }: PayloadAction<ISubmitted[]>) {
      state.submitted = payload
    },
    
    getEvaluations(){},
    setEvaluations(state, { payload }: PayloadAction<IEvaluation[]>) {
      state.evaluations = payload
    },
    getAssignments(){},
    setAssignments(state, { payload }: PayloadAction<IAssignment[]>) {
      state.all = payload
    },
  }
})

export const {
  getAssignments,
  setAssignments,
  getEvaluations,
  setEvaluations,
  getSubmitted,
  setSubmitted,
} = assignmentsSlice.actions

export const assignments = assignmentsSlice.reducer