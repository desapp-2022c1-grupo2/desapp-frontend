import { configureStore } from "@reduxjs/toolkit"
import { combineReducers } from 'redux'
import auth from './auth'

export const reducer = combineReducers({
  auth,
});

export const store = configureStore({
  reducer,
  devTools: process.env.NODE_ENV !== "production",
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store