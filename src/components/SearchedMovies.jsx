import React from "react";

const SearchedMovies = ({ searchedMovies, IMAGE_PATH }) => {
  return (
    <div className="flex gap-[10px] mt-[20px] mx-[10px] overflow-x-auto overflow-y-hidden scrollbar-hide">
      {searchedMovies[0]
        ? searchedMovies?.map((movie) => (
            <div className="max-w-[300px] my-[20px]" key={movie.id}>
              <img
                src={
                  movie.poster_path !== null
                    ? IMAGE_PATH + movie.poster_path
                    : "https://www.macmillandictionary.com/external/slideshow/thumb/Grey_thumb.png"
                }
                alt=""
                className="object-cover rounded-[40px] 
                shadow-[rgba(149,157,165,0.8)_0px_8px_24px] max-w-[200px] min-h-[300px]
                hover:scale-[1.05] transition duration-100 ease-in-out cursor-pointer"
              />
              <p className="font-bold my-[10px] text-[18px]">{movie.title}</p>
              <div className="">
                {movie.genres
                  ? movie.genres.map((genre, ind) => (
                      <span className="text-[#A1A1A2]">
                        {(ind ? ", " : "") + genre.name}
                      </span>
                    ))
                  : null}
              </div>
            </div>
          ))
        : <h2 className="text-[20px]">No Results</h2> }
    </div>
  );
};

export default SearchedMovies;
