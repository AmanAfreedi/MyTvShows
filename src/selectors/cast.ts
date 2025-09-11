import { State } from "../reducers/store";
export const castSelector = (state : State)=>{
    return state.cast.cast;
}
export const castLoadingSelector = (state : State)=>{
    return state.cast.loading;
}