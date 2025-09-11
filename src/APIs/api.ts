import axios from "axios";
import { Show } from "../models/Show";
import { Cast } from "../models/cast";

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
        return response.data.map((item : any)=>{
           
            return item.person;
        });
    })
}
export const FetchShow = async (id : number)=>{
      const show = await axios.get(" https://api.tvmaze.com/shows/"+id)
      console.log("api",show.data)
      
       return show.data;
    
}