import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Show } from '../models/Show'
import { State } from '../reducers/store'
import { normalize, schema } from 'normalizr'

export type showState = {
    shows: { [id: number]: Show }
    query_show: { [query: string]: number[] }
    query: string,
    loading: boolean
}
const initialState: showState = {
    shows: {},
    query_show: {},
    query: "",
    loading: false
}

const showsSlice = createSlice({
    name: "shows",
    initialState,
    reducers: {
        ShowLoaded,
        queryChange,
        showDetails,
    }
})
function ShowLoaded(state: showState, action: PayloadAction<Show[]>) {
    const shows = action.payload;
    const showSchema = new schema.Entity("shows")
    const NormalizedData = normalize(shows, [showSchema])
    state.loading = false;
    state.query_show[state.query]=NormalizedData.result;
    state.shows={...state.shows,...NormalizedData.entities.shows}
   
}
function queryChange (state:showState , action : PayloadAction<string>){
    state.query=action.payload;
    state.loading;true;
}
function showDetails(state : showState , action : PayloadAction<Show>){
    const show = action.payload
    state.shows[show.id]=show;
}
export const {ShowLoaded:ShowLoadedAction , queryChange:queryChangeAction , showDetails:showDetailsLoaded}=showsSlice.actions;
const showReducer = showsSlice.reducer
export default showReducer;