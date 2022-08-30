import {
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit'
import { IJtp } from './IJtp'

interface IUsers {
  jtps: IJtp[],
  //students: IStudent[],
}

const initialState: IUsers = {
  jtps: [],
  //studentList: [],
}

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    //getStudents(){},
    //setStudents(){},
    getJtps(){},
    setJtps(state, { payload }: PayloadAction<IJtp[]>) {
      state.jtps = payload
    },
  }
})

export const {
  getJtps,
  setJtps,
} = usersSlice.actions

export const user = usersSlice.reducer