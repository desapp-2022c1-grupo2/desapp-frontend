import {
  call,
  put,
  takeLatest,
} from 'redux-saga/effects'
import { setAssignments, setSubmitted } from '@store'
import { IAssignment, ISubmitted } from '@models'
import { getAllAssignments, getSubmittedAssignments } from '@services'

function* getAssignments() {
  try {
    const response: IAssignment[] = yield call(getAllAssignments)
    yield put(setAssignments(response))
  } catch (err){
    console.error(err)
  }
}

function* fetchSubmitted() {
  try {
    const response: ISubmitted[] = yield call(getSubmittedAssignments)
    yield put(setSubmitted(response))
  } catch (err){
    console.error(err)
  }
}

export function* assignmentsWatcher(){
  yield takeLatest('assignments/getAssignments', getAssignments)
  yield takeLatest('assignments/getSubmitted', fetchSubmitted)
}