import {
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit'
import { IAssignment } from '@models'

interface IState { all: IAssignment[] }
const initialState: IState = { all: []}

export const assignmentsSlice = createSlice({
  name: 'assignments',
  initialState,
  reducers: {
    getAssignments(){},
    setAssignments(state, { payload }: PayloadAction<IAssignment[]>) {
      state.all = payload
    },
  }
})

export const {
  getAssignments,
  setAssignments,
} = assignmentsSlice.actions

export const assignments = assignmentsSlice.reducer