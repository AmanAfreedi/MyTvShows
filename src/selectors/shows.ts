import { createSelector } from "reselect";
import { State } from "../reducers/store";


const showStateSelector = (state : State)=>{
    return state.shows;
}

export const querySelector = createSelector(showStateSelector , (state)=>state.query)
export const showMapSelector = createSelector(showStateSelector,(state)=> state.shows)
export const queryMapSelector = createSelector(showStateSelector,(state)=>state.query_show);
export const showsSelector = createSelector(
  [queryMapSelector, querySelector, showMapSelector],
  (queryMap, query, showMap) => queryMap[query]?.map((id) => showMap[id] ) 
);
export const LoadingSelector = createSelector(showStateSelector,(state)=>state.loading)

export const showSelector = createSelector(showStateSelector , (state)=>state.shows)

