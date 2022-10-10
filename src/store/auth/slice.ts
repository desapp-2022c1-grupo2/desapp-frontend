import {
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit'
import { IAuth } from '@models'

const initialState: IAuth = {
  email: '',
  password: '',
  token: '',
  isAuthenticated: false,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login() {},
    logout(state){ state = initialState },
    setCredentials(state, { payload }: PayloadAction<IAuth>){
      state.email = payload.email 
      state.password = payload.password
      state.token = payload.token
    },
    setToken(state, { payload }: PayloadAction<string | undefined>){
      state.token = payload
      state.isAuthenticated = state.token != ''
    },
  }
})

export const {
  logout,
  login,
  setToken,
  setCredentials
} = authSlice.actions

export const auth = authSlice.reducer