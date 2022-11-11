import React, { useState } from "react";
import { faStar, faPlay, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import YouTube from "react-youtube";
import axios from "../../utils/axios";

const IMAGE_PATH = "https://www.themoviedb.org/t/p/w780";

const opts = {
  width: "100%",
  height: "500",
  playerVars: {
    autoplay: 1,
  },
};

const playBtn = {
  text: "Watch The Trailer",
  text2: "Close",
};

const MovieDescTop = ({ movie }) => {
  const [trailer_KEY, setTrailerKey] = useState("");
  const [isPlayed, setIsPlayed] = useState(false);

  const mToh = (total_minutes) => {
    const hours = Math.floor(total_minutes / 60);
    const minutes = total_minutes % 60;

    return <p className="ml-[20px]">{`${hours}h ${minutes}m`}</p>;
  };

  const renderTrailer = async () => {
    await axios
      .get(
        `/movie/${movie.id}?api_key=${process.env.REACT_APP_API_KEY}&append_to_response=videos`
      )
      .then((res) => {
        let trailerkey = res.data.videos.results.find(
          (trailer_name) => trailer_name.name === "Official Trailer"
        );
        setTrailerKey(
          trailerkey ? trailerkey.key : res.data.videos.results[0].key
        );
      })
      .catch((error) => console.log(error));
    {
      isPlayed ? setIsPlayed(false) : setIsPlayed(true);
    }
  };

  return (
    <div className="realtive">
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
      <div className="absolute w-[100%] z-[99]">
        {isPlayed ? <YouTube videoId={trailer_KEY} opts={opts} /> : null}
      </div>
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
              ? `${Math.round(movie.vote_average * 10) / 10} | ${
                  movie.vote_count
                }`
              : null}
          </p>
          {movie ? mToh(movie.runtime) : null}
        </div>
        <div className="mmax:hidden mt-[10px]">
          <p className="max-h-[100px] max-w-[400px] text-[15px] smin:text-[16px] overflow-y-scroll scrollbar-hide">
            {movie ? movie.overview : null}
          </p>
        </div>
        <button
          type="button"
          className="flex items-center bg-[#ffff] py-[15px] px-[20px] my-[20px]
            text-[12px] smin:px-[20px] smin:py-[17px] text-[#000] shadow-[rgba(149,157,165,0.2)_0px_8px_24px]
            rounded-[10px] hover:scale-[1.05] transition duration-100 ease-in-out absolute z-[100]"
          onClick={() => renderTrailer()}
          style={
            isPlayed
              ? {
                  top: "1rem",
                  right: "1rem",
                  borderRadius: "50px",
                  padding: "15px 20px",
                  display: "block",
                }
              : null
          }
        >
          <p className="mr-[5px]">{!isPlayed ? playBtn.text : null}</p>
          <FontAwesomeIcon icon={!isPlayed ? faPlay : faXmark} />
        </button>
      </div>
      <div
        className="absolute top-0 left-0 w-[100%] h-[100%] bg-[#000] z-[98]"
        style={isPlayed ? { display: "block" } : { display: "none" }}
      ></div>
    </div>
  );
};

export default MovieDescTop;
