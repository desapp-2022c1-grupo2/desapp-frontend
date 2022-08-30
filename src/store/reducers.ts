import { combineReducers } from 'redux'
import { auth } from './auth'
import { user } from './users'

export const reducers = combineReducers({
  auth,
  user,
})