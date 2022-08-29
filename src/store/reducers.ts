import { combineReducers } from 'redux'
import { authReducer } from './auth'
import { userReducer } from './users'

export const reducers = combineReducers({
  authReducer,
  userReducer,
})