import {
  call,
  put,
  select,
  takeLatest,
} from 'redux-saga/effects'
import {
  setAdmins,
  setJtps,
  setStudents,
  onFinish,
} from './slice'
import { IAdmin, IJtp, IStudent } from '@models'
import {
  getAllAdmins,
  getAllJtps,
  createJtp,
  deleteJtp,
  getAllStudents,
  updateJtp,
} from '@services'
import { RootState } from '@store'

function* getJtps() {
  try {
    const response: IJtp[] = yield call(getAllJtps)
    yield put(setJtps(response))
  } catch (err){
    console.error(err)
  }
}

function* postJtp() {
  try {
    const jtp: IJtp = yield select((state: RootState) => state.user.aux)
    yield call(createJtp, jtp)
    const response: IJtp[] = yield call(getAllJtps)
    yield put(setJtps(response))
    yield put(onFinish())
  } catch (err){
    console.error(err)
  }
}

function* putJtp() {
  try {
    const jtp: IJtp = yield select((state: RootState) => state.user.aux)
    yield call(updateJtp, jtp)
    yield put(onFinish())
  } catch (err){
    console.error(err)
  }
}
 
function* deleteOneJtp() {
  try {
    const jtp: IJtp = yield select((state: RootState) => state.user.aux)
    yield call(deleteJtp, jtp)
    yield put(onFinish())
  } catch (err){
    console.error(err)
  }
}

function* getStudents() {
  try {
    const response: IStudent[] = yield call(getAllStudents)
    yield put(setStudents(response))
  } catch (err){
    console.error(err)
  }
}

function* getAdmins() {
  try {
    const response: IAdmin[] = yield call(getAllAdmins)
    console.log(response)
    yield put(setAdmins(response))
  } catch (err){
    console.error(err)
  }
}

export function* jtpWatcher(){
  yield takeLatest('users/getAdmins', getAdmins)
  yield takeLatest('users/getJtps', getJtps)
  yield takeLatest('users/getStudents', getStudents)
  yield takeLatest('users/createJtp', postJtp)
  yield takeLatest('users/updateJtp', putJtp)
  yield takeLatest('users/deleteJtp', deleteOneJtp)
}
