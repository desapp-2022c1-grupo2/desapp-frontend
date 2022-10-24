import { combineReducers } from 'redux'
import { auth } from './auth'
import { assignments } from './assignments'
import { courses } from './courses'
import { user } from './users'
import { misc } from './misc'
import { modals } from './modals'

export const reducers = combineReducers({
  assignments,
  auth,
  courses,
  misc,
  modals,
  user,
})