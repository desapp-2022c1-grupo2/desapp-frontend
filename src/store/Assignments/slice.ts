import {
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit'
import { IAssignment, IEvaluation, ISubmitedAssignment } from '@src/models_copy'

interface IState {
  all: IAssignment[],
  submited: ISubmitedAssignment[],
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
    getSubmited(){},
    setSubmited(state, { payload }: PayloadAction<ISubmitedAssignment[]>) {
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
  getSubmited,
  setSubmited,
} = assignmentsSlice.actions

export const assignments = assignmentsSlice.reducer