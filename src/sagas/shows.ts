import { LOAD_SHOW_DETAILS, QUERY_CHANGE_ACTION, showDetailsLoaded, ShowLoadedAction, SHOWS_LOADED } from "../actions/shows";
import { FetchShow, FetchShows } from "../APIs/api";
import { myAction } from "../reducers/store";
import { call, debounce, put, takeEvery, takeLatest, takeLeading, takeMaybe } from 'redux-saga/effects'
export function* rootSaga(){
    yield debounce(100,QUERY_CHANGE_ACTION, getShows)
    yield takeEvery(LOAD_SHOW_DETAILS,getShow)
}

function* getShows(action : myAction): Generator{
    const shows = yield call(FetchShows,action.payload?.query as string)
    yield put(ShowLoadedAction(shows))
}
function* getShow(action : any): Generator{
    const show = yield call(FetchShow,action.payload as number)
    yield put(showDetailsLoaded(show));
}