
import { Cast } from "../models/cast";
import { Show } from "../models/Show";

export const SHOWS_LOADED = "ShowLoadedAction";
export const ShowLoadedAction = (shows : Show[] )=>{
    return{
        type:SHOWS_LOADED,
        payload:shows
    }
}
 export const QUERY_CHANGE_ACTION = "QueryChangeAction";
 export const queryChangeAction = (query : string)=>{
    return {
        type:QUERY_CHANGE_ACTION,
        payload : query
    }
 }


export const SHOWS_DETAILS_LOADED= "SHOWS_DETAILS_LOADED";
export const showDetailsLoaded = (show : Show)=>{
    return {
        type:SHOWS_DETAILS_LOADED,
        payload : show
    }
 }
export const LOAD_SHOW_DETAILS= "LOAD_SHOW_DETAILS";
export const loadShowDetails = (showId : number)=>{
    return {
        type:LOAD_SHOW_DETAILS,
        payload : showId,
    }
 }
 export const LOAD_CAST_DETAILS="LOAD_CAST_DETAILS"
 export const loadCastDetails = (showId : number)=>{
    return {
        type : LOAD_CAST_DETAILS,
        payload : showId,
    }
}
export const CAST_DETAILS_LOADED="CAST_DETAILS_LOADED";
export const castDetailsLoaded = (cast : any)=>{
    return {
        type : CAST_DETAILS_LOADED,
        payload : cast,
    }
}