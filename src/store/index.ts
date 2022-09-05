import { configureStore } from "@reduxjs/toolkit"
import { all } from 'redux-saga/effects'
import createSagaMiddleware from 'redux-saga'
import { reducers } from './reducers'
import { jtpWatcher } from './users'

export function* rootSagas() {
  yield all([jtpWatcher()])
}

const sagaMiddleware = createSagaMiddleware()
const middlewares = [ sagaMiddleware ]

export const store = configureStore({
  reducer: reducers,
  middleware: middlewares,
  devTools: process.env.NODE_ENV !== "production",
})

sagaMiddleware.run(rootSagas)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store