import {
  call,
  put,
  takeLatest,
} from 'redux-saga/effects'

import { 
  IAssignment,
  IEvaluation,
  ISubmitted,
} from '@models'

import { 
  getAllAssignments,
  getSubmittedAssignments,
  fetchEvaluation,
} from '@services'

import { 
  setAssignments,
  setSubmitted,
  setEvaluations,
} from './slice'


function* getAssignments() {
  try {
    const response: IAssignment[] = yield call(getAllAssignments)
    yield put(setAssignments(response))
  } catch (err){
    console.error(err)
  }
}

function* getSubmitted() {
  try {
    const response: ISubmitted[] = yield call(getSubmittedAssignments)
    yield put(setSubmitted(response))
  } catch (err){
    console.error(err)
  }
}

function* getEvaluations() {
  try {
    const response: IEvaluation[] = yield call(fetchEvaluation)
    yield put(setEvaluations(response))
  } catch (err) {
    console.error(err)
  }
}

export function* assignmentsWatcher(){
  yield takeLatest('assignments/getAssignments', getAssignments)
  yield takeLatest('assignments/getSubmitted', getSubmitted)
  yield takeLatest('assignments/getEvaluations', getEvaluations)
}