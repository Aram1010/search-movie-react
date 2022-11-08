import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import MovieDescription from "../components/MovieDescription";

const IMAGE_PATH = "https://www.themoviedb.org/t/p/w780";

const Movie = () => {
  const location = useLocation();

  const [movie, setMovie] = useState(null);

  useEffect(() => {
    setMovie(location.state);
  }, [location]);

  console.log(movie);

  return (
    <div className="text-[#ffff] h-[100%]">
      <div
        style={
          movie
            ? {
                backgroundImage: `url(${IMAGE_PATH + movie.poster_path})`,
              }
            : null
        }
        className="fixed top-0 left-0 w-[100%] h-[100vh] smax:bg-cover smax:bg-no-repeat bg-center -z-50"
      ></div>
      {movie ? <MovieDescription movie={movie} /> : null}
    </div>
  );
};

export default Movie;
