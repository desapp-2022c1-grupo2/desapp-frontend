import { all } from 'redux-saga/effects'
import { jtpWatcher } from './users'
import { courseWatcher } from './courses'
import { assignmentsWatcher } from './Assignments'

export function* rootSagas() {
  yield all([
    jtpWatcher(),
    courseWatcher(),
    assignmentsWatcher(),
  ])
}