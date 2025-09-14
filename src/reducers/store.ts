import createSagaMiddleware from "redux-saga";
import { configureStore } from "@reduxjs/toolkit";
import { rootSaga } from "../sagas/shows";
import showReducer, { showState } from "../slices/shows";
import castReducer, { castState } from "../slices/cast";
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
