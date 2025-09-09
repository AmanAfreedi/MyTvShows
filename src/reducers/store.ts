import { applyMiddleware, combineReducers, createStore } from "redux"
import { Show } from "../models/Show"
import { showReducer, showState } from "./shows";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "@redux-devtools/extension";

import { rootSaga } from "../sagas/shows";
import { configureStore } from "@reduxjs/toolkit";


 
export type myAction ={
    type:string,
    payload?: {shows?: Show[],query? : string, show? : Show}
}
export type State = {
    shows : showState;
    
}

const sagaMiddleware = createSagaMiddleware()
const reducers = combineReducers({
    shows : showReducer
}   
)
export const store = configureStore({
  reducer: {
    shows: showReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware), // disable thunk, add saga
  devTools: true, // already true by default
});
sagaMiddleware.run(rootSaga)
