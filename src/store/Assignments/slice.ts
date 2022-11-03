import {
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit'
import { IAssignment, IEvaluation, ISubmitted } from '@models'

interface IState {
  all: IAssignment[],
  submited: ISubmitted[],
  evaluations: IEvaluation[],
}

const initialState: IState = {
  all: [],
  submited: [],
  evaluations: [],
}

export const assignmentsSlice = createSlice({
  name: 'assignments',
  initialState,
  reducers: {
    getSubmitted(){},
    setSubmitted(state, { payload }: PayloadAction<ISubmitted[]>) {
      state.submited = payload
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
  getSubmitted,
  setSubmitted,
} = assignmentsSlice.actions

export const assignments = assignmentsSlice.reducer