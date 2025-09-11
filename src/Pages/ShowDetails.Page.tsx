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
import { loadCastDetails, loadShowDetails } from "../actions/shows";
import LoadingSpinner from "../Components/LoadingSpinner";
import { FetchCast } from "../APIs/api";
import { castLoadingSelector, castSelector } from "../selectors/cast";
import { notAvialable } from "../Components/ShowCard";

type ShowDetailPageProps = {
  shows: any
  loadShow: (id: number) => void
  loadCast: (id: number) => void
  cast: any
  castLoading: boolean
} & WithRouterProps;

const ShowDetailPage: FC<ShowDetailPageProps> = ({ params, castLoading, shows, loadShow, loadCast, cast }) => {
  
  useEffect(() => {
    loadShow(+params.show_id)
    loadCast(+params.show_id)
  }, [params])

  console.log(cast)
  const show: Show = shows[+params.show_id]

  if (!show) {
    return <LoadingSpinner />
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto p-6">
        
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Link 
            to='/' 
            className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-900 
                       hover:bg-gray-100 rounded-lg transition-colors duration-200"
          >
            <MdArrowBack className="text-xl" />
            <span>Back to Shows</span>
          </Link>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Left - Image */}
          <div className="lg:col-span-1">
            <img
              src={show.image?.original || notAvialable}
              alt={show.name}
              className="w-full rounded-lg shadow-lg object-cover"
            />
          </div>

          {/* Right - Details */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Title */}
            <h1 className="text-4xl font-bold text-gray-900">
              {show.name}
            </h1>

            {/* Genres */}
            <div className="flex flex-wrap gap-2">
              {show.genres.map((genre) => (
                <GenrePill key={genre} name={genre} />
              ))}
            </div>

            {/* Rating */}
            {show.rating && show.rating.average && (
              <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm border">
                <span className="font-semibold text-gray-700">Rating:</span>
                <div className="flex items-center gap-2">
                  <div className="flex items-center">
                    {[1, 2, 3, 4, 5].map((star) => {
                      const rating = show.rating.average / 2;
                      const isFilled = star <= Math.floor(rating);
                      const isHalfFilled = star === Math.ceil(rating) && rating % 1 !== 0;
                      
                      return (
                        <svg
                          key={star}
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                        >
                          <defs>
                            <linearGradient id={`half-${star}`}>
                              <stop offset="50%" stopColor="#fbbf24" />
                              <stop offset="50%" stopColor="#e5e7eb" />
                            </linearGradient>
                          </defs>
                          <path
                            d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                            fill={
                              isFilled 
                                ? "#fbbf24" 
                                : isHalfFilled 
                                  ? `url(#half-${star})` 
                                  : "#e5e7eb"
                            }
                            stroke="#fbbf24"
                            strokeWidth="1"
                          />
                        </svg>
                      );
                    })}
                  </div>
                  <span className="font-medium text-gray-700">
                    {show.rating.average}/10
                  </span>
                </div>
              </div>
            )}

            {/* Summary */}
            <div className="p-6 bg-white rounded-lg shadow-sm border">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Synopsis</h3>
              <div 
                dangerouslySetInnerHTML={{ __html: show.summary as string }} 
                className="text-gray-700 leading-relaxed"
              />
            </div>
          </div>
        </div>

        {/* Cast Section */}
        <div className="mt-12">
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Cast</h2>
            
            {castLoading ? (
              <div className="flex justify-center py-8">
                <LoadingSpinner />
              </div>
            ) : cast.length > 0 ? (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                {cast.map((item: any) => (
                  <CastCard 
                    key={item.id}
                    avatarLink={item.image?.medium || notAvialable}
                    name={item.name}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-8 text-gray-500">
                <p>Cast details not available right now!</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state: State) => {
  return {
    shows: showMapSelector(state),
    cast: castSelector(state),
    castLoading: castLoadingSelector(state)
  }
}

const mapDispatchToProps = {
  loadShow: loadShowDetails,
  loadCast: loadCastDetails,
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ShowDetailPage));