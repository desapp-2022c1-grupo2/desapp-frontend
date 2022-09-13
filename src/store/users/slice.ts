import {
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit'
import { IJtpResponse } from '@adapters'
import { IJtp, IStudent, IUser } from '@models'

interface IUsers {
  aux?: IUser,
  jtps: IJtp[],
  students: IStudent[],
}

const initialState: IUsers = {
  jtps: [],
  students: [],
}

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    getJtps(){},
    getStudents(){},
    createJtp(state, { payload }: PayloadAction<IJtpResponse>){ state.aux = payload },
    updateJtp(state, { payload }: PayloadAction<IJtp>){ 
      state.jtps = state.jtps.map( jtp => (jtp.id !== payload.id) ? payload : jtp)
      state.aux = payload
    },
    deleteJtp(state, { payload }: PayloadAction<IJtp>){
      state.jtps = state.jtps.filter(jtp => jtp.id != payload.id)
      state.aux = payload
    },
    onFinish(state){ state.aux = undefined},
    setJtps(state, { payload }: PayloadAction<IJtp[]>) { state.jtps = payload },
    setStudents(state, { payload }: PayloadAction<IStudent[]>) { state.students = payload },
  }
})

export const {
  getJtps,
  getStudents,
  setJtps,
  setStudents,
  createJtp,
  updateJtp,
  deleteJtp,
  onFinish,
} = usersSlice.actions

export const user = usersSlice.reducer