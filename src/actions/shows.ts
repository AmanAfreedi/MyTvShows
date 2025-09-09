
import { Show } from "../models/Show";

export const SHOWS_LOADED = "ShowLoadedAction";
export const ShowLoadedAction = (shows : Show[] )=>{
    return{
        type:SHOWS_LOADED,
        payload:{shows }
    }
}
 export const QUERY_CHANGE_ACTION = "QueryChangeAction";
 export const queryChangeAction = (query : string)=>{
    return {
        type:QUERY_CHANGE_ACTION,
        payload : {query : query}
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