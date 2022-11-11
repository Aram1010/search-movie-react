import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import MoviePageBottom from "../components/MoviePage/MoviePageBottom";
import MoviePageTop from "../components/MoviePage/MoviePageTop";

const Movie = () => {
  const location = useLocation();

  const [movie, setMovie] = useState(null);

  useEffect(() => {
    setMovie(location.state);
  }, [location]);

  return (
    <div className="text-[#ffff] h-[100%]">
      {movie ? (
        <>
          <MoviePageTop movie={movie} />
          <MoviePageBottom movie={movie} />
        </>
      ) : null}
      <div
        className="absolute bottom-0 left-0 w-[100%] h-[10%] "
        style={{
          backgroundImage:
            "linear-gradient(180deg,transparent,rgba(25, 25, 50, 0.61),#1B2230)",
        }}
      ></div>
    </div>
  );
};

export default Movie;
