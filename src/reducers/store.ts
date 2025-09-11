import { applyMiddleware, combineReducers, createStore } from "redux"
import { Show } from "../models/Show"

import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "@redux-devtools/extension";
import { call, debounce, put, takeEvery, } from 'redux-saga/effects'

import { configureStore } from "@reduxjs/toolkit";
import { Cast } from "../models/cast";
import { castReducer, castState } from "./cast";
import { LOAD_CAST_DETAILS, LOAD_SHOW_DETAILS, QUERY_CHANGE_ACTION } from "../actions/shows";
import { getCast, getShow, getShows, rootSaga } from "../sagas/shows";
import showReducer, { showState } from "../slices/shows";


 
export type myAction ={
    type:string,
    payload?: any
}
export type State = {
    shows : showState;
    cast : castState;
}


const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
  reducer: {
    shows: showReducer,
    cast : castReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware), // disable thunk, add saga
  
});
sagaMiddleware.run(rootSaga)
