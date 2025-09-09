import { FC, useEffect, useState } from "react";
import CastCard from "../Components/CastCard";
import GenrePill from "../Components/GenrePill";
import withRouter, { WithRouterProps } from "../hocs/withRouter";
import { MdArrowBack } from "react-icons/md";
import { Link } from "react-router-dom";
import { showMapSelector, showsSelector } from "../selectors/shows";
import { State } from "../reducers/store";
import { Show } from "../models/Show";
import { connect } from "react-redux";
import { loadShowDetails } from "../actions/shows";
import LoadingSpinner from "../Components/LoadingSpinner";

type ShowDetailPageProps ={shows :any
  loadShow : (id : number)=>void
} & WithRouterProps;

const ShowDetailPage: FC<ShowDetailPageProps> = ({ params , shows,loadShow}) => {
  
  
  useEffect(()=>{
    loadShow(+params.show_id)
  },[params])
  
  console.log(shows)
  const show : Show= shows[+params.show_id]
  console.log(show)
  if(!show){
    return <LoadingSpinner/>
  }
  
  return (
    <div className="mt-2">
      <Link to='/'><MdArrowBack className="text-2xl"/></Link>
      <h2 className="text-4xl font-semibold tracking-wide">{show.name}</h2>
      <div className="flex space-x-3 my-2 bg-gray-300 p-2 rounded-sm">
        {show.genres.map((genre)=>{
          return <GenrePill key={genre} name={genre}/>
        })}
      </div>
      <div className="mt-2 flex">
        <img
          src={show.image.medium}
          alt=""
          className="object-contain object-center w-full  rounded-t-md h-72"
        />
        <div className="ml-2">
          <p dangerouslySetInnerHTML={{ __html: show.summary as string }} />

          <p className="mt-2 text-lg font-bold border border-gray-700 rounded-md px-2 py-1 max-w-max">
            Rating: <span className="text-gray-700">{show.rating.average || "null"}/10</span>
          </p>
        </div>
      </div>

      <div className="mt-2">
        <h4 className="text-2xl font-semibold tracking-wide">Cast</h4>
        <div className="flex flex-wrap">
          <CastCard
            avatarLink="https://static.tvmaze.com/uploads/images/medium_portrait/218/545468.jpg"
            name="Henry Cavill"
          />
          <CastCard
            avatarLink="https://static.tvmaze.com/uploads/images/medium_portrait/218/545472.jpg"
            name="Freya Allan"
          />
          <CastCard
            avatarLink="https://static.tvmaze.com/uploads/images/medium_portrait/218/545470.jpg"
            name="Anya Chalotra"
          />
          <CastCard
            avatarLink="https://static.tvmaze.com/uploads/images/medium_portrait/232/581040.jpg"
            name="Mimi Ndiweni"
          />
          <CastCard
            avatarLink="https://static.tvmaze.com/uploads/images/medium_portrait/218/545468.jpg"
            name="Henry Cavill"
          />
          <CastCard
            avatarLink="https://static.tvmaze.com/uploads/images/medium_portrait/218/545472.jpg"
            name="Freya Allan"
          />
          <CastCard
            avatarLink="https://static.tvmaze.com/uploads/images/medium_portrait/218/545470.jpg"
            name="Anya Chalotra"
          />
          <CastCard
            avatarLink="https://static.tvmaze.com/uploads/images/medium_portrait/232/581040.jpg"
            name="Mimi Ndiweni"
          />
          <CastCard
            avatarLink="https://static.tvmaze.com/uploads/images/medium_portrait/218/545468.jpg"
            name="Henry Cavill"
          />
          <CastCard
            avatarLink="https://static.tvmaze.com/uploads/images/medium_portrait/218/545472.jpg"
            name="Freya Allan"
          />
          <CastCard
            avatarLink="https://static.tvmaze.com/uploads/images/medium_portrait/218/545470.jpg"
            name="Anya Chalotra"
          />
          <CastCard
            avatarLink="https://static.tvmaze.com/uploads/images/medium_portrait/232/581040.jpg"
            name="Mimi Ndiweni"
          />
        </div>
      </div>
    </div>
  );
};
const mapStateToProps=(state : State)=>{
  return{
  shows: showMapSelector(state),
  }
}
const mapDispatchToProps= {
  loadShow : loadShowDetails
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(ShowDetailPage));
