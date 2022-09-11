import {
  call,
  put,
  takeLatest,
} from 'redux-saga/effects'
import { setAssignments } from './slice'
import { IAssignment } from '@models'
import { getAllAssignments } from '@services'

function* getAssignments() {
  try {
    const response: IAssignment[] = yield call(getAllAssignments)
    yield put(setAssignments(response))
  } catch (err){
    console.error(err)
  }
}

export function* assignmentsWatcher(){
  yield takeLatest('assignments/getAssignments', getAssignments)
}