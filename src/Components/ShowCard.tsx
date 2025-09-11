import { FC } from "react";
import { Link } from "react-router-dom";
import { Show } from "../models/Show";

type props = {
  show: Show,
}

export const notAvialable = "https://thumbs.dreamstime.com/z/grunge-textured-not-available-stamp-seal-not-available-stamp-seal-watermark-distress-style-blue-vector-rubber-print-not-138792800.jpg?ct=jpeg"

const ShowCard: FC<props> = ({ show }) => {
  return (
    <div className="group w-[320px] mx-1 bg-white rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 overflow-hidden border border-gray-100">
      {/* Image Container with Overlay */}
      <div className="relative overflow-hidden">
        <img
          src={show.image?.medium || notAvialable}
          alt=""
          className="object-cover object-center w-full h-72 group-hover:scale-110 transition-transform duration-500"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Floating Badge */}
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-gray-700 shadow-lg">
          TV Show
        </div>
      </div>

      {/* Content Container */}
      <div className="flex flex-col justify-between p-6 space-y-6 bg-gradient-to-b from-white to-gray-50/50">
        <div className="space-y-3 max-h-[30vh] overflow-hidden">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 line-clamp-2 group-hover:text-blue-600 transition-colors duration-200">
            {show.name}
          </h2>
          
          {/* Rating Stars */}
          {show.rating && show.rating.average && (
            <div className="flex items-center gap-2">
              <div className="flex items-center">
                {[1, 2, 3, 4, 5].map((star) => {
                  const rating = show.rating.average / 2; // Convert from 10-point to 5-point scale
                  const isFilled = star <= Math.floor(rating);
                  const isHalfFilled = star === Math.ceil(rating) && rating % 1 !== 0;
                  
                  return (
                    <svg
                      key={star}
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      className="transition-colors duration-200"
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
              <span className="text-sm font-medium text-gray-600">
                {show.rating.average}/10
              </span>
            </div>
          )}
          
          {/* Summary with fade effect */}
          <div className="relative">
            <p 
              dangerouslySetInnerHTML={{ __html: show.summary as string }} 
              className="text-gray-600 text-sm leading-relaxed line-clamp-4"
            />
            <div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-gray-50/50 to-transparent pointer-events-none" />
          </div>
        </div>

        {/* Enhanced Button */}
        <Link
          to={"/show/" + show.id}
          className="group/btn relative inline-flex items-center justify-center w-full px-6 py-3.5 
                     font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 
                     rounded-lg shadow-md hover:shadow-xl transform transition-all duration-300 
                     hover:scale-105 hover:from-blue-700 hover:to-purple-700 
                     focus:outline-none focus:ring-4 focus:ring-blue-300/50
                     active:scale-95 overflow-hidden"
        >
          {/* Animated background */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 
                          opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
          
          {/* Button content */}
          <span className="relative z-10 flex items-center gap-2 tracking-wide">
            View Details
            <svg 
              width="16" 
              height="16" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              className="transition-transform duration-300 group-hover/btn:translate-x-1"
            >
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </span>

          {/* Shine effect */}
          <div className="absolute inset-0 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300">
            <div className="absolute top-0 -left-4 w-6 h-full bg-white/20 transform 
                            skew-x-12 group-hover/btn:animate-pulse" />
          </div>
        </Link>
      </div>
    </div>
  );
}

export default ShowCard;