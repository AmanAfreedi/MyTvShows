import { Tv, Search, Star, Play } from "lucide-react";

const UIcomponent = () => {
  return (
    <div className="flex flex-col items-center justify-center py-12 sm:py-20 px-4">
      {/* Main Illustration */}
      <div className="relative mb-6 sm:mb-8">
        {/* TV Screen */}
        <div className="w-48 h-32 sm:w-64 sm:h-40 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl sm:rounded-2xl border-2 sm:border-4 border-gray-700 relative shadow-2xl">
          {/* Screen */}
          <div className="absolute inset-2 sm:inset-4 bg-gradient-to-br from-blue-900 to-purple-900 rounded-lg overflow-hidden">
            {/* Floating Elements */}
            <div className="absolute top-2 sm:top-4 left-2 sm:left-4 w-4 sm:w-8 h-4 sm:h-8 bg-yellow-400 rounded-full opacity-80 animate-pulse"></div>
            <div className="absolute top-4 sm:top-8 right-3 sm:right-6 w-3 sm:w-6 h-3 sm:h-6 bg-pink-400 rounded-full opacity-60 animate-pulse [animation-delay:1s]"></div>
            <div className="absolute bottom-3 sm:bottom-6 left-4 sm:left-8 w-2 sm:w-4 h-2 sm:h-4 bg-green-400 rounded-full opacity-70 animate-pulse [animation-delay:2s]"></div>

            {/* Search Icon in Center */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="p-2 sm:p-4 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                <Search className="w-4 sm:w-8 h-4 sm:h-8 text-white" />
              </div>
            </div>
          </div>

          {/* TV Stand */}
          <div className="absolute -bottom-1 sm:-bottom-2 left-1/2 transform -translate-x-1/2 w-10 sm:w-16 h-4 sm:h-6 bg-gray-700 rounded-b-lg"></div>
          <div className="absolute -bottom-2 sm:-bottom-4 left-1/2 transform -translate-x-1/2 w-16 sm:w-24 h-1 sm:h-2 bg-gray-600 rounded-full"></div>
        </div>

        {/* Floating Icons */}
        <div className="absolute -top-2 sm:-top-4 -left-2 sm:-left-4 p-1 sm:p-2 bg-blue-500 rounded-full animate-bounce">
          <Tv className="w-3 sm:w-5 h-3 sm:h-5 text-white" />
        </div>
        <div className="absolute -top-1 sm:-top-2 -right-3 sm:-right-6 p-1 sm:p-2 bg-purple-500 rounded-full animate-bounce [animation-delay:0.5s]">
          <Star className="w-2 sm:w-4 h-2 sm:h-4 text-white" />
        </div>
        <div className="absolute -bottom-3 sm:-bottom-6 -right-1 sm:-right-2 p-1 sm:p-2 bg-pink-500 rounded-full animate-bounce [animation-delay:1s]">
          <Play className="w-2 sm:w-4 h-2 sm:h-4 text-white" />
        </div>
      </div>

      {/* Text Content */}
      <div className="text-center max-w-sm sm:max-w-md px-2">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2 sm:mb-3">
          Find Your Next Favorite Show
        </h2>
        <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">
          Search through thousands of TV shows and discover detailed information,
          ratings, and where to watch them.
        </p>

        {/* Search Suggestions */}
        <div className="flex flex-wrap justify-center gap-1 sm:gap-2">
          {[
            "Breaking Bad",
            "Game of Thrones",
            "The Office",
            "Stranger Things",
            "Friends",
          ].map((show, index) => (
            <span
              key={index}
              className="px-2 sm:px-3 py-1 bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs sm:text-sm rounded-full cursor-pointer transition-colors duration-200"
            >
              {show}
            </span>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="flex items-center justify-center space-x-8 mt-12 text-center">
        <div>
          <div className="text-2xl font-bold text-gray-800">50K+</div>
          <div className="text-sm text-gray-600">Shows</div>
        </div>
        <div className="w-px h-12 bg-gray-300"></div>
        <div>
          <div className="text-2xl font-bold text-gray-800">1k+</div>
          <div className="text-sm text-gray-600">Users</div>
        </div>
        <div className="w-px h-12 bg-gray-300"></div>
        <div>
          <div className="text-2xl font-bold text-gray-800">24/7</div>
          <div className="text-sm text-gray-600">Available</div>
        </div>
      </div>
    </div>
  );
};

export default UIcomponent;
