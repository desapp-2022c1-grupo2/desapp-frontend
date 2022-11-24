import {
  call,
  put,
  takeLatest,
} from 'redux-saga/effects'

import {
  IAdmin,
  IJtp,
  IStudent,
} from '@models'

import {
  fetchAllJtps,
  fetchAllStudents,
  fetchAllAdmins,
} from '@services'

import {
  setAdmins,
  setJtps,
  setStudents,
} from './slice'

function* getJtps() {
  try {
    const response: IJtp[] = yield call(fetchAllJtps)
    yield put(setJtps(response))
  } catch (err){
    console.error(err)
  }
}

function* getStudents() {
  try {
    const response: IStudent[] = yield call(fetchAllStudents)
    yield put(setStudents(response))
  } catch (err){
    console.error(err)
  }
}

function* getAdmins() {
  try {
    const response: IAdmin[] = yield call(fetchAllAdmins)
    yield put(setAdmins(response))
  } catch (err){
    console.error(err)
  }
}

export function* jtpWatcher(){
  yield takeLatest('users/getAdmins', getAdmins)
  yield takeLatest('users/getJtps', getJtps)
  yield takeLatest('users/getStudents', getStudents)
}
