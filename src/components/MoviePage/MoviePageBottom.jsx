import React from "react";
import { DataLayerValue } from "../../context/DataLayer";

const MovieDescription = ({ movie }) => {
  const [{ windowSize }] = DataLayerValue();

  return (
    <>
      {windowSize.innerHeight > 630 ? (
        <div
          className="smin:hidden absolute bottom-0 smax:left-[50%] smax:translate-x-[-50%] 
          w-[90%] smin:max-w-[800px] max-w-[800px] h-[40%] min-h-[300px] bg-[rgba(236,240,243,.2)] 
          shadow-[rgba(149,157,165,0.2)_0px_8px_24px] backdrop-blur-[5px] rounded-tr-[50px] 
          smax:rounded-tl-[50px] p-[20px] pb-[30px] "
        >
          <div className="grid grid-cols-2 grid-rows-2 gap-[30px] h-[90%] absolute">
            <span>
              <h2 className="smin:text-[20px]">Category</h2>
              <ul className="smin:text-[16px] text-[15px]">
                {movie.genres
                  ? movie.genres.map((genre, ind) => (
                      <span>{(ind ? ", " : "") + genre.name}</span>
                    ))
                  : null}
              </ul>
            </span>
            <span>
              <h2 className="smin:text-[20px]">Storyline</h2>
              <p className="max-h-[100px] max-w-[250px] text-[15px] smin:text-[16px] overflow-y-scroll scrollbar-hide">
                {movie.overview}
              </p>
            </span>
            <span>
              <h2 className="smin:text-[20px]">Starring</h2>
              <ul className="max-h-[100px] smin:text-[16px] text-[15px] overflow-y-scroll scrollbar-hide">
                {movie.credits
                  ? movie.credits.cast
                      .slice(0, 6)
                      .map((cast, ind) => (
                        <span>{(ind ? ", " : "") + cast.name}</span>
                      ))
                  : null}
                <p>...</p>
              </ul>
            </span>
          </div>
        </div>
      ) : (
        null
      )}
    </>
  );
};

export default MovieDescription;
