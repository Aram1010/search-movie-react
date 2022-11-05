import React, { useEffect, useRef, useState } from "react";
import axios from "../utils/axios";
import { DataLayerValue } from "../context/DataLayer";
import Posters from "../components/Posters";
import SearchedMovies from "../components/SearchedMovies";

const IMAGE_PATH = "https://www.themoviedb.org/t/p/w780";

const Feed = () => {
  const [{ search }, dispatch] = DataLayerValue();
  const [searchedMovies, setSearchedMovies] = useState([]);

  useEffect(() => {
    let isRender = false;

    const handle = async () => {
      await setTimeout(1000);

      if (!isRender) {
        setSearchedMovies([]);
        getGenres(search);
      }
    };

    handle();

    return () => {
      isRender = true;
    };
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
      <Posters searchedMovies={searchedMovies} IMAGE_PATH={IMAGE_PATH} />
      <SearchedMovies searchedMovies={searchedMovies} IMAGE_PATH={IMAGE_PATH} />
    </div>
  );
};

export default Feed;
