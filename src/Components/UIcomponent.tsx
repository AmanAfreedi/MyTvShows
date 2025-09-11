const UIcomponent = () => {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4">
      
      {/* Simple Icon */}
      <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center mb-6 shadow-lg">
        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>

      {/* Simple Text */}
      <div className="text-center max-w-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-3">
          Search for TV Shows
        </h2>
        <p className="text-gray-600 mb-6">
          Find detailed information about your favorite shows including ratings, cast, and summaries.
        </p>

        {/* Popular Shows */}
        <div className="flex flex-wrap justify-center gap-2">
          {[
            "Breaking Bad",
            "Game of Thrones", 
            "The Office",
            "Stranger Things"
          ].map((show, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-gray-200 transition-colors cursor-pointer"
            >
              {show}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UIcomponent;