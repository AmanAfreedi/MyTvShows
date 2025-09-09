import axios from "axios";
import { Show } from "../models/Show";

export const FetchShows =  (query : string)=> {
    return axios.get<{show:Show}[]>("https://api.tvmaze.com/search/shows?q="+ query).then((response)=>{
        return response.data.map((item)=>{
            console.log(query)
            return item.show;
        });
    })
}
export const FetchCast = (id : number)=>{
    return axios.get(" https://api.tvmaze.com/shows/"+id+"/cast").then((response)=>{
        return response.data;
    })
}
export const FetchShow = (id : number)=>{
    return axios.get(" https://api.tvmaze.com/shows/"+id).then((response)=>{
        return response.data;
    })
}