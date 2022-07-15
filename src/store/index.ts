import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from 'redux';

export const reducer = combineReducers({
  // PUT REDUCERS HERE
});

export const store = configureStore({
  reducer,
  devTools: process.env.NODE_ENV !== "production",
});

export default store;