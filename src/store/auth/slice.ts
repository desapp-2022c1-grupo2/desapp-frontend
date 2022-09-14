import {
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit'
import { IAuth } from '@models'

const initialState: IAuth = {
  email: '',
  password: '',
  isLogged: false,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout(state){
      state.email = ''
      state.password = ''
      state.isLogged = false
    },
    requestLogin(state, { payload }: PayloadAction<IAuth>) {
      const { email, password } = payload
      state.email = email
      state.password = password
      state.isLogged = email === 'admin@unahur.edu.ar' && password === 'admin'
    },
  }
})

export const {
  logout,
  requestLogin,
} = authSlice.actions

export const auth = authSlice.reducer