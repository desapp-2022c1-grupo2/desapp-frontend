import {
  call,
  put,
  select,
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
import { RootState } from '..'

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

function* getStudentsByCourse() {
  try {
    const jtp: IJtp = yield select((state: RootState) => state.auth.user)
    const response: IStudent[] = yield call(fetchAllStudents)
    const students = response.filter(x => x.courses.current?.id == jtp.course?.id)
    yield put(setStudents(students))
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
  yield takeLatest('users/getStudentsByCourse', getStudentsByCourse)
}
