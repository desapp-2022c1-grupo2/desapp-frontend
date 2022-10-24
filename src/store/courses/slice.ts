import {
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit'
import { ICourse } from '@models'

interface IState { all: ICourse[] }
const initialState: IState = { all: []}

export const coursesSlice = createSlice({
  name: 'courses',
  initialState,
  reducers: {
    getCourses(){},
    setCourses(state, { payload }: PayloadAction<ICourse[]>) { state.all = payload },
  }
})

export const {
  getCourses,
  setCourses,
} = coursesSlice.actions

export const courses = coursesSlice.reducer