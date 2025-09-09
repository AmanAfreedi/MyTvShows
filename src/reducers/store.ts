import { applyMiddleware, combineReducers, createStore } from "redux"
import { Show } from "../models/Show"
import { showReducer, showState } from "./shows";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "@redux-devtools/extension";

import { rootSaga } from "../sagas/shows";


 
export type myAction ={
    type:string,
    payload?: {shows: Show[],query : string}
}
export type State = {
    shows : showState;
    
}

const sagaMiddleware = createSagaMiddleware()
const reducers = combineReducers({
    shows : showReducer
}   
)
export const store = createStore(
  reducers,
  composeWithDevTools(
    applyMiddleware(sagaMiddleware)
    // add other enhancers here if needed
  )
);
sagaMiddleware.run(rootSaga)