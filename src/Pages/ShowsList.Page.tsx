import {  FC, useEffect, useState } from "react";
import SearchBar from "../Components/SearchBar";
import ShowCard from "../Components/ShowCard";

import { Show } from "../models/Show";
import { queryChangeAction, ShowLoadedAction } from "../actions/shows";
import { connect } from "react-redux";
import { State } from "../reducers/store";
import { LoadingSelector, querySelector, showsSelector } from "../selectors/shows";
import LoadingSpinner from "../Components/LoadingSpinner";
import UIcomponent from "../Components/UIcomponent";

type ShowListPageProps = {
  showLoaded : (show:Show[])=>(void);
  shows : Show[]
  queryChange : (query : string)=>(void),
  query : string,
  loading:boolean,
}
const ShowListPage : FC<ShowListPageProps> =({shows,queryChange,query,loading})=> {
  
 console.log(shows)
  
  return (
    <div className="mt-2">
      <div className=" flex items-center justify-center">
        <div className="w-[90%] mt-10"><SearchBar value={query} onChange={(event)=>{queryChange(event.target.value)}} /></div>
        {loading && <LoadingSpinner className="mt-10 text-2xl"/>}
      </div>
      {query.length==0 && <UIcomponent/>}
    
      {shows && <div className="flex flex-wrap justify-center">
        {shows.map((show)=>{
          return <ShowCard key={show.id} show={show}/>
        })}
      </div>}
    </div>
  );
}
const mapDispatchToProps = {
  showLoaded : ShowLoadedAction,
  queryChange :  queryChangeAction,
}
const mapStateToProps=(state : State)=>{
  return {
    shows:showsSelector(state),
    query : querySelector(state),
    loading : LoadingSelector(state)
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(ShowListPage);
