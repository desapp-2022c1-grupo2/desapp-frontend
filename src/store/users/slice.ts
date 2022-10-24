import {
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit'
import {
  IAdmin,
  IJtp,
  IStudent,
  IUser,
} from '@models'

interface IUsers {
  aux?: IUser,
  admins: IAdmin[],
  jtps: IJtp[],
  students: IStudent[],
}

const initialState: IUsers = {
  admins: [],
  jtps: [],
  students: [],

}

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    getAdmins(){},
    getJtps(){},
    getStudents(){},
    createJtp(state, { payload }: PayloadAction<IJtp>){
      state.aux = payload
    },
    updateJtp(state, { payload }: PayloadAction<IJtp>){ 
      state.jtps = state.jtps.map( jtp => (jtp.id === payload.id) ? payload : jtp)
      state.aux = payload
    },
    deleteJtp(state, { payload }: PayloadAction<IJtp>){
      state.jtps = state.jtps.filter(jtp => jtp.id != payload.id)
      state.aux = payload
    },
    setAdmins(state, { payload }: PayloadAction<IAdmin[]>) { state.admins = payload },
    setJtps(state, { payload }: PayloadAction<IJtp[]>) { state.jtps = payload },
    setStudents(state, { payload }: PayloadAction<IStudent[]>) { state.students = payload },
  }
})

export const {
  getAdmins,
  getJtps,
  getStudents,
  setAdmins,
  setJtps,
  setStudents,
  createJtp,
  updateJtp,
  deleteJtp,
} = usersSlice.actions

export const user = usersSlice.reducer