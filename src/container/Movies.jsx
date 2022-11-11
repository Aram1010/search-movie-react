import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "../utils/axios";

const IMAGE_PATH = "https://www.themoviedb.org/t/p/w780";

const Movies = ({ genre }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    let isRender = false;

    const handle = async () => {
      await setTimeout(1000);

      if (!isRender) {
        getMovies();
      }
    };

    handle();

    return () => {
      isRender = true;
    };
  }, []);

  const getMovies = () => {
    axios
      .get(
        `/movie/${genre}?api_key=${process.env.REACT_APP_API_KEY}&append_to_response=credits`
      )
      .then((res) => {
        getOfficialMovies(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getOfficialMovies = (movies_) => {
    if (movies_) {
      movies_.results?.map((movie) => {
        if (movie.genre_ids.length > 1) {
          axios
            .get(
              `/movie/${movie.id}?api_key=${process.env.REACT_APP_API_KEY}&append_to_response=credits`
            )
            .then((res) => {
              setMovies((current) => [...current, res.data]);
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
    <div className="overflow-x-auto overflow-y-hidden scrollbar-hide fxl:place-content-center">
      <h2>Most Popular</h2>
      <ul className="flex gap-[10px] mt-[20px] mx-[10px] items-center">
        {movies
          ? movies?.map((movie) => (
            <li key={movie.id}>
              <NavLink
                to={`/movies/${movie.id}`}
                className="link"
                state={movie}
                end
              >
                <div
                className="relative w-[500px] h-[300px] bg-cover bg-no-repeat rounded-[20px] cursor-pointer"
                style={
                  movie.backdrop_path
                    ? {
                        backgroundImage: `url(${
                          IMAGE_PATH + movie.backdrop_path
                        })`,
                      }
                    : {
                        backgroundImage: `url(${"https://www.macmillandictionary.com/external/slideshow/thumb/Grey_thumb.png"})`,
                      }
                }
              >
                
              </div>
                {movie.title}
              </NavLink>
            </li>
            ))
          : null}
      </ul>
    </div>
  );
};

export default Movies;
