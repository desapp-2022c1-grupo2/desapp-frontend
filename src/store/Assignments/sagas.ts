import {
  call,
  put,
  takeLatest,
} from 'redux-saga/effects'
import { setAssignments, setSubmited } from './slice'
import { IAssignment, ISubmitedAssignment } from '@models'
import { getAllAssignments, getSubmitedAssignment } from '@services'

function* getAssignments() {
  try {
    const response: IAssignment[] = yield call(getAllAssignments)
    yield put(setAssignments(response))
  } catch (err){
    console.error(err)
  }
}

function* fetchSubmited() {
  try {
    const response: ISubmitedAssignment[] = yield call(getSubmitedAssignment)
    yield put(setSubmited(response))
  } catch (err){
    console.error(err)
  }
}

export function* assignmentsWatcher(){
  yield takeLatest('assignments/getAssignments', getAssignments)
  yield takeLatest('assignments/getSubmited', fetchSubmited)
}