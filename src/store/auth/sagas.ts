import {
  call,
  put,
  select,
  takeLatest,
} from 'redux-saga/effects'
import { clearCredentials, setToken, setUser } from './slice'
import { IAuth, ICredentials, IUser } from '@models'
import { authenticate } from '@services'
import { RootState } from '@store'
import { 
  isUserAlreadyAuthenticated,
  cleanLocalStorage,
  getUserFromLocalStorage,
  setTokenInLocalStorage,
  setUserInLocalStorage,
} from '@util'

function* handleAuthentication() {
  try {
    const auth: IAuth = yield select((state: RootState) => state.auth)
    if(isUserAlreadyAuthenticated(auth)) {
      const user = getUserFromLocalStorage()
      yield put(setToken(auth.token))
      yield put(setUser(user))
    } else {
      const credentials: ICredentials = auth.credentials || { email: '' }
      const response: IAuth = yield call(authenticate, credentials)
      setTokenInLocalStorage(response.token)
      setUserInLocalStorage(response.user)
      yield put(clearCredentials())
      yield put(setToken(response.token))
      yield put(setUser(response.user))
    }
  } catch (err){
    console.error(err)
  }
}

function* logout(){
  try {
    cleanLocalStorage()
  } catch (err){
    console.error(err)
  }
}

function* updateAuthenticatedUser(){
  try {
    const user: IUser = yield select((state: RootState) => state.auth.user)
    setUserInLocalStorage(user)
  } catch (err){
    console.error(err)
  }
}

export function* authWatcher(){
  yield takeLatest('auth/login', handleAuthentication)
  yield takeLatest('auth/logout', logout)
  yield takeLatest('auth/updateUserInfo', updateAuthenticatedUser)
}
