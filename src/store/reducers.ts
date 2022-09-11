import { combineReducers } from 'redux'
import { auth } from './auth'
import { assignments } from './Assignments'
import { courses } from './courses'
import { user } from './users'

export const reducers = combineReducers({
  assignments,
  auth,
  courses,
  user,
})