import {
  call,
  put,
  select,
  takeLatest,
} from 'redux-saga/effects'

import { 
  IAssignment,
  IEvaluation,
  IJtp,
  ISubmitted,
} from '@models'

import { 
  fetchAllAssignments,
  getSubmittedAssignments,
  fetchEvaluation,
} from '@services'

import { 
  setAssignments,
  setSubmitted,
  setEvaluations,
} from './slice'
import { RootState } from '..'

function* getAssignments() {
  try {
    const response: IAssignment[] = yield call(fetchAllAssignments)
    yield put(setAssignments(response))
  } catch (err){
    console.error(err)
  }
}

function* getAssignmentsByJtp() {
  try {
    const id: number = yield select((state: RootState) => state.auth.user?.id)
    const response: IAssignment[] = yield call(fetchAllAssignments)
    const assignments = response.filter(x => x.jtp?.id == id)
    yield put(setAssignments(assignments))
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

function* getSubmittedByJtp() {
  try {
    const id: number = yield select((state: RootState) => state.auth.user?.id)
    const response: ISubmitted[] = yield call(getSubmittedAssignments)
    const submitted = response.filter(x => x.jtp?.id == id)
    yield put(setSubmitted(submitted))
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

function* getEvaluationsByJtp() {
  try {
    const id: number = yield select((state: RootState) => state.auth.user?.id)
    const response: IEvaluation[] = yield call(fetchEvaluation)
    const evaluations = response.filter(x => x.jtp?.id == id)
    yield put(setEvaluations(evaluations))
  } catch (err) {
    console.error(err)
  }
}

export function* assignmentsWatcher(){
  yield takeLatest('assignments/getAssignments', getAssignments)
  yield takeLatest('assignments/getAssignmentsByJtp', getAssignmentsByJtp)
  yield takeLatest('assignments/getSubmitted', getSubmitted)
  yield takeLatest('assignments/getSubmittedByJtp', getSubmittedByJtp)
  yield takeLatest('assignments/getEvaluations', getEvaluations)
  yield takeLatest('assignments/getEvaluationsByJtp', getEvaluationsByJtp)
}