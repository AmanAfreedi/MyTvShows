import { castDetailsLoaded, LOAD_CAST_DETAILS, LOAD_SHOW_DETAILS, QUERY_CHANGE_ACTION,SHOWS_LOADED } from "../actions/shows";
import { FetchCast, FetchShow, FetchShows } from "../APIs/api";

import { Show } from "../models/Show";
import { myAction } from "../reducers/store";
import { call, debounce, put, takeEvery, } from 'redux-saga/effects'
import { queryChangeAction, showDetailsLoaded, ShowLoadedAction } from "../slices/shows";
export function* rootSaga(){
    yield debounce(100,queryChangeAction, getShows)
    yield takeEvery(LOAD_SHOW_DETAILS,getShow)
    yield takeEvery(LOAD_CAST_DETAILS,getCast)
}


export function* getShows(action : myAction): Generator{
    const shows = yield call(FetchShows,action.payload)
    yield put(ShowLoadedAction(shows as Show[]))
}
export function* getShow(action : any): Generator{
    const show = yield call(FetchShow,action.payload as number)
    yield put(showDetailsLoaded(show as Show));
}
export function* getCast( action : any):Generator{
    const cast = yield call(FetchCast,action.payload as number);
    yield put (castDetailsLoaded(cast));
}
