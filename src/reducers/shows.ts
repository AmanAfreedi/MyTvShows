import { Action, AnyAction } from "redux"
import { Show } from "../models/Show"
import { QUERY_CHANGE_ACTION, SHOWS_DETAILS_LOADED, SHOWS_LOADED } from "../actions/shows"
import { myAction } from "./store"
import { normalize, schema } from "normalizr"
import { produce } from "immer"
export type showState = {
    shows : { [id : number] : Show }
    query_show : {[query:string]:number[]}
    query : string,
    loading:boolean
}
const initialState:showState = {
    shows : {},
    query_show:{},
    query : "",
    loading : false
}
export const showReducer = (state :showState= initialState , action : myAction)=>{
        if(action.type==SHOWS_LOADED){
           const shows = action.payload as Show[];
           const showSchema = new schema.Entity("shows")
           const NormalizedData = normalize(shows , [showSchema])
           return {...state,loading:false, shows : {...state.shows ,...NormalizedData.entities.shows},query_show :{...state.query_show,[state.query]:[...NormalizedData.result]}}
        }
        if(action.type==QUERY_CHANGE_ACTION){
            return {...state , query : action.payload?.query ?? "", loading :true}
        }
        if(action.type==SHOWS_DETAILS_LOADED){
            const show:any = action.payload 
            return produce(state,(draft)=>{
              draft.shows[show.id]=show;
            })
        }
        return state;
}