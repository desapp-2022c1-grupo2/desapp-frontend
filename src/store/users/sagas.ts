import {
  call,
  put,
  select,
  takeLatest,
} from 'redux-saga/effects'
import { setJtps, setStudents, onFinish } from './slice'
import { IJtp, IStudent } from '@models'
import {
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

export function* jtpWatcher(){
  yield takeLatest('users/getJtps', getJtps)
  yield takeLatest('users/getStudents', getStudents)
  yield takeLatest('users/createJtp', postJtp)
  yield takeLatest('users/updateJtp', putJtp)
  yield takeLatest('users/deleteJtp', deleteOneJtp)
}
