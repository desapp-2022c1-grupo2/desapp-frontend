import {
  call,
  put,
  select,
  takeLatest,
} from 'redux-saga/effects'
import { RootState } from '@store'
import {
  IAdmin,
  IJtp,
  IStudent,
} from '@models'
import {
  getAllAdmins,
  fetchAllJtps,
  postJtp,
  getAllStudents,
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

function* createJtp() {
  try {
    /*
    const jtp: IJtp = yield select((state: RootState) => state.user.aux)
    yield call(postJtp, jtp)
    */
    const response: IJtp[] = yield call(fetchAllJtps)
    yield put(setJtps(response))
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
  yield takeLatest('users/createJtp', createJtp)
}
