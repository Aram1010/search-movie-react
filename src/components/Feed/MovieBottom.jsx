import React from "react";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MovieBottom = ({ movie }) => {
  return (
    <div
      className="bg-[rgba(236,240,243,.2)] text-[#ffff] backdrop-blur-[5px] 
    absolute bottom-0 left-0 w-[100%] h-[70px] rounded-[20px] p-[10px]
    flex items-center justify-between"
    >
      <div className="flex-[0.85]">
        <p>{movie.title.length > 15 ? movie.title.substring(0 , 15) + "..." : movie.title}</p>
        <ul className="smin:text-[14px] text-[#cccc]">
          {movie.genres
            ? movie.genres.map((genre, ind) => (
                <span>{(ind ? ", " : "") + genre.name}</span>
              ))
            : null}
        </ul>
      </div>
      <div className="flex items-center flex-0.15">
        <FontAwesomeIcon className="text-[#F2BB2E]" icon={faStar} />
        <p className="ml-[10px]">
          {movie ? `${Math.round(movie.vote_average * 10) / 10}` : null}
        </p>
      </div>
    </div>
  );
};

export default MovieBottom;
