import React, { useEffect, useState } from "react";
import axios from "../utils/axios";
import { DataLayerValue } from "../context/DataLayer";

const MAIN_API = `/discover/movie?sort_by=popularity.desc&api_key=`;
const IMAGE_PATH = "https://www.themoviedb.org/t/p/w780";

const Feed = () => {
  const [{ search }, dispatch] = DataLayerValue();
  const [searchedMovies, setSearchedMovies] = useState([]);

  console.log(searchedMovies ? searchedMovies : null);
  console.log(
    searchedMovies[0] ? IMAGE_PATH + searchedMovies[0].poster_path : null
  );

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
    <div className="grid gap-[10px] place-items-center lmin:grid-cols-[repeat(3,1fr)] smax:smin:grid-cols-[repeat(2,1fr)] mt-[30px] mx-[10px]">
      {searchedMovies
        ? searchedMovies?.map((movie) => (
            <div
              className="mmin:w-[200px] mmax:[80%] max-w-[300px] my-[20px]"
              key={movie.id}
            >
              <img
                src={
                  movie.poster_path !== null
                    ? IMAGE_PATH + movie.poster_path
                    : "https://www.macmillandictionary.com/external/slideshow/thumb/Grey_thumb.png"
                }
                alt=""
                className="object-cover rounded-[40px] 
                  shadow-[rgba(149,157,165,0.8)_0px_8px_24px] min-h-[300px]"
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
  );
};

export default Feed;
