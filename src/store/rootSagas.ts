import { all } from 'redux-saga/effects'
import { jtpWatcher } from './users'
import { courseWatcher } from './courses'
import { assignmentsWatcher } from './Assignments'
import { authWatcher } from './auth'

export function* rootSagas() {
  yield all([
    authWatcher(),
    jtpWatcher(),
    courseWatcher(),
    assignmentsWatcher(),
  ])
}