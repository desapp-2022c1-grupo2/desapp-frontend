import {
  call,
  put,
  select,
  takeLatest,
} from 'redux-saga/effects'
import { setCredentials, setToken, setUser } from './slice'
import { IAuth, IUser } from '@models'
import { auth, updateAdmin } from '@services'
import { RootState } from '@store'

function* authUser() {
  try {
    const authData: IAuth = yield select((state: RootState) => state.auth)
    if(authData.token && authData.email) {
      const userData = JSON.parse(localStorage.getItem("user") || '{}')
      yield put(setToken(authData.token))
      yield put(setUser(userData))
    } else {
      const response: IAuth = yield call(auth, authData)
      
      const x: string | null = localStorage.getItem('token')
      localStorage.setItem('email', response.email)
      localStorage.setItem('token', response.token || '')
      if(x !== localStorage.getItem('token')) { location.reload()}
      localStorage.setItem('user', JSON.stringify(response.user) || '')
      yield put(setToken(response.token))
      yield put(setUser(response.user))
      yield put(setCredentials({
        email: response.email,
        password: '',
        token: response.token,
        user: response.user
      }))
    }
  } catch (err){
    console.error(err)
  }
}

function* logoutUser(){
  try {
    localStorage.removeItem("email")
    localStorage.removeItem("token")
  } catch (err){
    console.error(err)
  }
}

function* updateCurrentUser(){
  try {
    const user: IUser | undefined = yield select((state: RootState) => state.auth.user)
    localStorage.setItem('user', JSON.stringify(user))
    yield call(updateAdmin, user)
  } catch (err){
    console.error(err)
  }
}

export function* authWatcher(){
  yield takeLatest('auth/login', authUser)
  yield takeLatest('auth/logout', logoutUser)
  yield takeLatest('auth/updateUserInfo', updateCurrentUser)
}
