import {
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit'
import { IAuth, IUser } from '@src/models_copy'

const initialState: IAuth = {
  email: '',
  password: '',
  token: '',
  user: {},
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
      state.user = payload.user
    },
    setToken(state, { payload }: PayloadAction<string | undefined>){
      state.token = payload
      state.isAuthenticated = state.token != ''
    },
    setUser(state, { payload }: PayloadAction<IUser | undefined>){
      state.user = payload
    },
    updateUserInfo() {}
  }
})

export const {
  logout,
  login,
  setToken,
  setUser,
  setCredentials,
  updateUserInfo
} = authSlice.actions

export const auth = authSlice.reducer