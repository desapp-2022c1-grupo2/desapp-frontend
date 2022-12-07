import {
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit'
import { IAdmin, IAuth, ICredentials, IJtp, } from '@models'

const initialState: IAuth = {
  isAuthenticated: false,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    clearCredentials(state) { state.credentials = undefined },
    login() {},
    logout(state){ state = initialState },
    setCredentials(state, { payload }: PayloadAction<ICredentials>){ state.credentials = payload },
    setToken(state, { payload }: PayloadAction<string | undefined>){
      state.token = payload
      state.isAuthenticated = state.token != ''
    },
    setUser(state, { payload }: PayloadAction<IAdmin | IJtp | undefined>){ state.user = payload },
    updateUserInfo() {}
  }
})

export const {
  clearCredentials,
  logout,
  login,
  setToken,
  setUser,
  setCredentials,
  updateUserInfo
} = authSlice.actions

export const auth = authSlice.reducer