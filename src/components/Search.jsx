import React, { useEffect, useState } from "react";
import axios from "../utils/axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { DataLayerValue } from "../context/DataLayer";

const MAIN_API = `/discover/movie?sort_by=popularity.desc&api_key=`;
const IMAGE_PATH = "https://www.themoviedb.org/t/p/w780";

const Feed = () => {
  const [{ search }, dispatch] = DataLayerValue();
  const [searchedMovies, setSearchedMovies] = useState([]);

  useEffect(() => {
    setSearchedMovies([]);
    getGenres(search);
  }, [search]);

  const getGenres = (search) => {
    if (search) {
      search.results?.map((sr) => {
        if (sr.genre_ids.length > 1) {
          axios
            .get(
              `/movie/${sr.id}?api_key=${process.env.REACT_APP_API_KEY}&append_to_response=credits`
            )
            .then((res) => {
              setSearchedMovies((current) => [...current, res.data]);
            })
            .catch((error) => {
              console.log(error);
            });
        } else {
          return;
        }
      });
    }
  };

  return (
    <div className="mt-[30px]">
      <div
        className="h-[300px] w-[90%] rounded-[30px] my-[0] mx-[auto] bg-cover bg-no-repeat bg-[0%_0%] bg-[center_top] relative"
        style={
          searchedMovies[0]
            ? {
                backgroundImage: `url(${
                  IMAGE_PATH + searchedMovies[0].poster_path
                })`,
              }
            : null
        }
      >
        <button
          type="button"
          className="bg-[rgba(255,255,255,0.5)] backdrop-sepia-[5px] shadow-[rgba(149,157,165,0.5)_0px_8px_24px] 
          p-[12px] text-[#000] rounded-[50px] absolute bottom-[1rem] left-[1rem]"
        >
          <span className="mr-[10px]">Watch the trailer</span>
          <FontAwesomeIcon icon={faPlay} />
        </button>
      </div>
      <div className="flex gap-[10px] mt-[20px] mx-[10px] overflow-x-auto overflow-y-hidden scrollbar-hide">
        {searchedMovies
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
                shadow-[rgba(149,157,165,0.8)_0px_8px_24px] max-w-[200px] max-h-[300px]"
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
          : null}
      </div>
    </div>
  );
};

export default Feed;
