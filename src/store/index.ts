import createSagaMiddleware from 'redux-saga'
import { configureStore } from "@reduxjs/toolkit"
import { reducers } from './reducers'
import { rootSagas } from './rootSagas'

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
export * from './selectors'
export * from './actions'

export default store