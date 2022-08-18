import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface Iauth {
  isLogged?: boolean;
  email: string,
  password: string,
}

const initialState: Iauth = {
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
    requestLogin(state, { payload }: PayloadAction<Iauth>) {
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

export default authSlice.reducer