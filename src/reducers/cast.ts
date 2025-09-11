import { schema } from "normalizr";
import { CAST_DETAILS_LOADED } from "../actions/shows";
import { Cast } from "../models/cast";
import { myAction } from "./store";
export type castState = {
    cast: Cast[]
    loading:boolean
}
const initialState:castState = {
    cast:[],
    loading:true
}

export const castReducer = (state: castState = initialState, action: myAction) => {
    if (action.type == CAST_DETAILS_LOADED) {
        return {cast : action.payload , loading:false}
    }
    return state;

}