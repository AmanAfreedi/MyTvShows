import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Cast } from "../models/cast"
import { castDetailsLoaded } from "../actions/shows"

export type castState = {
    cast: Cast[]
    loading:boolean
}
const initialState:castState = {
    cast:[],
    loading:true
}
const castSilice = createSlice({
    name:"cast",
    initialState,
    reducers:{
        castLoaded,
    }
})
function castLoaded ( state : castState , action : PayloadAction<any>){
    state.cast=action.payload;
    state.loading=false;
}
export const {castLoaded: castLoadedAction}=castSilice.actions;
const castReducer = castSilice.reducer;
export default  castReducer