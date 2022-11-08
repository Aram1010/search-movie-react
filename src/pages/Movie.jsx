import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import MovieDescription from "../components/MovieDescription";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const IMAGE_PATH = "https://www.themoviedb.org/t/p/w780";

const Movie = () => {
  const location = useLocation();

  const [movie, setMovie] = useState(null);

  useEffect(() => {
    setMovie(location.state);
  }, [location]);

  const mToh = (total_minutes) => {
    const hours = Math.floor(total_minutes / 60);
    const minutes = total_minutes % 60;

    return <p className="ml-[20px]">{`${hours}h ${minutes}m`}</p>;
  };

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
      <div className="mx-[20px]">
        <h2
          style={{ fontSize: "clamp(10px , 8vw , 50px)" }}
          className="text-700 max-w-[500px] mt-[30px]"
        >
          {movie ? movie.title : null}
        </h2>
        <div className="flex items-center mt-[10px]">
          <FontAwesomeIcon className="text-[#F2BB2E]" icon={faStar} />
          <p className="ml-[10px]">
            {movie
              ? `${Math.round(movie.vote_average * 100) / 100} | ${
                  movie.vote_count
                }`
              : null}
          </p>
          {movie ? mToh(movie.runtime) : null}
        </div>
      </div>
      {movie ? <MovieDescription movie={movie} /> : null}
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
