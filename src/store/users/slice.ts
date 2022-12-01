import {
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit'
import {
  IAdmin,
  IJtp,
  IStudent,
} from '@models'

interface IUsers {
  filtered?: IAdmin[] | IJtp[] | IStudent[],
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
    getStudentsByCourse(){},
    updateJtp(state, { payload }: PayloadAction<IJtp>){ 
      state.jtps = state.jtps.map( jtp => (jtp.id === payload.id) ? payload : jtp)
    },
    deleteJtp(state, { payload }: PayloadAction<IJtp>){
      state.jtps = state.jtps.filter(jtp => jtp.id != payload.id)
    },
    updateStudent(state, { payload }: PayloadAction<IStudent>){
      state.students = state.students.map( x => (x.id === payload.id) ? payload : x)
    },
    deleteStudent(state, { payload }: PayloadAction<IStudent>){
      state.students = state.students.filter(x => x.id != payload.id)
    },
    updateAdmin(state, { payload }: PayloadAction<IAdmin>){
      state.admins = state.admins.map( x => (x.id === payload.id) ? payload : x)
    },
    deleteAdmin(state, { payload }: PayloadAction<IAdmin>){
      state.admins = state.admins.filter(x => x.id != payload.id)
    },
    resetPassword(state, { payload }: PayloadAction<IJtp>){
      state.jtps = state.jtps.filter(jtp => jtp.id != payload.id)
    },
    setAdmins(state, { payload }: PayloadAction<IAdmin[]>) { state.admins = payload },
    setJtps(state, { payload }: PayloadAction<IJtp[]>) { state.jtps = payload },
    setStudents(state, { payload }: PayloadAction<IStudent[]>) { state.students = payload },
  }
})

export const {
  deleteAdmin,
  deleteJtp,
  deleteStudent,
  getAdmins,
  getJtps,
  getStudents,
  getStudentsByCourse,
  setAdmins,
  setJtps,
  setStudents,
  updateAdmin,
  updateJtp,
  updateStudent,
  resetPassword,
} = usersSlice.actions

export const user = usersSlice.reducer
