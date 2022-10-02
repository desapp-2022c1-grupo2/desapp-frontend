import {
  call,
  put,
  select,
  takeLatest,
} from 'redux-saga/effects'
import { setCredentials, setToken } from './slice'
import { IAuth } from '@models'
import { auth } from '@services'
import { RootState } from '@store'

function* authUser() {
  try {
    const user: IAuth = yield select((state: RootState) => state.auth)
    if(user.token && user.email) {
      yield put(setToken(user.token))
    } else {
      const response: IAuth = yield call(auth, user)
      localStorage.setItem('email', response.email)
      localStorage.setItem('token', response.token || '')
      yield put(setToken(response.token))
      yield put(setCredentials({
        email: response.email,
        password: '',
        token: response.token,
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

export function* authWatcher(){
  yield takeLatest('auth/login', authUser)
  yield takeLatest('auth/logout', logoutUser)
}
